import nodemailer from 'nodemailer';
import mailService from './mail.service';

class NotifyService {

  /**
   * Logs success data to console and sends email. See .env config.
   */
  async success({ type, timestamp }) {
    
    console.log(`[Notifications] Success: (${type})(${timestamp})`);
    
    return mailService.success({ type, timestamp});
  }
  
  /**
   * Logs error data to console and sends email. See .env config.
   */
  async error({ type, timestamp, error }) {

    console.log(`[Notifications] Error: (${type})(${timestamp})`, error)

    return mailService.error({ type, timestamp, error });
  }
}

export default new NotifyService();
