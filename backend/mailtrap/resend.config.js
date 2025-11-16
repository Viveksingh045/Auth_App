import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

export const resend = new Resend(process.env.RESEND_API_KEY);

export const sender = "Auth App <thinkwithvivek6788@vivekcodes.me>";