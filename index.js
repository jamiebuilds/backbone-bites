(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['backbone', 'underscore'], function(Backbone, _) {
      factory(Backbone, _);
    });
  } else if (typeof exports !== 'undefined') {
    factory(require('backbone'), require('underscore'));
  } else {
    factory(Backbone, root._);
  }

}(this, function(Backbone, _) {

  _.extend(Backbone.Model.prototype, {
    toggle: function (attr, options) {
      options = options ? options : {};
      return this.set(attr, !this.get(attr), options);
    },

    increment: function (attr, amount, options) {
      if (_.isObject(amount)) {
        options = amount;
        amount = undefined;
      }
      amount = amount ? amount : 1;
      options = options ? options : {};
      return this.set(attr, this.get(attr) + amount, options);
    },

    decrement: function (attr, amount, options) {
      if (_.isObject(amount)) {
        options = amount;
        amount = undefined;
      }
      amount = amount ? amount : 1;
      options = options ? options : {};
      return this.set(attr, this.get(attr) - amount, options);
    }
  });

}));
