'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';

import { Issue } from '@prisma/client';
import axios from 'axios';
import 'easymde/dist/easymde.min.css';
import SimpleMDE from 'react-simplemde-editor';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { issueSchema } from '@/app/validationSchema';
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';

import { Button, Callout, TextField } from '@radix-ui/themes';

type IssueFormData = z.infer<typeof issueSchema>;

const IssueForm = ({ issue }: { issue?: Issue }) => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormData>({
    resolver: zodResolver(issueSchema),
  });

  const [error, setError] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);

      if (issue) { 
        await axios.patch('/api/issues/' + issue.id, data); 
      } else { 
        await axios.post('/api/issues', data);
      }

      router.push('/issues/list');
      router.refresh();
    } catch (error) {
      setSubmitting(false);
      setError('An unexpected error occurred.');
    }
  });

  return (
    <div className='max-w-xl'>
      {error && (
        <Callout.Root color='red' className='mb-5'>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className='space-y-3' onSubmit={onSubmit}>
        <TextField.Root>
          <TextField.Input 
            defaultValue={issue?.title} 
            placeholder='Add title for the issue...' 
            {...register('title')} 
          />
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name='description'
          control={control}
          defaultValue={issue?.description}
          render={({ field }) => (
            <SimpleMDE placeholder='Add description about the issue...' {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmitting}>
          {issue ? 'Update Issue' : 'Submit New Issue'}{' '}
          {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
