/**
 * Module with meta data
 *
 * Second paragraph, which should not show up in the table of contents.
 *
 * @typedef {object} ModuleInfo
 *
 * @property {string} name - Name of preset
 * @property {object} module - Actual module content
 * @property {string} [version] - Resolved version
 */

/**
 * Plugin module with meta data \
 * Hard new line, which should not show up in the table of contents.
 *
 * @typedef {ModuleInfo} PluginInfo
 */

/**
 * Preset module with meta data
 *
 * @typedef {ModuleInfo} PresetInfo
 * @property {PresetInfo[]} presets - Presets that this preset extends
 * @property {PluginInfo[]} plugins - Plugins this preset uses
 */

/**
 * Create package identifiers for Gasket plugins
 *
 * @param {string} rawName - Original input name of a package
 * @param {object} [options] - Options
 * @param {boolean} [options.prefixed] - Set this to force prefixed format for short names
 * @returns {PackageIdentifier} instance
 */
function pluginIdentifier(rawName, options) {}

/**
 * Check if something is truthy
 *
 * @param {*} something - Variable to check
 * @returns {boolean} truthy
 */
const isTruthy = something => Boolean(something);

/**
 * Test if module appears to be a path name.
 *
 * @type {RegExp}
 */
const isModulePath = /^[/.]|^[a-zA-Z]:\\|node_modules/;

// test for missing description
/**
 * @type {number}
 */
const ONE = 1;

/**
 * Utility to help resolve and require modules
 *
 * @type {Resolver}
 */
class Resolver {
  /**
   * @param {object} options - Options
   * @param {string|string[]} [options.resolveFrom] - Path(s) to resolve modules from
   * @param {require} [options.require] - Require instance to use
   */
  constructor(options) {}

  /**
   * Returns the resolved module filename
   *
   * @param {string} moduleName name of the module
   * @returns {string} filename of the module
   */
  resolve(moduleName) {}

  /**
   * Returns the required module
   *
   * @param {string} moduleName name of the module
   * @returns {object} module contents
   */
  require(moduleName) {}

  /**
   * Returns the resolved module filename, or null if not found
   *
   * @param {string} moduleName name of the module
   * @returns {string|null} filename of the module
   */
  tryResolve(moduleName) {}

  /**
   * Returns the required module, or null if not found
   *
   * @param {string} moduleName name of the module
   * @returns {object|null} module contents
   */
  tryRequire(moduleName) {}
}


/**
 * Utility to load plugins, presets, and other modules with associated metadata
 *
 * @type {Loader}
 * @extends Resolver
 */
class Loader extends Resolver {

  constructor() {
    super(...arguments);
  }

  /**
   * Loads a module with additional metadata
   *
   * @param {string} module - Module content
   * @param {string} moduleName - Name of module to load
   * @param {object} [meta] - Additional meta data
   * @returns {ModuleInfo} module
   */
  getModuleInfo(module, moduleName, meta = {}) {}

  /**
   * Loads a module with additional metadata
   *
   * @param {string} moduleName - Name of module to load
   * @param {object} [meta] - Additional meta data
   * @returns {ModuleInfo} module
   */
  loadModule(moduleName, meta = {}) {}

  /**
   * Loads a plugin with additional metadata.
   *
   * @param {PluginName|object} module - Name of module to load (or module content)
   * @param {object} [meta] - Additional meta data
   * @returns {PluginInfo} module
   */
  loadPlugin(module, meta = {}) {}

  /**
   * Loads a preset with additional metadata
   *
   * @param {PresetName} module - Name of module to load
   * @param {object} [meta] - Additional meta data
   * @param {Boolean} [options] - Loading options
   * @param {Boolean} [options.shallow] - Do not recursively load dependencies
   * @returns {PresetInfo} module
   */
  loadPreset(module, meta, { shallow = false } = {}) {}

  /**
   * Loads presets and plugins as configured.
   * Plugins will be filtered and ordered as configuration with priority of:
   *  - added plugins > preset plugins > nested preset plugins
   *
   * @param {object}                config         - Presets and plugins to load
   * @param {PresetName[]}          config.presets - Presets to load and add plugins from
   * @param {PluginName[]|module[]} config.add     - Names of plugins to load
   * @param {string[]}              config.remove  - Names of plugins to remove (from presets)
   * @returns {{presets: PresetInfo[], plugins: PluginInfo[]}} results
   */
  loadConfigured(config) {}
}


/**
 * Utility class for working with package names and versions
 *
 * @type {PackageIdentifier}
 */
class PackageIdentifier {

  /**
   * Get the package name as provided to the identifier
   *
   * @returns {string} rawName
   */
  get rawName() {}

  /**
   * Get the long package name
   *
   * @returns {string} fullName
   */
  get fullName() {}

  /**
   * Alias to this.fullName
   *
   * @returns {string} fullName
   */
  get longName() {}

  /**
   * Get the short package name
   *
   * @returns {string} fullName
   */
  get shortName() {}

  /**
   * Get only the package name
   *
   * @returns {string} fullName
   */
  get name() {}

  /**
   * Get only the package version
   *
   * @returns {string} fullName
   */
  get version() {}

  /**
   * Get the full package name with version
   *
   * @returns {string} fullName
   */
  get full() {}
}
