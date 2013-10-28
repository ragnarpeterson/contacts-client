var ContactsShowRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('contact', params.id);
  },

  actions: {
    deleteContact: function() {
      var contact = this.currentModel,
          route = this;

      contact.deleteRecord();
      contact.save().then(function() {
        route.transitionTo('contacts');
      });
    }
  }
});

export default ContactsShowRoute;
