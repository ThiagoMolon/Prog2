const express = require('express');

const config = {
  port: 3000,
  viewEngine: 'ejs',
  setup(app) {
    const path = require('path');
    app.use(express.static('public'));
    app.set('view engine', this.viewEngine);
    app.use(express.urlencoded({ extended: true }));
  },
};

module.exports = config;
