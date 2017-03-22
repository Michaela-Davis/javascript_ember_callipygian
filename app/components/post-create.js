import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost1() {
      var params = {
        title: this.get('title'),
        username: this.get('username'),
        caption: this.get('caption'),
        imageURL: this.get('imageURL')
      };
      this.sendAction('savePost2', params);
    }
  }
});
