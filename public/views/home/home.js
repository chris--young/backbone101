/**
 * views/home/home.js
 *
 * @description: Home view
 * @author: Chris Young (cyoung@mobiquityinc.com)
 */

var fs = require('fs');

module.exports = Backbone.View.extend({

  /**
   * Home.initialize()
   * @description: Loads template and renders view
   * @param: {Object} options
   */
  initialize: function (options) {
    _.extend(this, options);

    this.template = _.template(fs.readFileSync(__dirname + '/home.tmpl', 'utf-8'));
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
