
import registerViews from 'app/initializers/register_views';


// New resolver update removes the need of this initializer

export default {
  name: 'register-views',

  initialize: function(container, application) {
    registerViews(container, 'app');
  }
};
