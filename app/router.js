import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('new-run', { path: '/new-run' });
  this.route('run-info', { path: '/:id' });
  this.route('edit-run', { path: '/:id/edit-run' });
});

export default Router;
