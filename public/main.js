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
