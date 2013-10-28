var ContactForm = Ember.Component.extend({
  contact: null,
  saveText: 'Save',
  cancelText: 'Cancel',
  saveAction: 'save',
  cancelAction: 'cancel',

  actions: {
    submit: function() {
      this.sendAction('saveAction');
    },

    cancel: function() {
      this.sendAction('cancelAction');
    }
  }
});

export default ContactForm;
