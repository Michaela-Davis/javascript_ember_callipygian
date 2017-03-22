import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    savePost3(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    }

  }
});
