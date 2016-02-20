/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-simple-uuid',

  included: function (app) {
    this._super.included(app);

    this.app.import(app.bowerDirectory + '/node-uuid/uuid.js');
  }
};
