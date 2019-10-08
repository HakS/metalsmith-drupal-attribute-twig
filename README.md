# Metalsmith Plugin for Drupal Attributes [![NPM version](https://img.shields.io/npm/v/metalsmith-jstransformer.svg)](https://www.npmjs.org/package/metalsmith-jstransformer)

[![Build Status](https://img.shields.io/travis/kalamuna/metalsmith-jstransformer/master.svg)](https://travis-ci.org/kalamuna/metalsmith-jstransformer)
[![Dependency Status](https://david-dm.org/kalamuna/metalsmith-jstransformer.png)](https://david-dm.org/kalamuna/metalsmith-jstransformer)
[![Greenkeeper badge](https://badges.greenkeeper.io/kalamuna/metalsmith-jstransformer.svg)](https://greenkeeper.io/)

[Metalsmith](http://metalsmith.io) plugin to look for Drupal Attribute JSON maps to transform into Drupal Attribute objects for Twig

## Installation

    npm install --save metalsmith-drupal-attribute-twig

### CLI

If you are using the command-line version of Metalsmith, you can install via npm, and then add the `metalsmith-drupal-attribute-twig` key to your `metalsmith.json` file:

```json
{
  "plugins": {
    "metalsmith-drupal-attribute-twig": {
      inheritFilePrefix: '@kalastatic/'
    }
  }
}
```

### JavaScript

If you are using the JS Api for Metalsmith, then you can require the module and add it to your `.use()` directives:

```js
var jstransformer = require('metalsmith-drupal-attribute-twig');

metalsmith.use(jstransformer({
  'inheritFilePrefix': '@kalastatic/'
}));
```

## License

MIT
