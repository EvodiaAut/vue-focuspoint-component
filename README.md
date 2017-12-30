# vue-focuspoint-component

> Set focus point on elements

[![npm](https://img.shields.io/npm/v/vue-focuspoint-component.svg?style=for-the-badge)](https://www.npmjs.com/package/vue-focuspoint-component)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge)](https://github.com/EvodiaAut/vue-focuspoint-component/blob/master/LICENSE.md)

## Demo

[Demo here](https://evodiaaut.github.io/vue-focuspoint-component/)

## Install

`npm install vue-focuspoint-component` or `yarn add vue-focuspoint-component`

## Usage

The most common use case is to register the component globally.

```js
// in your main.js or similar file
import Vue from 'vue'
import FocusPoint from 'vue-focuspoint-component'

Vue.component('focus-point', FocusPoint)
```

Alternatively you can do this to register the components:

```js
import FocusPoint from 'vue-focuspoint-component'

export default {
  name: 'HelloWorld',
  components: {
    FocusPoint
  }
}
```

Style

```scss
// required
@import "../node_modules/vue-focuspoint-component/src/scss/focus-point";
// simple theme
@import "../node_modules/vue-focuspoint-component/src/scss/focus-point-theme";
```

On your page you can now use html like this to render focus point:

Image element

``` html
<!-- set focus point from `image` -->
<focus-point :focus.sync="image">
  <img src="https://is.example.com/image.jpg">
</focus-point>

<!-- after click `image` object shows like this -->
... image: {
  "x": 50,
  "y": 50
}

<!-- example to get `image` from image server -->
<img src="https://is.example.com/{image.x}/{image.y}/1024/768/image.jpg">
<!-- output -->
<img src="https://is.example.com/50/50/1024/768/image.jpg">
```

Other element

``` html
<focus-point :focus.sync="simpleElement">
  <div class="jumbotron">
    <h1>Hello, world!</h1>
  </div>
</focus-point>
```

## Props

|Prop|Type|Required|Sync|Default|Description
|-|-|-|-|-|-|
|focus|Object|false|true|null|current focus
|focusDefault|Object|false|false|`{ x: 50, y: 50 }`|Set default focus

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
#[SOON] npm run unit

# run e2e tests
#[SOON] npm run e2e

# run all tests
#[SOON] npm test
```
