view = views.Collagen.extend({
    pageTitle: 'Contact',
    render: function() {
        $(this.el).empty().append(templates.CollagenContact());
        return this;
    },
    attach: function() {
        new ContactForm({
            model: this.model,
            el: $('div#form')
        });
        return this;
    }
});

var ContactForm = views.CollagenForm.extend({
    template: 'CollagenContactForm',
    submit: function(event, data) {
        this.model.save(data, {
            success: function(model) {
                Collagen.message('success', 'Your message has been sent successfully');
                $('#submit').attr('disabled', 'disabled');
            },
            error: Collagen.error
        });
    },
});

views.CollagenNavBar.augment({
    menuItems: [{path: '/contact', label: 'Contact', weight: 10}]
});
