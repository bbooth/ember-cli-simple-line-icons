/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-simple-line-icons',
  included: function (app) {
    this.app = app;
    this._super.included(app);

    app.import("vendor/simple-line-icons/css/simple-line-icons.css", { destDir: "fonts" });
    app.import("vendor/simple-line-icons/fonts/Simple-Line-Icons.eot", { destDir: "fonts" });
    app.import("vendor/simple-line-icons/fonts/Simple-Line-Icons.svg", { destDir: "fonts" });
    app.import("vendor/simple-line-icons/fonts/Simple-Line-Icons.ttf", { destDir: "fonts" });
    app.import("vendor/simple-line-icons/fonts/Simple-Line-Icons.woff", { destDir: "fonts" });
  }
};
