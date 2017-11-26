# {{ name }}

> {{ description }}

[![Build Status](https://api.travis-ci.org/{{ gitUsername }}/{{ gitRepository }}.svg)](https://travis-ci.org/{{ gitUsername }}/{{ gitRepository }})
[![NPM version](https://img.shields.io/npm/v/{{ name }}.svg?style=flat)](https://npmjs.org/package/{{ name }})
[![NPM downloads](http://img.shields.io/npm/dm/{{ name }}.svg?style=flat)](https://npmjs.org/package/{{ name }})

[![Saucelabs](https://saucelabs.com/browser-matrix/{{ saucelabsname name }}.svg)](https://saucelabs.com/u/{{ saucelabsname name }})

## Install

```shell
npm install {{ name }} --save
```

## Example

[![Preview](./example/preview.png)]({{ homepage }}/example)

## Online documentation

[Online]({{ homepage }})

## Change log

[CHANGELOG](./CHANGELOG.md)


{{#if maintainerAccount}}
## Maintainers

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/{{ maintainerAccount }}"><img width="150 height="150" src="https://github.com/{{ maintainerAccount }}.png?s=150" style="border-radius:.2em;" /></a>
        <br>
        <a href="https://github.com/{{ maintainerAccount }}">{{ maintainerFullName }}</a>
      </td>
    <tr>
  <tbody>
</table>

{{/if}}
