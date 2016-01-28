/**
 * views/dashboard/dashboard.js
 *
 * @description: Dashboard view
 * @author: Chris Young (cyoung@mobiquityinc.com)
 */

var fs = require('fs');

module.exports = Backbone.View.extend({

  /**
   * Dashboard.initialize()
   * @description: Loads template and renders view
   * @param: {Object} options
   */
  initialize: function (options) {
    _.extend(this, options);

    this.template = _.template(fs.readFileSync(__dirname + '/dashboard.tmpl', 'utf-8'));
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
