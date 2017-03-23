import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updatePost(post, params) {
      this.sendAction('updatePost', post, params);
    },
    updateComment(comment, params) {
      this.sendAction('updateComment', comment, params);
    },
    deletePost(post) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('destroyPost', post);
      }
    },
    destroyComment(comment) {
      this.sendAction('destroyComment', comment);
    }
  }
});
