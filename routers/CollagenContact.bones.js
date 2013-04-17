router = routers.Collagen.extend({
    routes: {
        'contact': 'contact'
    },
    contact: function() {
        this.send(views.CollagenContact, {
            model: new models.CollagenContact()
        });
    }
});
