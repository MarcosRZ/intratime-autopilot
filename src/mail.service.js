import nodemailer from 'nodemailer';

class MailService {
  async _createTransport(host, port, secure) {
    const options = {
      host: host || process.env.SMTP_HOST,
      port: port || process.env.SMTP_PORT,
      secure: secure || process.env.SMTP_SECURE,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    };

    return nodemailer.createTransport(options);

    // transporter.verify(function(error, success) {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log("Server is ready to take our messages");
    //   }
    // });
  }

  async _sendEmail(email, transporter) {

    return new Promise((resolve, reject) => {

      try {
        resolve(transporter.sendMail(email));
      } catch (e) {
        reject(e);
      }

    })

    // TODO: Add logging
  }

  async success({ type, timestamp }) {

    const transporter = await this._createTransport();

    const date = new Date();

    const emailObject = {
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: `[INTRATIME AUTOPILOT SUCCESS]`,
      text: `
        A new entry was registered at ${date},
        Type: ${type},
        Timestamp: ${timestamp},
      `,
      html: `
      <h1>A new entry was registered at ${date}</h1>
      <ul>
        <li><b>Type:</b> ${type}
        <li><b>Timestamp:</b> ${timestamp}</li>
      </ul>`,
    };

    return this._sendEmail(emailObject, transporter);
  }

  async error({ type, timestamp, error }) {

    const transporter = await this._createTransport();

    const date = new Date();

    const emailObject = {
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: `[INTRATIME AUTOPILOT ERROR] Warning: There was an error trying to create an entry`,
      text: `
        Error trying to create a new entry at ${date},
        Type: ${type},
        Timestamp: ${timestamp},
        Error: ${error.message}
      `,
      html: `
      <h1>Error trying to create a new entry at ${date}</h1>
      <ul>
        <li><b>Type:</b> ${type}
        <li><b>Timestamp:</b> ${timestamp}</li>
        <li><b>Error:</b> ${error.message}</li>
      </ul>`,
    };

    return this._sendEmail(emailObject, transporter);
  }
}

export default new MailService();
