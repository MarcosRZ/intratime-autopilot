# Intratime autopilot

## 🔨 Build

  ```npm i && npm run build```

## 🔧 Configure
Create a .env file and configure ```API_USER``` and ```API_PASS```. Also have a look at the ```CHECK_USER_IN_TIME``` and ```CHECK_USER_OUT_TIME``` params and change it to fit your work timing. Format must be ```HH:MM:SS``` for both.

Mail notifications are DISABLED by default. Set ```ENABLE_MAIL_NOTIFICATIONS``` to 1 in .env and provide a valid config to enable this feature.
An email will be sent on every run in order to inform about the results. "Less secure apps access" must be granted in order to enable SMTP mailing. **This might compromise your account integrity**.

Read more about less secure apps feature [here](https://support.google.com/accounts/answer/6010255)

There are a few more parameters that can be configured but defaults should be fine. A template .env file is included in the root folder. Just copy-paste it and modify.

## 🚀 Run 

  ```npm start ( IN | OUT | INOUT )```

## ✅ Test 

  ```npm run test```

Due to lack of PRE environment, check in and check out tests were not implemented. But API health, error and success mail notifications, etc are present.

See ```src/test``` folder.

## Behaviour

Default behaviour fits my personal circumstances. Because of this, the date is automatically obtained from the current date. Time is taken from ```CHECK_USER_IN_TIME``` and ```CHECK_USER_OUT_TIME``` params in .env file. This allows to perform a "deferred check in and out".

If you want to make something different, have a look at the main entry point (```main.js```), and feel free to fork the project.

## Additional notes
The intended use of this project is to configure a CRON job and avoid the repetitive task of check in and out every single day.

Calendar support is not implemented yet but I have strong plans to add a vacances.json file or something like that.

## Disclaimer
This project is not well tested. It might not work properly for thousands of reasons. Use with caution and don't forget to doublecheck that everything is working, or you probably might run into problems. Of course, I'm not responsible about that.

Contributions are welcome. Feel free to PR.

**Enjoi.**