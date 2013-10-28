var ContactsEditRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('contact', params.id);
  },

  deactivate: function() {
    this.currentModel.rollback();
  },

  actions: {
    save: function() {
      var route = this;

      this.currentModel.save().then(function(contact) {
        route.transitionTo('contacts.show', contact);
      });
    },

    cancel: function() {
      this.transitionTo('contacts.show', this.currentModel);
    }
  }
});

export default ContactsEditRoute;
