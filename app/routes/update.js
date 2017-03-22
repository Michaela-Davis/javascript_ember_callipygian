import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    update(post, params) {
      post.save();
      this.transitionTo('index');
    }
  }
});
