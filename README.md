## Jump to

* [What is folder-template?](#overview)
* [TL;DR and experienced devs](#tldr)
* [Features](#features)
* [Screenshots](#screenshots)
* [Sample project](#sample-project)

## Table of contents

- [Overview](#overview)
- [TL;DR](#tldr)
- [Features](#features)
- [Getting started](#getting-started)
  * [Installing folder-template](#installing-folder-template)
  * [Expose folder-template through npm scripts](#expose-folder-template-through-npm-scripts)
  * [Define some templates](#define-some-templates)
  * [Setup the .config file](#setup-the-config-file)
  * [Generate files / folders](#generate-files-folders)
- [Screenshots](#screenshots)
- [Notes](#notes)
- [Sample project](#sample-project)
- [License](#license)

## Overview 
[[jump to TOC](#jump-to)]

folder-template is an easy to use directory / files generator.  

Its main purpose is to help with generation of components, modules and other folder / files structures from predefined and easy to configure templates.

It's a simpler and more focused alternative to `angular-cli` and similar tools.  

Check the [screenshots](#screenshots) to quickly get a better idea.

## TL;DR 
[[jump to TOC](#jump-to)]

1. Install the package:  
```sh
$ npm install folder-template --save-dev
```

1. Expose the CLI through your `package.json`'s `scripts`:  
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

3. Define templates inside a `/templates` directory located in your project's root:  
Samples [here](https://github.com/efidiles/folder-template/tree/master/examples/sample-templates)

4. Define questions and variable names inside a `.config` located in each template folder (Eg: `/templates/component/.config`) 

5. Run the npm command to generate files / folders:  
  
```sh
$ npm run generate component ./
```
`component` being a folder name from your `/templates` directory and `./` is the destination path.
## Features 
[[jump to TOC](#jump-to)]

- Simple configuration
- Ability to query the user for data
- Compilation is done using [handlebars](https://www.npmjs.com/package/engine-handlebars)
- Access to all [handlebars helpers](https://www.npmjs.com/package/handlebars-helpers)
- Supports nested structures

## Getting started 

### Installing folder-template 
[[jump to TOC](#jump-to)]

```sh
$ npm install folder-template --save-dev
```

This adds the `ft` CLI command locally to your project and can now be used in your project's npm scripts.

### Expose folder-template through npm scripts 
[[jump to TOC](#jump-to)]

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
This will basically create a npm task in your project which basically exposes the CLI of the `folder-template` package. 

### Define some templates 
[[jump to TOC](#jump-to)]

Now we need some templates inside a `/templates` directory in the root of your project.  
There are a few available in the [/examples/sample-templates](https://github.com/efidiles/folder-template/tree/master/examples/sample-templates) directory of `folder-template`'s github repository.  
The sample templates are for Angular 2 but similarily they can be generated for any framework.

Basically every folder inside the `/templates` directory is a template.  
Whatever is inside each of these folders (except `.config` file) will be compiled with handlebars and copied in the specified destination.
```
|-- project-root
|   |-- templates
|   |   |-- component
|   |   |   |-- {{hyphenate name}}
|   |   |   |   |-- {{hyphenate name}}.component.css.tpl
|   |   |   |   |-- {{hyphenate name}}.component.html.tpl
|   |   |   |   |-- {{hyphenate name}}.component.ts.tpl
|   |   |   |-- .config
|   |   |-- service
|   |   |   |-- {{hyphenate name}}.service.ts.tpl
|   |   |   |-- .config
|   |-- package.json
|   |-- Gruntfile.js
|   |-- LICENSE.md
|   |-- README.md
```
### Setup the .config file 
[[jump to TOC](#jump-to)]

When you run folder-template, the CLI will ask some questions to collect data to populate the templates.  

The questions and the variable names to store the answers are defined inside a `.config` folder inside each of the templates folders.  
For example the [.config](https://github.com/efidiles/folder-template/blob/master/examples/sample-templates/component/.config) 
file inside the [/templates/component](https://github.com/efidiles/folder-template/blob/master/examples/sample-templates/component)
directory contains the following code:

```
{
  "meta": {
    "description": "This is some optional description. Eg. Please enter all the input in 'hyphen-case':"
  },
  "name": "Enter name for the new component:",
  "selector": "Enter the name of the selector:"
}
```
The key names (`name`, `selector`) become handlebars variables to be used inside the templates and the filenames.  
They will be replaced with the answers given to the questions.  
The `meta.description` property is optional and holds some optional instructions to display to the user before collecting the data.

### Generate files / folders 
[[jump to TOC](#jump-to)]

Assuming that the steps above were followed, you can
start generating files and folders using commands like the following (in your project's root directory):

```sh
$ npm run generate component ./
```

Where:
- `generate` is the alias to `folder-template` CLI (`ft`) defined in `scripts` property of `package.json`
- `component` is the name of one of the direct folders inside `/templates` directory from your project's root (specifically [these](https://github.com/efidiles/folder-template/tree/master/examples/sample-templates))
- and `./` is the path where you want the generated files to appear (relative to your project's root)

You should now be asked some questions about the new component (based on the `.config` file) and
then you should find a new folder with the name you specified in the root of your project. 

## Screenshots 
[[jump to TOC](#jump-to)]

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

## Notes 
[[jump to TOC](#jump-to)]  
You can use handlebars to parametrise both the contents of files and also the names of the directories and files. Examples [here](https://github.com/efidiles/folder-template/tree/master/examples/sample-templates).  
You can also use all the [handlebars helpers](https://www.npmjs.com/package/handlebars-helpers) as can be seen in the examples and in [screenshots](#screenshots).

## Sample project 
[[jump to TOC](#jump-to)]

There is a sample project in the github repo inside [/examples/sample-project](https://github.com/efidiles/folder-template/tree/master/examples/sample-project)

To use it, clone the repo:  
```
git clone git@github.com:efidiles/folder-template.git  
```
navigate to `/examples/sample-project`:  
```
cd folder-template/examples/sample-project
```
run:  
```
npm run generate component ./
```
(no need for `npm install` as it will be done automatically) 

## Authors 
[[jump to TOC](#jump-to)]

**Eduard Fidiles**

* [github/efidiles](https://github.com/efidiles)
* [twitter/efidiles](http://twitter.com/efidiles)

**John Kilpatrick**

* [github/jjkilpatrick](https://github.com/jjkilpatrick)
* [twitter/jjkilpatrick](http://twitter.com/jjkilpatrick)

## License 
[[jump to TOC](#jump-to)]

Copyright © 2016, [Eduard Fidiles](https://github.com/efidiles).
Released under the [MIT license](https://github.com/folder-template/folder-template/blob/master/LICENSE).
