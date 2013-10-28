var ContactsRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('contact', {}, function(contact) {
      return !contact.get('isNew');
    });
  }
});

export default ContactsRoute;
