/**
 * A set of functions called "actions" for `send-email`
 */

export default {
  async send(ctx) {
    try {
      const { to, subject, text, html } = ctx.request.body;

      await strapi.plugins['email'].services.email.send({
        to,
        from: process.env.EMAIL_ADDRESS_FROM,
        subject,
        text,
        html,
      });

      ctx.send({ message: 'Email sent successfully' });
    } catch (err) {
      ctx.send({ error: 'Email sending failed' });
    }
  },
};
