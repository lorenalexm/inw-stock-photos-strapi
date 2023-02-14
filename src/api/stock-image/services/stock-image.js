'use strict';

/**
 * stock-image service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stock-image.stock-image');
