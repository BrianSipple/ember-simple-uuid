/*jshint node:true*/
module.exports = {
  description: 'Add the node-uuid bower package to the project',

  normalizeEntityName: function () {

  },

  afterInstall: function(options) {
    return this.addBowerPackageToProject('node-uuid', '1.4.7');
  }
};
