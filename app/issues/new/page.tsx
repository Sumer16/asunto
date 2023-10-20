'use client';

import { useForm, useController, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import axios from 'axios';

import { Button, Callout, TextField } from '@radix-ui/themes';
import { RxInfoCircled } from 'react-icons/rx';
import { useState } from 'react'

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>();
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
        <Controller 
          name='description'
          control={control}
          render={({field}) => <SimpleMDE placeholder='Add description for your issue...' {...field} />}
        />
        <Button>Submit New Issue</Button>
      </form>
    </div>
  )
}

export default NewIssuePage;
