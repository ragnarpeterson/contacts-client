var Contact = DS.Model.extend({
  name: DS.attr('string'),
  twitter: DS.attr('string'),
  notes: DS.attr('string')
});

export default Contact;