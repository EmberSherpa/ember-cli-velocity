'use strict';

var path = require('path');
var fs   = require('fs');

module.exports = {
  name: 'ember-cli-velocity',
  treeFor: function treeFor(name) {
    if (name !== 'vendor') { return; }

    var treePath = path.join('node_modules', 'ember-cli-velocity', 'node_modules');

    var addon;

    if (fs.existsSync(treePath)) {
      addon = unwatchedTree(treePath);
    }

    return addon;
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
  }
};

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}