# @godaddy/dmd

[![NPM Version](https://img.shields.io/npm/v/@godaddy/dmd?style=flat-square)](https://www.npmjs.com/package/@godaddy/dmd)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/godaddy/dmd/CI?style=flat-square)](https://github.com/godaddy/dmd/actions/workflows/ci.yml)
[![Coverage Status](https://img.shields.io/coveralls/github/godaddy/dmd?style=flat-square)](https://coveralls.io/github/godaddy/dmd)
[![GitHub](https://img.shields.io/github/license/godaddy/dmd?style=flat-square)](LICENSE.md)

Plugin for [jsdoc2md] with improved readability and [GitHub Flavored Markdown]
compatibility.

This plugin borrows from [dmd-readable] and [dmd-bitbucket] with additional
treatments. No HTML tags are generated within the markdown. Headers are
simplified with no nested links. Content links to headers are generated with
GitHub-style slugs. Reference-style links are used instead of being inline.

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

## Formatting

### Index Tables

This plugins prefers `table` for the index format. The description column uses
the first paragraph or line break of the items description. This provides a more
readable and concise table of contents. The full description will still be used
in the body below. When authoring jsdocs, keep this in mind when descriptions
get long: you can have a short summary paragraph, followed by detailed
paragraphs and examples.

### Reference Links

Another help to readability is the use of [shortcut reference links]. This
leaves the link text in the content, with the destination declared out of the
way at the bottom of the document. In some cases, [collapsed reference links]
are used to avoid conflicts and to handle links with brackets in the link text.

<!-- LINKS -->

[jsdoc2md]:https://github.com/jsdoc2md/jsdoc-to-markdown
[dmd-bitbucket]:https://github.com/jsdoc2md/dmd-bitbucket
[dmd-readable]:https://github.com/DarrenPaulWright/dmd-readable
[mock file]:test/fixtures/mock.snapshot.md
[GitHub Flavored Markdown]:https://github.github.com/gfm/
[shortcut reference links]:https://github.github.com/gfm/#shortcut-reference-link
[collapsed reference links]:https://github.github.com/gfm/#collapsed-reference-link
test
