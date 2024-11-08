'use strict';

/**
 * hot-single-entry router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::hot-single-entry.hot-single-entry');
