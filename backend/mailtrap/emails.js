import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplate.js";

import { resend, sender } from "./resend.config.js";

// =============== VERIFICATION EMAIL ===============
export const sendVerificationEmail = async (email, verificationToken) => {
  try {
    const response = await resend.emails.send({
      from: sender,
      to: email, // Resend accepts string
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
    });

    console.log("Verification email sent:", response);
    return response;
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw error;
  }
};

// =============== WELCOME EMAIL ===============
export const sendWelcomeEmail = async (email, name) => {
  try {
    const response = await resend.emails.send({
      from: sender,
      to: email,
      subject: "Welcome!",
      html: `<h2>Welcome ${name}!</h2><p>Thanks for joining.</p>`,
    });

    console.log("Welcome email sent:", response);
    return response;
  } catch (error) {
    console.error("Error sending welcome email:", error);
    throw error;
  }
};

// =============== PASSWORD RESET EMAIL ===============
export const sendPasswordResetEmail = async (email, resetURL) => {
  try {
    const response = await resend.emails.send({
      from: sender,
      to: email,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
    });

    console.log("Password reset email sent:", response);
    return response;
  } catch (error) {
    console.error("Error sending password reset email:", error);
    throw error;
  }
};

// =============== RESET SUCCESS EMAIL ===============
export const sendResetSuccessEmail = async (email) => {
  try {
    const response = await resend.emails.send({
      from: sender,
      to: email,
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    });

    console.log("Reset success email sent:", response);
    return response;
  } catch (error) {
    console.error("Error sending password reset success email:", error);
    throw error;
  }
};
