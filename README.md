Collagen Contact
================

This module provides a contact form in a [Collagen.js](http://collagenjs.org)
website.

The contact form can be found by navigating to `/contact` or by clicking on the
"Contact" link in the top navigation bar.

### Installation
To install, run `npm install collagen-contact` and add
`require('collagen-contact')` to your `index.js` file.

### Configuration
Collagen Contact will use the _Sendmail_ messaging transport by default. To
override, add the following information to your `collagen.json` file:

```js
{
    "mailer": {
        "type": "SMTP",
        "service": "Gmail",
        "auth": {
            "user": "gmail.user@gmail.com",
            "pass": "gmailpass"
        }
    }
}
```
Have a look at the [nodemailer documentation](http://www.nodemailer.com) for all
the options (scroll down to "Possible transport methods").

All contact messages will be sent to the _email_ attribute configured in your
`collagen.json` file.
