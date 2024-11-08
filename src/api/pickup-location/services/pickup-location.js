'use strict';

/**
 * pickup-location service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pickup-location.pickup-location');
