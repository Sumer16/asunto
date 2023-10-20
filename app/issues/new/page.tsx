'use client';

import { useForm, useController, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import axios from 'axios';

import { Button, TextField } from '@radix-ui/themes';

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const router = useRouter();

  return (
    <form 
      onSubmit={handleSubmit(async (data) => {
        await axios.post('/api/issues', data);
        router.push('/issues');
      })}
      className='max-w-xl space-y-3'
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
  )
}

export default NewIssuePage;
