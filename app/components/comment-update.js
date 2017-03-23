import Ember from 'ember';

export default Ember.Component.extend({
  isCommentUpdateShowing: false,
  actions: {
    showCommentUpdateForm: function() {
      this.set('isCommentUpdateShowing', true);
    },
    hideCommentUpdateForm: function() {
      this.set('isCommentUpdateShowing', false);
    },
    update(comment) {
      var params = {
        username: this.get('username'),
        content: this.get('content'),
        date: this.get('date'),
        post: this.get('post')
      };
      this.set('isCommentUpdateShowing', false);
      this.sendAction('update', comment, params);
    }
  }
});
