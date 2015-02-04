/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-simple-line-icons',
  included: function (app) {
    this.app = app;
    this._super.included(app);

    app.import("vendor/simple-line-icons/css/simple-line-icons.css");
    app.import("vendor/simple-line-icons/fonts/Simple-Line-Icons.eot");
    app.import("vendor/simple-line-icons/fonts/Simple-Line-Icons.svg");
    app.import("vendor/simple-line-icons/fonts/Simple-Line-Icons.ttf");
    app.import("vendor/simple-line-icons/fonts/Simple-Line-Icons.woff");
  }
};
