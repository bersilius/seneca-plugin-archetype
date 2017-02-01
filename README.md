# {{plugin_name}}

[![npm version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![Coveralls][BadgeCoveralls]][Coveralls]

{{plugin_description}}

## Prerequisites

The plugin needs the following seneca plugins to be used:

- [???](https://www.npmjs.com/package/seneca-???)


## Installation

Run the install command:

    npm install

Run tests:

    npm test

To obtain coverage, run:

    npm coverage

## Usage

To load the plugin:

```JavaScript
    seneca.use('{{plugin_name}}', /* options... */ )
```

### Options

There are no options for this plugin.


### Actions

All actions provide results via the standard callback format: `function(error,data){ ... }`.

#### role: {{plugin_name}}, cmd: TBD

TBD

_Parameters:_

- `payload`: ???

_Response:_ 

- None


## References

- [Seneca.js](http://senecajs.org/)
- [How to Write a Seneca Plugin](http://senecajs.org/docs/tutorials/how-to-write-a-plugin.html)

---

This project was generated from the [seneca-plugin-archetype](https://github.com/tombenke/seneca-plugin-archetype)
by the [kickoff](https://github.com/tombenke/kickoff) utility.

[npm-badge]: https://badge.fury.io/js/{{plugin_name}}.svg
[npm-url]: https://badge.fury.io/js/{{plugin_name}}
[travis-badge]: https://api.travis-ci.org/{{author_github_account}}/{{plugin_name}}.svg
[travis-url]: https://travis-ci.org/{{author_github_account}}/{{plugin_name}}
[Coveralls]: https://coveralls.io/github/{{author_github_account}}/{{plugin_name}}?branch=master
[BadgeCoveralls]: https://coveralls.io/repos/github/{{author_github_account}}/{{plugin_name}}/badge.svg?branch=master

