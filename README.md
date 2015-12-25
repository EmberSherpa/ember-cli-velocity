# ember-cli-velocity [![Build Status](https://travis-ci.org/taras/ember-cli-velocity.svg)](https://travis-ci.org/taras/ember-cli-velocity)

[![Build Status](https://travis-ci.org/EmberSherpa/ember-cli-velocity.svg)](https://travis-ci.org/EmberSherpa/ember-cli-velocity)

Adds Velocity.js to application's vendor directory and imports Velocity for use in application. 
This addon shims Promise with Ember.RSVP.Promise if the browser doesn't have native Promise support.

## Installation: 

`npm install --save ember-cli-velocity`

## Configuration

You can activate UI pack in your project's `Brocfile.js`.

```
var app = new EmberApp({
  velocityOptions: {
    enabled: true, # enabled the addon (default: true)
    ui: false # add Velocity UI Pack (default: false)
  }
});
return app;
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
