"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.label = exports.getMetadata = exports.prop = exports.PROPERTY_METADATA_KEY = void 0;
require("reflect-metadata");
exports.PROPERTY_METADATA_KEY = Symbol("propertyMetadata");
function prop(obj) {
    return (target, prop) => {
        let metadata = Reflect.getMetadata(exports.PROPERTY_METADATA_KEY, target) || {};
        metadata[prop] = metadata[prop] || {};
        for (let key of Reflect.ownKeys(obj))
            metadata[prop][key] = obj[key];
        Reflect.defineMetadata(exports.PROPERTY_METADATA_KEY, metadata, target);
    };
}
exports.prop = prop;
function getMetadata(instance) {
    let metafields = Reflect.getMetadata(exports.PROPERTY_METADATA_KEY, instance) || {};
    return {
        label: instance.label,
        fields: Object.keys(metafields).map(k => metafields[k])
    };
}
exports.getMetadata = getMetadata;
function label(lang, text) {
    return function (constructor) {
        constructor.prototype.label = Object.assign(Object.assign({}, (constructor.prototype.label || {})), { [lang]: text });
    };
}
exports.label = label;
//# sourceMappingURL=metadata.decorators.js.map