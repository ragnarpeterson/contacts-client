var Router = Em.Router.extend({
  location: 'history'
});

Router.map(function(){
  this.resource('contacts', function() {
    this.route('new');
    this.route('show', { path: '/:id' });
    this.route('edit', { path: '/:id/edit' });
  });
});

export default Router;
