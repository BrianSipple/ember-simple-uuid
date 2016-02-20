# ember-simple-uuid

_Direct client-side UUID generation that exposes [node-uuid](https://github.com/broofa/node-uuid)'s `uuid.v4` implementation as an importable module_.

Original credit for this addon's approach is due to [ember-cli-uuid](https://github.com/thaume/ember-cli-uuid). `ember-simple-uuid` wraps the same function -- but without any dependency on `ember-data` or initializer decoration of `DS.Adapter`. Those wanting such extra behavior may well want to give `ember-cli-uuid` a look.

`ember-simple-uuid` also applies gathers any arguments passed to its function and spreads them to fit the `uuid.v4` signature as documented [here](https://github.com/broofa/node-uuid#uuidv4options--buffer--offset)


## Usage

Straight up:
```
import uuid from 'ember-simple-uuid';

const babyName = uuid();

```

With arguments -- for example generating two IDs in a single buffer:
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
