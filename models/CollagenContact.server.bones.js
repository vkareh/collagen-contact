var email = require('email')
,   nodemailer = require('nodemailer');

models.CollagenContact.prototype.sync = function(method, model, options) {
    if (method !== 'create') return options.error(new Error('There was an error submitting your form'));
    if (!email.isValidAddress(model.get('email'))) return options.error(new Error(model.get('email') + ' is not a valid email address'));

    var transport = nodemailer.createTransport(Collagen.config.mailer && Collagen.config.mailer.type || 'Sendmail', Collagen.config.mailer);

    var transportOptions = {
        from: Collagen.config.name + ' <' + Collagen.config.email + '>',
        replyTo: model.get('name') + ' <' + model.get('email') + '>',
        to: Collagen.config.email,
        subject: '[' + Collagen.config.name + '] ' + model.get('subject'),
        text: model.get('message')
    }

    transport.sendMail(transportOptions, function(err, response) {
        if (err) return options.error(err);
        options.success(model);
    });
}
