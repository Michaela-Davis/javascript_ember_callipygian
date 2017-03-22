import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  caption: DS.attr(),
  imageURL: DS.attr(),
  username: DS.attr()
});
