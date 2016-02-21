# ember-simple-uuid

[![npm version](https://badge.fury.io/js/ember-simple-uuid.svg)](https://badge.fury.io/js/ember-simple-uuid) [![Build Status](https://travis-ci.org/BrianSipple/ember-simple-uuid.svg?branch=master)](https://travis-ci.org/BrianSipple/ember-simple-uuid) [![Ember Observer Score](http://emberobserver.com/badges/ember-simple-uuid.svg)](http://emberobserver.com/addons/ember-simple-uuid)


_Direct client-side UUID generation that exposes [node-uuid](https://github.com/broofa/node-uuid)'s `uuid.v4` implementation as an importable module_.

Original credit for this addon's approach is due to [`ember-cli-uuid`](https://github.com/thaume/ember-cli-uuid).  
`ember-simple-uuid` -- this addon -- wraps the same function as `ember-cli-uuid` (`uuid.v4`) -- but without any dependency on `ember-data` and without an initializer that decorates `DS.Adapter`. Those wanting such extra behavior may well want to give `ember-cli-uuid` a look.

`ember-simple-uuid` also [gathers any arguments passed to its function](/addon/utils/uuid.js) and spreads them to fit the `uuid.v4` function signature. This enables the `uuid.v4` configuration options documented [here](https://github.com/broofa/node-uuid#uuidv4options--buffer--offset).


## Usage

### Straight up:
```
import uuid from 'ember-simple-uuid';

const babyName = uuid();

// babyName >> 'ad84fb10-19c4-01e1-2b0d-7b25c4ea062'

```

### With arguments -- for example, generating two IDs in a single buffer:
```
import uuid from 'ember-simple-uuid';

const myDigits = new Array(32);

uuid(null, myDigits, 0);
uuid(null, myDigits, 16);

```

## Building Locally

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
