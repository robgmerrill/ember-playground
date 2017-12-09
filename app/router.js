import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});
// comment
// i am a comment on a new branch
Router.map(function() {
});

export default Router;
