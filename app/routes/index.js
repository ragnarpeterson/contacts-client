var IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('contacts');
  }
});

export default IndexRoute;
