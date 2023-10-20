'use client';

import React from 'react'

import { Button, TextArea, TextField } from '@radix-ui/themes';

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root>
        <TextField.Input placeholder="Create a new Issue..." />
      </TextField.Root>
      <TextArea placeholder="Add description for your issue..." />
      <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage;
