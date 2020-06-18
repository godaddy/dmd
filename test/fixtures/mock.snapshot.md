## Modules
Module | Description
------ | -----------
[MyComponent] | This is a long description of a thing, that is so long it wraps to the next line.

## Classes

Name | Description
------ | -----------
[Resolver] | Utility to help resolve and require modules
[Loader] | Utility to load plugins, presets, and other modules with associated metadata
[PackageIdentifier] | Utility class for working with package names and versions

## Constants

Name | Description
------ | -----------
[isModulePath] | Test if module appears to be a path name.
[ONE] | 

## Functions

Name | Description
------ | -----------
[pluginIdentifier(rawName, \[options\])] | Create package identifiers for Gasket plugins
[isTruthy(something)] | Check if something is truthy

## Typedefs

Name | Description
------ | -----------
[ModuleInfo] | Module with meta data
[PluginInfo] | Plugin module with meta data
[PresetInfo] | Preset module with meta data


## MyComponent

This is a long description of a thing, that is so long it wraps
to the next line.

And here is a note that is really long and needs to wrap
to another line.

And here is more notes.


| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Display name |

**Example**  
```js
// comment
import MyComponent from './my-component';
export default function MyPage(props) {
  return <MyComponent name='Fancy' />
}
```

## Resolver

Utility to help resolve and require modules

**Kind**: global class  

* [Resolver]
    * [new Resolver(options)]
    * [.resolve(moduleName)]
    * [.require(moduleName)]
    * [.tryResolve(moduleName)]
    * [.tryRequire(moduleName)]


### new Resolver(options)


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| \[options.resolveFrom\] | `string` \| `Array.<string>` | Path(s) to resolve modules from |
| \[options.require\] | `require` | Require instance to use |


### resolver.resolve(moduleName)

Returns the resolved module filename

**Kind**: instance method of [`Resolver`]  
**Returns**: `string` - filename of the module  

| Param | Type | Description |
| --- | --- | --- |
| moduleName | `string` | name of the module |


### resolver.require(moduleName)

Returns the required module

**Kind**: instance method of [`Resolver`]  
**Returns**: `object` - module contents  

| Param | Type | Description |
| --- | --- | --- |
| moduleName | `string` | name of the module |


### resolver.tryResolve(moduleName)

Returns the resolved module filename, or null if not found

**Kind**: instance method of [`Resolver`]  
**Returns**: `string` ⎮ `null` - filename of the module  

| Param | Type | Description |
| --- | --- | --- |
| moduleName | `string` | name of the module |


### resolver.tryRequire(moduleName)

Returns the required module, or null if not found

**Kind**: instance method of [`Resolver`]  
**Returns**: `object` ⎮ `null` - module contents  

| Param | Type | Description |
| --- | --- | --- |
| moduleName | `string` | name of the module |


## Loader

Utility to load plugins, presets, and other modules with associated metadata

**Kind**: global class  
**Extends**: [`Resolver`]  

* [Loader]
    * [.getModuleInfo(module, moduleName, \[meta\])]
    * [.loadModule(moduleName, \[meta\])]
    * [.loadPlugin(module, \[meta\])]
    * [.loadPreset(module, \[meta\], \[options\])]
    * [.loadConfigured(config)]
    * [.resolve(moduleName)]
    * [.require(moduleName)]
    * [.tryResolve(moduleName)]
    * [.tryRequire(moduleName)]


### loader.getModuleInfo(module, moduleName, \[meta\])

Loads a module with additional metadata

**Kind**: instance method of [`Loader`]  
**Returns**: [`ModuleInfo`] - module  

| Param | Type | Description |
| --- | --- | --- |
| module | `string` | Module content |
| moduleName | `string` | Name of module to load |
| \[meta\] | `object` | Additional meta data |


### loader.loadModule(moduleName, \[meta\])

Loads a module with additional metadata

**Kind**: instance method of [`Loader`]  
**Returns**: [`ModuleInfo`] - module  

| Param | Type | Description |
| --- | --- | --- |
| moduleName | `string` | Name of module to load |
| \[meta\] | `object` | Additional meta data |


### loader.loadPlugin(module, \[meta\])

Loads a plugin with additional metadata.

**Kind**: instance method of [`Loader`]  
**Returns**: [`PluginInfo`] - module  

| Param | Type | Description |
| --- | --- | --- |
| module | `PluginName` \| `object` | Name of module to load (or module content) |
| \[meta\] | `object` | Additional meta data |


### loader.loadPreset(module, \[meta\], \[options\])

Loads a preset with additional metadata

**Kind**: instance method of [`Loader`]  
**Returns**: [`PresetInfo`] - module  

| Param | Type | Description |
| --- | --- | --- |
| module | `PresetName` | Name of module to load |
| \[meta\] | `object` | Additional meta data |
| \[options\] | `Boolean` | Loading options |
| \[options.shallow\] | `Boolean` | Do not recursively load dependencies |


### loader.loadConfigured(config)

Loads presets and plugins as configured.
Plugins will be filtered and ordered as configuration with priority of:
 - added plugins > preset plugins > nested preset plugins

**Kind**: instance method of [`Loader`]  
**Returns**: `Object` - results  

| Param | Type | Description |
| --- | --- | --- |
| config | `object` | Presets and plugins to load |
| config.presets | `Array.<PresetName>` | Presets to load and add plugins from |
| config.add | `Array.<PluginName>` \| `Array.<module>` | Names of plugins to load |
| config.remove | `Array.<string>` | Names of plugins to remove (from presets) |


