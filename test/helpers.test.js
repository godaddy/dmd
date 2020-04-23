const assume = require('assume');
const helpers = require('../helpers');

const splitLines = str => str.match(/[^\r\n]+/g);

/**
 * Additional tests of things not demonstrating in output tests.
 */
describe('helpers', () => {
  describe('refLinks', () => {

    it('does not use numeric reference links for escaped brackets in title', async () => {
      const fn = () => 'This is an [inline link with \\[brackets\\]](#some-link) in it.';
      const results = helpers.refLinks({ fn });

      assume(results).not.includes('[1]');
    });

    it('uses numeric reference links when brackets in title', async () => {
      const fn = () => 'This is an [inline link with [brackets]](#some-link) in it.';
      const results = helpers.refLinks({ fn });
      const [bodyLine, refLine] = splitLines(results);

      assume(bodyLine).includes('[1]');
      assume(refLine).equals('[1]:#some-link');
    });

    it('does not capture previous escaped brackets before link', async () => {
      const fn = () => 'This \\[escaped\\] before [inline link](#some-link) in it.';
      const results = helpers.refLinks({ fn });
      const [, refLine] = splitLines(results);

      assume(refLine).not.includes('escaped');
      assume(refLine).equals('[inline link]:#some-link');
    });

    it('captures multiple inline links in same line', async () => {
      const fn = () => 'Has [link one](#link-one) and [link two](#link-two) in it.';
      const results = helpers.refLinks({ fn });
      const lines = splitLines(results);

      assume(lines).lengthOf(3);
      assume(lines).includes('[link one]:#link-one');
      assume(lines).includes('[link two]:#link-two');
    });

    it('captures method signature titles of inline links', async () => {
      const fn = () => 'Has [.method(arg1, \\[arg2\\])](#some-method)';
      const results = helpers.refLinks({ fn });
      const [, refLine] = splitLines(results);

      assume(refLine).equals('[.method(arg1, \\[arg2\\])]:#some-method');
    });

    it('does not re-reformat links', async () => {
      const str = 'Has [link one] and [link two] and [.method(arg1, \\[arg2\\])] in it.';
      const fn = () => str;
      const results = helpers.refLinks({ fn });
      const lines = splitLines(results);

      assume(lines).lengthOf(1);
      assume(results).startsWith(str);
    });
  });

  describe('shortDesc', () => {
    it('returns only first paragraph', () => {
      const desc = `This is the first paragraph.

This is the second paragraph.`;

      const results = helpers.shortDesc(desc);
      assume(results).equals('This is the first paragraph.');
    });

    it('returns only first paragraph', () => {
      const desc = `This is the first paragraph
multiline paragraph.

This is the second paragraph.`;

      const results = helpers.shortDesc(desc);
      assume(results).equals('This is the first paragraph multiline paragraph.');
    });

    it('ignores spaces in empty lines', () => {
      const desc = `This is the first paragraph.
      
This is the second paragraph.`;

      const results = helpers.shortDesc(desc);
      assume(results).equals('This is the first paragraph.');
    });

    it('trims empty first line and spacing', () => {
      const desc = `
      This is the first paragraph.
    
This is the second paragraph.`;

      const results = helpers.shortDesc(desc);
      assume(results).equals('This is the first paragraph.');
    });

    it('works with single line description', () => {
      const desc = `This is the first paragraph.`;

      const results = helpers.shortDesc(desc);
      assume(results).equals('This is the first paragraph.');
    });

    it('returns empty string if no description', () => {
      const desc = undefined; // eslint-disable-line no-undefined

      const results = helpers.shortDesc(desc);
      assume(results).equals('');
    });
  });
});
