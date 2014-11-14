'use strict';
/* global require, module, __dirname */
var path        = require('path');
var fs          = require('fs');
var mergeTrees  = require('broccoli-merge-trees');
var pickFiles   = require('broccoli-static-compiler');

module.exports = {
  name: 'ember-cli-velocity',
  treeFor: function treeFor( name ) {
    if (name !== 'vendor') { return; }

    var treePath = path.join('node_modules', 'ember-cli-velocity', 'node_modules');

    var tree;

    if (fs.existsSync(treePath)) {
      tree = unwatchedTree(treePath);
    }

    if (typeof tree === 'undefined') {
      treePath = path.join(__dirname, 'node_modules');
      if (fs.existsSync(treePath)) {
        tree = unwatchedTree(treePath);
      }
    }

    var vendor = unwatchedTree(path.join(__dirname, 'vendor'));

    return mergeTrees([tree, vendor]);
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

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}