### loader.resolve(moduleName)

Returns the resolved module filename

**Kind**: instance method of [`Loader`]  
**Overrides**: `resolve`  
**Returns**: `string` - filename of the module  

| Param | Type | Description |
| --- | --- | --- |
| moduleName | `string` | name of the module |


### loader.require(moduleName)

Returns the required module

**Kind**: instance method of [`Loader`]  
**Overrides**: `require`  
**Returns**: `object` - module contents  

| Param | Type | Description |
| --- | --- | --- |
| moduleName | `string` | name of the module |


### loader.tryResolve(moduleName)

Returns the resolved module filename, or null if not found

**Kind**: instance method of [`Loader`]  
**Overrides**: `tryResolve`  
**Returns**: `string` ⎮ `null` - filename of the module  

| Param | Type | Description |
| --- | --- | --- |
| moduleName | `string` | name of the module |


### loader.tryRequire(moduleName)

Returns the required module, or null if not found

**Kind**: instance method of [`Loader`]  
**Overrides**: `tryRequire`  
**Returns**: `object` ⎮ `null` - module contents  

| Param | Type | Description |
| --- | --- | --- |
| moduleName | `string` | name of the module |


## PackageIdentifier

Utility class for working with package names and versions

**Kind**: global class  

* [PackageIdentifier]
    * [.rawName]
    * [.fullName]
    * [.longName]
    * [.shortName]
    * [.name]
    * [.version]
    * [.full]


### packageIdentifier.rawName

Get the package name as provided to the identifier

**Kind**: instance property of [`PackageIdentifier`]  
**Returns**: `string` - rawName  

### packageIdentifier.fullName

Get the long package name

**Kind**: instance property of [`PackageIdentifier`]  
**Returns**: `string` - fullName  

### packageIdentifier.longName

Alias to this.fullName

**Kind**: instance property of [`PackageIdentifier`]  
**Returns**: `string` - fullName  

### packageIdentifier.shortName

Get the short package name

**Kind**: instance property of [`PackageIdentifier`]  
**Returns**: `string` - fullName  

### packageIdentifier.name

Get only the package name

**Kind**: instance property of [`PackageIdentifier`]  
**Returns**: `string` - fullName  

### packageIdentifier.version

Get only the package version

**Kind**: instance property of [`PackageIdentifier`]  
**Returns**: `string` - fullName  

### packageIdentifier.full

Get the full package name with version

**Kind**: instance property of [`PackageIdentifier`]  
**Returns**: `string` - fullName  

## isModulePath

Test if module appears to be a path name.

**Kind**: global constant  

## ONE

**Kind**: global constant  

## pluginIdentifier(rawName, \[options\])

Create package identifiers for Gasket plugins

**Kind**: global function  
**Returns**: [`PackageIdentifier`] - instance  

| Param | Type | Description |
| --- | --- | --- |
| rawName | `string` | Original input name of a package |
| \[options\] | `object` | Options |
| \[options.prefixed\] | `boolean` | Set this to force prefixed format for short names |


## isTruthy(something)

Check if something is truthy

**Kind**: global function  
**Returns**: `boolean` - truthy  

| Param | Type | Description |
| --- | --- | --- |
| something | `*` | Variable to check |


## ModuleInfo

Module with meta data

Second paragraph, which should not show up in the table of contents.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | `string` | Name of preset |
| module | `object` | Actual module content |
| \[version\] | `string` | Resolved version |


## PluginInfo

Plugin module with meta data \
Hard new line, which should not show up in the table of contents.

**Kind**: global typedef  

## PresetInfo

Preset module with meta data

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| presets | `Array.<PresetInfo>` | Presets that this preset extends |
| plugins | `Array.<PluginInfo>` | Plugins this preset uses |

<!-- LINKS -->

[MyComponent]:#mycomponent
[Resolver]:#resolver
[Loader]:#loader
[PackageIdentifier]:#packageidentifier
[isModulePath]:#ismodulepath
[ONE]:#one
[ModuleInfo]:#moduleinfo
[PluginInfo]:#plugininfo
[PresetInfo]:#presetinfo
[`Resolver`]:#new-resolveroptions
[`Loader`]:#loader
[`ModuleInfo`]:#moduleinfo
[`PluginInfo`]:#plugininfo
[`PresetInfo`]:#presetinfo
[.rawName]:#packageidentifierrawname
[.fullName]:#packageidentifierfullname
[.longName]:#packageidentifierlongname
[.shortName]:#packageidentifiershortname
[.name]:#packageidentifiername
[.version]:#packageidentifierversion
[.full]:#packageidentifierfull
[`PackageIdentifier`]:#packageidentifier
[pluginIdentifier(rawName, \[options\])]:#pluginidentifierrawname-options
[isTruthy(something)]:#istruthysomething
[new Resolver(options)]:#new-resolveroptions
[.resolve(moduleName)]:#loaderresolvemodulename
[.require(moduleName)]:#loaderrequiremodulename
[.tryResolve(moduleName)]:#loadertryresolvemodulename
[.tryRequire(moduleName)]:#loadertryrequiremodulename
[.getModuleInfo(module, moduleName, \[meta\])]:#loadergetmoduleinfomodule-modulename-meta
[.loadModule(moduleName, \[meta\])]:#loaderloadmodulemodulename-meta
[.loadPlugin(module, \[meta\])]:#loaderloadpluginmodule-meta
[.loadPreset(module, \[meta\], \[options\])]:#loaderloadpresetmodule-meta-options
[.loadConfigured(config)]:#loaderloadconfiguredconfig
