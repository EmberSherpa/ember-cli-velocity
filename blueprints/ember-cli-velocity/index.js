/*jshint node:true*/
module.exports = {
  description: 'Install Dependencies',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addPackageToProject('velocity-animate', '1.5.0');
  }
};
