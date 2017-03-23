import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
      var params = {
        username: this.get('username'),
        date: this.get('date'),
        content: this.get('content')
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
    },
    commentFormHide() {
      this.set('addNewComment', false);
    }
  }
});
