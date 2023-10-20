import React from 'react';
import Link from 'next/link';

import { Button } from '@radix-ui/themes';

const IssuesPage = () => {
  return (
    <div>
      <Button>
        <Link href="/issues/new">
          Create Issue
        </Link>
      </Button>
    </div>
  )
}

export default IssuesPage;
