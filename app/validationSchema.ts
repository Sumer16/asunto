import * as z from 'zod';

export const issueSchema = z.object({
  title: z.string().min(1, {
    message: 'Issue name is required.'
  }).max(255),
  description: z.string().min(1, {
    message: 'Issue description is required.'
  }).max(65535),
});
