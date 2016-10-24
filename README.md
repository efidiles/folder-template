**Jump to**

* [What is folder-template?](#overview)
* [Features](#features)
* [Screenshots](#screenshots)

## Table of contents

- [Overview](#overview)
- [Features](#features)
- [Getting started](#getting-started)
  * [Installing folder-template](#installing-folder-template)
  * [Expose folder-template through npm scripts](#expose-folder-template-through-npm-scripts)
- [CLI](#cli)
- [Screenshots](#screenshots)
- [Notes](#notes)
- [TODO](#todo)
- [License](#license)

## Overview

folder-template is an easy to use directory / files generator.  

Its main purpose is to help with generation of components, modules and other folder / files structures from predefined and easy to configure templates.

It's a simpler and more focused alternative to `angular-cli` and simillar tools.  

Check the [screenshots](#screenshots) to quickly get a better idea.

### Features

- Simple configuration
- Asks the user for input based on the declarations inside the configuration file
- Compilation is done using [handlebars](https://www.npmjs.com/package/engine-handlebars)
- Access to all [handlebars helpers](https://www.npmjs.com/package/handlebars-helpers)
- Supports nesting file structure

## Getting started

### Installing folder-template

```sh
$ npm install folder-template --save-dev
```

This adds the `ft` CLI command locally to your project and can now be used in your project's npm scripts.

### Expose folder-template through npm scripts

Add the following to your project's `package.json`'s `scripts` section:

```js
{
    ...
    "scripts": {
        ...
        "generate": "ft"
    }
    ...
}
```
Now you only need some templates inside a `/templates` directory in the root of your project.  
There are a few available in the [/examples/sample-templates](https://github.com/efidiles/folder-template/tree/master/examples/sample-templates) directory of folder-template package.  
The sample templates are for Angular 2 but similarily they can be generated for any framework.

## CLI

Run folder-template from the command line.

```sh
$ npm run generate component ./
```
Where `component` is the name of a folder from your `templates` directory.

You should now be asked some questions about the new component and
then you should have a folder with the name you specified in the root of your project.

## Screenshots

**1. Define a `templates` directory in your project's root directory:**  
<a href="https://github.com/efidiles/folder-template">
    <img src="https://raw.githubusercontent.com/efidiles/folder-template/master/docs/templates-folder.png">  
</a>

**2. Setup your templates and specify variables and questions in a `.config` file sitting in each template folder:**  
<a href="https://github.com/efidiles/folder-template">
    <img src="https://raw.githubusercontent.com/efidiles/folder-template/master/docs/config-file.png">  
</a>

**3. Generate a template and you'll be queried for data based on the `.config` file:**  
<a href="https://github.com/efidiles/folder-template">
    <img src="https://raw.githubusercontent.com/efidiles/folder-template/master/docs/questions.png">  
</a>

**Completion screen:**  
<a href="https://github.com/efidiles/folder-template">
    <img src="https://raw.githubusercontent.com/efidiles/folder-template/master/docs/completion-screen.png">  
</a>

**Example of template contents:**  
<a href="https://github.com/efidiles/folder-template">
    <img src="https://raw.githubusercontent.com/efidiles/folder-template/master/docs/template-file-contents.png">  
</a>

### NOTES:  
You can use handlebars to parametrise both the contents of files and also the names of the directories and files.  
You can also use all the handlebars helpers as can be seen in the examples and in [screenshots](#screenshots).

### TODO
* add more documentation

### Authors

**Eduard Fidiles**

* [github/efidiles](https://github.com/efidiles)
* [twitter/efidiles](http://twitter.com/efidiles)

**John Kilpatrick**

* [github/jjkilpatrick](https://github.com/jjkilpatrick)
* [twitter/jjkilpatrick](http://twitter.com/jjkilpatrick)

### License

Copyright © 2016, [Eduard Fidiles](https://github.com/efidiles).
Released under the [MIT license](https://github.com/folder-template/folder-template/blob/master/LICENSE).
