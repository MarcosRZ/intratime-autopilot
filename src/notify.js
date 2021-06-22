import mailService from './mail.service';
import {
  ENABLE_MAIL_NOTIFICATIONS
} from './config';
class NotifyService {

  /**
   * Logs success data to console and sends email. See .env config.
   */
  async success({ type, timestamp }) {
    
    console.log(`[Notifications] Success: (${type})(${timestamp})`);
    
    if (ENABLE_MAIL_NOTIFICATIONS === 1)
      return mailService.success({ type, timestamp});

    return true;
  }
  
  /**
   * Logs error data to console and sends email. See .env config.
   */
  async error({ type, timestamp, error }) {
    console.log(`[Notifications] Error: (${type})(${timestamp})`, error)
    
    if (ENABLE_MAIL_NOTIFICATIONS === 0) 
      return mailService.error({ type, timestamp, error });

    return true;
  }
}

export default new NotifyService();
