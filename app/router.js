import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('tritryst');
  this.route('moveprocessed');
  this.route('frogsimon');
});

export default Router;
