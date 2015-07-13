"use strict";

var _ = require('underscore');

module.exports = function(filterObject, zoom, isPolygonRequest) {
    // The client starts requesting the polygon layer at zoom level 15 and
    // greater.  For tiles at that zoom and greater, we should exclude polygon
    // points, since we will be showing the polygon itself instead.
    if (zoom >= 150 && !isPolygonRequest) {
        var defaults = {'polygonalMapFeature.polygon': {'ISNULL': true}};
        return _.extend({}, defaults, filterObject);
    }

    return filterObject;
};
