'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { issueSchema } from '@/app/validationSchema';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import axios from 'axios';
import { z } from 'zod';

import { Button, Callout, Text, TextField } from '@radix-ui/themes';
import { RxInfoCircled } from 'react-icons/rx';
import ErrorMessage from '@/app/components/ErrorMessage'

type IssueForm = z.infer<typeof issueSchema>;

const NewIssuePage = () => {
  const { register, control, handleSubmit, formState: { errors } } = useForm<IssueForm>({ 
    resolver : zodResolver(issueSchema)
  });
  const router = useRouter();

  const [ error, setError ] = useState('');

  return (
    <div className='max-w-xl'>
      {error && 
      (<Callout.Root color='red' className='mb-4'>
        <Callout.Icon>
          <RxInfoCircled />
        </Callout.Icon>
        <Callout.Text>
          You will need admin privileges to install and access this application.
        </Callout.Text>
      </Callout.Root>)}
      <form 
        className='space-y-3'
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post('/api/issues', data);
            router.push('/issues');
          } catch (error) {
            setError('An unexpected error occurred.');
          }
        })}
      >
        <TextField.Root>
          <TextField.Input placeholder='Create a new Issue...' {...register('title')} />
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller 
          name='description'
          control={control}
          render={({field}) => <SimpleMDE placeholder='Add description for your issue...' {...field} />}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button>Submit New Issue</Button>
      </form>
    </div>
  )
}

export default NewIssuePage;
