'use strict';

/**
 * sample-image service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sample-image.sample-image');
