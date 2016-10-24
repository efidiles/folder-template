'use strict';

var green = require('ansi-green');
var gray = require('ansi-gray');
var win = process.platform === 'win32';

module.exports = {
  on: green(win ? '(*)' : '◉'),
  off: win ? '( )' : '◯',
  disabled: gray(win ? '(x)' : 'ⓧ')
};

module.exports.star = {
  on: green('★'),
  off: '☆',
  disabled: gray('☆')
};

module.exports.ballot = {
  on: green('☑'),
  off: '☐',
  disabled: gray('☒')
};

module.exports.nocolor = {
  on: win ? '(*)' : '◉',
  off: win ? '( )' : '◯',
  disabled: win ? '(x)' : 'ⓧ',

  star: {
    on: green('★'),
    off: '☆',
    disabled: gray('☆')
  },

  ballot: {
    on: green('☑'),
    off: '☐',
    disabled: gray('☒')
  }
};
