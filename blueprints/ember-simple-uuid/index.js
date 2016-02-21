/*jshint node:true*/
module.exports = {
  description: 'Add the node-uuid bower package to the project',

  afterInstall: function(options) {
    return this.addBowerPackageToProject('node-uuid', '1.4.7');
  }
};
