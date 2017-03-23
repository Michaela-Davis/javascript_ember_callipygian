import Ember from 'ember';

export default Ember.Component.extend({
  isUpdateShowing: false,
  actions: {
    showUpdateForm: function() {
      this.set('isUpdateShowing', true);
    },
    hideUpdateForm: function() {
      this.set('isUpdateShowing', false);
    },
    updatePost(post) {
      var params = {
        title: this.get('title'),
        username: this.get('username'),
        caption: this.get('caption'),
        imageURL: this.get('imageURL')
      };
      this.set('isUpdateShowing', false);
      this.sendAction('updatePost', post, params);
    }
  }
});
