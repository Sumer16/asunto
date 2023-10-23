import { notFound } from 'next/navigation';
import { getServerSession } from 'next-auth';

import prisma from '@/prisma/client';

import EditIssueButton from './EditIssueButton';
import DeleteIssueButton from './DeleteIssueButton';
import IssueDetails from './IssueDetails';

import authOptions from '@/app/auth/authOptions';

import { 
  Box, 
  Grid,
  Flex,
} from '@radix-ui/themes';

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const session = await getServerSession(authOptions);

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue)
    notFound();

  return (
    <Grid columns={{ initial: '1', sm: '5' }} gap='5'>
      <Box className='md:col-span-4'>
        <IssueDetails issue={issue} />
      </Box>
      {session && (
        <Box>
          <Flex direction='column' gap='4'>
            <EditIssueButton issueId={issue.id} />
            <DeleteIssueButton issueId={issue.id} />
          </Flex>
        </Box>
      )}
    </Grid>
  )
}

export default IssueDetailPage;
