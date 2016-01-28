(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * main.js
 *
 * @description: Backbone 101 main script
 * @author: Chris Young (cyoung@mobiquityinc.com)
 */

(function () {

  'use strict';

  var Dashboard = require('./views/dashboard/dashboard.js'),
      Header = require('./views/header/header.js'),
      Navigation = require('./views/navigation/navigation.js'),
      Home = require('./views/home/home.js');

  var Application = Backbone.Router.extend({

    /**
     * Application.initialize()
     * @description: Sets up the header and navigation views
     */
    initialize: function () {
      this.elements = {
        $header: $('#header'),
        $navigation: $('#navigation'),
        $contentWrapper: $('#content-wrapper'),
        $content: $('#content')
      };

      this.views = {};
      this.views.header = new Header({
        $el: this.elements.$header
      });
      this.views.navigation = new Navigation({
        $el: this.elements.$navigation
      });

      var headerHeight = this.elements.$header.css('height');
      this.elements.$contentWrapper.css('height', 'calc(100% - ' + headerHeight + ')');

      console.log('Application.initialize()');

      Backbone.history.start();
    },

    /**
     * Application.routes
     * @description: Declares application routes
     */
    routes: {
      '': 'redirectToDashboard',
      'dashboard': 'renderDashboard',
      'home': 'renderHome'
    },

    /**
     * Application.redirectToDashboard()
     * @description: Redirects to the dashboard route if no route is specified
     */
    redirectToDashboard: function () {
      window.location = '#/dashboard';
    },

    /**
     * Application.renderDashboard()
     * @description: Draws the dashboard view
     */
    renderDashboard: function () {
      if (!this.views.dashboard) {
        this.views.dashboard = new Dashboard({
          $el: this.elements.$content
        });
      } else {
        this.views.dashboard.render();
      }
    },

    /**
     * Application.renderHome()
     * @description: Draws the home view
     */
    renderHome: function () {
      if (!this.views.home) {
        this.views.home = new Home({
          $el: this.elements.$content
        });
      } else {
        this.views.home.render();
      }
    }

  });

  var Backbone101 = new Application();
  console.log('Backbone101', Backbone101);

})();

},{"./views/dashboard/dashboard.js":2,"./views/header/header.js":3,"./views/home/home.js":4,"./views/navigation/navigation.js":5}],2:[function(require,module,exports){
/**
 * views/dashboard/dashboard.js
 *
 * @description: Dashboard view
 * @author: Chris Young (cyoung@mobiquityinc.com)
 */



module.exports = Backbone.View.extend({

  /**
   * Dashboard.initialize()
   * @description: Loads template and renders view
   * @param: {Object} options
   */
  initialize: function (options) {
    _.extend(this, options);

    this.template = _.template("<div id=\"dashboard\" class=\"row\">\n  <h1>Dashboard</h1>\n</div>\n");
    this.render();
  },

  /**
   * Dashboard.render()
   * @description: Draws the view
   */
  render: function () {
    this.$el.html(this.template());
  }

});

},{}],3:[function(require,module,exports){
/**
 * views/header/header.js
 *
 * @description: Header view
 * @author: Chris Young (cyoung@mobiquityinc.com)
 */



module.exports = Backbone.View.extend({

  /**
   * Header.initialize()
   * @description: Loads template and renders view
   * @param: {Object} options
   */
  initialize: function (options) {
    _.extend(this, options);

    this.template = _.template("<div class=\"col-xs-12\">\n\n  <h1 class=\"text-center\">Header</h1>\n\n</div>\n");
    this.render();
  },

  /**
   * Header.render()
   * @description: Draws the view
   */
  render: function () {
    this.$el.html(this.template());
  }

});

},{}],4:[function(require,module,exports){
/**
 * views/home/home.js
 *
 * @description: Home view
 * @author: Chris Young (cyoung@mobiquityinc.com)
 */



module.exports = Backbone.View.extend({

  /**
   * Home.initialize()
   * @description: Loads template and renders view
   * @param: {Object} options
   */
  initialize: function (options) {
    _.extend(this, options);

    this.template = _.template("<div id=\"home\" class=\"row\">\n  <h1>Home</h1>\n</div>\n");
    this.render();
  },

  /**
   * Home.render()
   * @description: Draws the view
   */
  render: function () {
    this.$el.html(this.template());
  }

});

},{}],5:[function(require,module,exports){
/**
 * views/navigation/navigation.js
 *
 * @description: Navigation view
 * @author: Chris Young (cyoung@mobiquityinc.com)
 */



module.exports = Backbone.View.extend({

  /**
   * Navigation.initialize()
   * @description: Loads template and renders the view
   * @param: {Object} options
   */
  initialize: function (options) {
    _.extend(this, options);

    this.template = _.template("<h1>Navigation</h1>\n\n<ul>\n  <li><a href=\"#/dashboard\">Dashboard</a></li>\n  <li><a href=\"#/home\">Home</a></li>\n</ul>\n");
    this.render();
  },

  /**
   * Navigation.render()
   * @description: Draws the view
   */
  render: function () {
    this.$el.html(this.template());
  }

});

},{}]},{},[1]);
