var ContactsShowController = Ember.ObjectController.extend({
  twitterDisplay: function() {
    var twitter = this.get('twitter');
    return twitter && '@' + twitter;
  }.property('twitter')
});

export default ContactsShowController;
