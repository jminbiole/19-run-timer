import Ember from 'ember';

export default Ember.Route.extend({
  model({id}) {
    return fetch(`http://tiny-tn.herokuapp.com/collections/runs-jm/${id}`)
      .then((res) => res.json());
  }
});
