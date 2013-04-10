model = models.Model.extend({
    schema: {
        type: 'object',
        properties: {
            name: {title: 'Name', type: 'string', required: true},
            email: {title: 'E-mail', type: 'string', format: 'email', required: true},
            subject: {title: 'Subject', type: 'string', required: true},
            message: {title: 'Message', type: 'string', required: true}
        }
    }
});
