const slugs = new Map();

const reInlineLinks = /(\[(.+)\])(\(([^)\s]+)\))/g;
const reBrackets = /[^\\]\[|[^\\]]/g;
const reLeftBrackets = /\[/g;
const reRightBrackets = /]/g;
const reSpaces = /\s+/g;
const reNonSlugChars = /[^a-z0-9- _]/g;
const reNewLines = /\n/g;
const reParagraphBreak = /\n(\s+)?\n/;

/**
 * Stores a slug for the element
 *
 * @param {string} parent - Parent
 * @param {string} name - Name
 * @param {string} slug - Generated slug
 * @private
 */
function setSlug(parent, name, slug) {
  if (parent !== 'event') {
    const sig = parent + '#' + name;
    slugs.set(sig, slug);
  }
}

/**
 * Gets a slug if defined for an element
 *
 * @param {string} parent - Parent
 * @param {string} name - Name
 * @returns {string|undefined} stored slug
 * @private
 */
function getSlug(parent, name) {
  if (parent === 'event') return name.toLowerCase();
  const sig = parent + '#' + name;
  return slugs.get(sig);
}

/**
 * Builds a slug suitable for viewing on GitHub
 *
 * @param {string} parent - Parent
 * @param {string} prefix - Prefix
 * @param {string} accessSymbol - Access Symbol
 * @param {string} name - Name
 * @param {string} methodSign - Method Signature
 * @returns {string} slug
 */
function githubSlug(parent, prefix, accessSymbol, name, methodSign) {
  const slug = [
    parent,
    prefix ? prefix + ' ' : '',
    accessSymbol,
    name,
    methodSign
  ].join('')
    .trim()
    .toLowerCase()
    .replace(reSpaces, '-')
    .replace(reNonSlugChars, '');

  setSlug(parent, name, slug);
  return slug;
}

/* eslint-disable no-unused-vars */
/**
 * Adds code ticks to element name, and creates link if slug found
 *
 * @param {string} parent - Parent
 * @param {string} prefix - Prefix
 * @param {string} accessSymbol - Access Symbol
 * @param {string} name - Name
 * @param {string} methodSign - Method Signature
 * @returns {string} code name
 */
function codeLink(parent, prefix, accessSymbol, name, methodSign) {
  const slug = getSlug(parent, name);
  if (slug) {
    return '[`' + name + '`](#' + slug + ')';
  }
  return '`' + name + '`';
}
/* eslint-enable no-unused-vars */

/**
 * Returns only the first paragraph of a description with newlines removed
 * for use in tables.
 *
 * @param {string} description - Description
 * @returns {string} short description
 */
function shortDesc(description) {
  if (!description) return '';
  let nextDesc = description.trim();

  const match = reParagraphBreak.exec(nextDesc);
  if (match) {
    nextDesc = nextDesc.substring(0, match.index);
  }
  return nextDesc.replace(reNewLines, '');
}

/**
 * Block helper to transform all inline slugs to reference slugs.
 *
 * @param {object} options - Block details
 * @param {function} options.fn - Passed template
 * @returns {string} results
 */
function refLinks(options) {
  const refMap = new Map();
  const slugMap = new Map();
  let idx = 0;

  function safeRef(name, slug) {
    // if the name has non-escaped brackets, use numeric ref id
    if (reBrackets.test(name)) {
      const ref = slugMap.get(slug) || ++idx;
      refMap.set(ref, slug);
      slugMap.set(slug, ref);
      return ref;
    }
    refMap.set(name, slug);
  }

  const content = options.fn(this)
    .replace(reInlineLinks, (match, brackets, title, parentheses, link) => {
      const ref = safeRef(title, link);
      return brackets + (ref ? `[${ref}]` : '');
    });

  let refContent = '<!-- LINKS -->\n\n';
  for (const [name, slug] of refMap) {
    refContent += `[${name}]:${slug}\n`;
  }

  return content + refContent;
}

/**
 * Escapes brackets found in a string.
 *
 * @param {string} content - Text which may have brackets
 * @returns {string} content
 */
function escapeBrackets(content) {
  return content
    .replace(reLeftBrackets, '\\[')
    .replace(reRightBrackets, '\\]');
}

module.exports = {
  githubSlug,
  codeLink,
  shortDesc,
  refLinks,
  escapeBrackets
};
