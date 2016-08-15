import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editRun() {
      return fetch('http://tiny-tn.herokuapp.com/collections/runs-jm', {
        method: 'post',
        body: JSON.stringify({
          time: this.time,
          date: this.date,
          notes: this.notes
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: 'application/json',
        }
      })
        .then((res) => res.json()).then(() => {
          this.transitionToRoute('run-info');
        });
    }
  }
});
