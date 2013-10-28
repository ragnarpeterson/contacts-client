var ContactsNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('contact');
  },

  actions: {
    save: function() {
      var route = this;

      this.currentModel.save().then(function(contact) {
        route.transitionTo('contacts.show', contact);
      });
    },

    cancel: function() {
      this.transitionTo('contacts.index');
    }
  }
});

export default ContactsNewRoute;
