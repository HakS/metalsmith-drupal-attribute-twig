'use strict'

var multimatch = require('multimatch')
var DrupalAttribute = require('drupal-attribute')

module.exports = function (opts) {
  opts = opts || {}
  opts.pattern = opts.pattern || '*.twig'
  opts.patternOptions = opts.patternOptions || {matchBase: true}
  opts.inheritFilePrefix = opts.inheritFilePrefix || 'metadata-files://'

  return function (files, metalsmith, done) {
    var filesKeys = Object.keys(files)
    var twigFiles = multimatch(filesKeys, opts.pattern, opts.patternOptions)
    var twigFile = null
    var i = 0
    for (i in twigFiles) {
      twigFile = twigFiles[i]
      for (let property in files[twigFile]) {
        if (!files[twigFile].hasOwnProperty(property)) continue;
        if (!files[twigFile][property].hasOwnProperty("Attribute()")) continue;
        const attrData = files[twigFile][property]["Attribute()"];
        const attrObj = new DrupalAttribute();
        for (let attrProp in attrData) {
          if (!attrData.hasOwnProperty(attrProp)) continue;
          attrObj.set(attrProp, attrData[attrProp]);
        }
        files[twigFile][property] = attrObj;
      }
    }

    return done()
  }
}
