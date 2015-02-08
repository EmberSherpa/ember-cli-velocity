'use strict';
/* global require, module, __dirname */
var path        = require('path');

module.exports = {
  name: 'ember-cli-velocity',
  treeForVendor: function treeForVendor( name ) {
    var unwatchedTree = require('broccoli-unwatched-tree');
    var js = this.pickFiles(unwatchedTree(path.join(__dirname, 'node_modules', 'velocity-animate')), {
      srcDir: '/',
      files: ['*.js'],
      destDir: 'velocity-animate'
    });
    return log(js);
  },
  included: function included(app) {
    this.app = app;
    var options = this.app.options.velocityOptions || {enabled: true, ui: false};

    if (options.enabled) {
      this.app.import('vendor/velocity-animate/velocity.js');
    }
    if (options.ui) {
      this.app.import('vendor/velocity-animate/velocity.ui.js');
    }
    this.app.import('vendor/ember-cli-velocity/velocity-promise-shim.js');
  }
};
