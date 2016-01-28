/**
 * views/header/header.js
 *
 * @description: Header view
 * @author: Chris Young (cyoung@mobiquityinc.com)
 */

var fs = require('fs');

module.exports = Backbone.View.extend({

  /**
   * Header.initialize()
   * @description: Loads template and renders view
   * @param: {Object} options
   */
  initialize: function (options) {
    _.extend(this, options);

    this.template = _.template(fs.readFileSync(__dirname + '/header.tmpl', 'utf-8'));
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
