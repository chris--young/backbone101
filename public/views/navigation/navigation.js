/**
 * views/navigation/navigation.js
 *
 * @description: Navigation view
 * @author: Chris Young (cyoung@mobiquityinc.com)
 */

var fs = require('fs');

module.exports = Backbone.View.extend({

  /**
   * Navigation.initialize()
   * @description: Loads template and renders the view
   * @param: {Object} options
   */
  initialize: function (options) {
    _.extend(this, options);

    this.template = _.template(fs.readFileSync(__dirname + '/navigation.tmpl', 'utf-8'));
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
