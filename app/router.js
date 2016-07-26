import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('new-run');
  this.route('run-info');
  this.route('run-item');
});

export default Router;
