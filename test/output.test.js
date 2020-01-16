const assume = require('assume');
const path = require('path');
const jsdoc2md = require('jsdoc-to-markdown');
const { promisify } = require('util');
const readFile = promisify(require('fs').readFile);

const pluginPath = path.join(__dirname, '..', 'index.js');
const files = 'test/fixtures/*.js';

describe('output', () => {
  let result;

  beforeEach(async () => {
    result = await jsdoc2md.render({ files, plugin: pluginPath });
  });

  it('does not render html tags', async () => {
    const hasTag = /<\/\w+>/gi;
    assume(hasTag.test(result)).false();

    //
    // as compared to results without plugin
    //
    const noPlugin = await jsdoc2md.render({ files });
    assume(hasTag.test(noPlugin)).true();
  });

  it('does not render inline links', async () => {
    const hasInlineLink = /\[.+]\(.+\)>/g;
    assume(hasInlineLink.test(result)).false();
  });

  it('uses reference links', async () => {
    const hasRefLink = /\[.+]:\s?#\w+/g;
    assume(hasRefLink.test(result)).true();
  });

  it('matches expected snapshot', async () => {
    const snapshot = await readFile(path.join(__dirname, 'fixtures', 'mock.snapshot.md'), 'utf-8');
    assume(result).equals(snapshot);
  });
});
