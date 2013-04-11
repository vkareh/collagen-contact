var email = require('email');

models.CollagenContact.prototype.sync = function(method, model, options) {
    if (method !== 'create') return options.error(new Error('There was an error submitting your form'));
    if (!email.isValidAddress(model.get('email'))) return options.error(new Error(model.get('email') + ' is not a valid email address'));

    var mail = new email.Email({
        from: model.get('email'),
        to: Collagen.config.email,
        subject: '[' + Collagen.config.name + '] ' + model.get('subject'),
        body: model.get('message')
    });

    mail.send(function(err) {
        if (err) return options.error(err);
        options.success(model);
    });
}
