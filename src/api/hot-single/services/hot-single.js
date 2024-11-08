'use strict';

/**
 * hot-single service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hot-single.hot-single');
