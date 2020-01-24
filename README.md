# @godaddy/dmd

[![NPM Version](https://img.shields.io/npm/v/@godaddy/dmd?style=flat-square)](https://www.npmjs.com/package/@godaddy/dmd)
[![Build Status](https://img.shields.io/circleci/build/gh/godaddy/dmd?style=flat-square)](https://circleci.com/gh/godaddy/dmd)
[![Coverage Status](https://img.shields.io/coveralls/github/godaddy/dmd?style=flat-square)](https://coveralls.io/github/godaddy/dmd)
[![GitHub](https://img.shields.io/github/license/godaddy/dmd?style=flat-square)](LICENSE.md)

Plugin for [jsdoc2md] with improved readability and GitHub compatibility.

This plugin borrows from [dmd-readable] and [dmd-bitbucket] with additional
treatments. No HTML tags are generated within the markdown. Headers are
simplified with no nested links. Content links to headers are generated with
GitHub style slugs. Reference style links are used instead of being inline.

See the [mock file] for an example of a generated document.

## Installation

Install it as a devDependency in target project:

```
$ npm install @godaddy/dmd --save-dev
```

## Usage

Then pass the plugin name to `jsdoc2md` or `dmd` to generate docs:

```
$ jsdoc2md --plugin @godaddy/dmd --files lib/*.js
```

<!-- LINKS -->

[jsdoc2md]:https://github.com/jsdoc2md/jsdoc-to-markdown
[dmd-bitbucket]:https://github.com/jsdoc2md/dmd-bitbucket
[dmd-readable]:https://github.com/DarrenPaulWright/dmd-readable
[mock file]:test/fixtures/mock.snapshot.md
