import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

(async function () {
  const { data, error } = await resend.emails.send({
    from: 'Password Reset <thinkwithvivek6788@vivekcodes.me>',
    to: ['vivekkumarsingh9450@gmail.com'],
    subject: 'Password Reset',
    html: '<strong>Instructions to reset your password</strong>',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();