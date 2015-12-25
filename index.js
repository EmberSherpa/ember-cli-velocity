'use strict';
/* global process, require, module, __dirname */
var path = require('path');

var unwatchedTree = require('broccoli-unwatched-tree');
var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');

module.exports = {
  name: 'ember-cli-velocity',

  treeForVendor: function treeForVendor() {
     var emberCliVelocity = unwatchedTree(path.join(__dirname, 'vendor'));
     var velocityAnimate = pickFiles(unwatchedTree(require.resolve('velocity-animate').replace('velocity.js', '')), {
       srcDir: '/',
       files: ['*.js'],
       destDir: 'velocity-animate'
    });
    return mergeTrees([emberCliVelocity, velocityAnimate]);
  },

  velocityOptions: function () {
    var env  = process.env.EMBER_ENV;
    return this.project.config(env).velocityOptions || { enabled: true, ui: false };
  },

  included: function(app) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    var emberCLIVersion = app.project.emberCLIVersion();
    if (emberCLIVersion < '0.0.41') {
      throw new Error('ember-cli-velocity requires ember-cli version 0.0.41 or greater.\n');
    }

    var options = this.velocityOptions();

    if (options.enabled === false) {
      return;
    }

    app.import('vendor/velocity-animate/velocity.js');
    if (options.ui) {
      app.import('vendor/velocity-animate/velocity.ui.js');
    }
    app.import('vendor/ember-cli-velocity/velocity-promise-shim.js');
  }

};
