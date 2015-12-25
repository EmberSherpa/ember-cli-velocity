/*jshint node:true*/
module.exports = {
  description: 'Install Dependencies',

  normalizeEntityName: function() {},

  afterInstall: function() {
    this.addPackageToProject('velocity-animate', '1.2.3');
  }
};
