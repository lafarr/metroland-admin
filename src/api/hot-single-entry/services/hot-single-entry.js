'use strict';

/**
 * hot-single-entry service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hot-single-entry.hot-single-entry');
