import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteRun(run) {
      fetch('http://tiny-tn.herokuapp.com/collections/runs-jm/' + run._id, {
         method: 'Delete',
       }).then(() => {
          const updatedList = this.model.filter((item) => {
            return item._id !== run._id;
          });
      this.set('model', updatedList);
        });
    }
}
});
