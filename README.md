ember-cli-velocity
==================

[![npm version](https://badge.fury.io/js/ember-cli-velocity.svg)](http://badge.fury.io/js/ember-cli-velocity)
[![Build Status](https://travis-ci.org/EmberSherpa/ember-cli-velocity.svg)](https://travis-ci.org/EmberSherpa/ember-cli-velocity)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-velocity.svg)](http://emberobserver.com/addons/ember-cli-velocity)

Adds Velocity.js to application's vendor directory and imports Velocity for use in application. 

## Installation: 

`ember install ember-cli-velocity`

## Configuration

You can activate UI pack in your project's `ember-cli-build.js`.

```js
var app = new EmberApp({
  velocityOptions: {
    enabled: true, // enabled the addon (default: true)
    ui: false // add Velocity UI Pack (default: false)
  }
});
```

## Development

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
