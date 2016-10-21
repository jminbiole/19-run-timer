import Ember from 'ember';


export default Ember.Controller.extend({
  actions: {
    editRun(id) {
      const model = this.model;

      return fetch(`http://tiny-tn.herokuapp.com/collections/runs-jm/${id}`, {
        method: 'PUT',
        body: JSON.stringify(model),
        headers: {
          "Content-Type": "application/json",
          Accept: 'application/json',
        }
      })
        .then((res) => res.json()).then(() => {
          this.transitionToRoute('run-info', this.model._id);
        });
    }
  }
});
