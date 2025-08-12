// lib/inngest/client.ts
import { Inngest } from 'inngest';

export const inngest = new Inngest({ name: 'My App' });

// lib/inngest/functions.ts
import { inngest } from './client';

export const sendEmail = inngest.createFunction(
  { name: 'Send Email' },
  { event: 'email/send' },
  async ({ event }) => {
    const { to, subject, body } = event.data;
    await emailService.send({ to, subject, body });
  }
);