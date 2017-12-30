# [Beta] vue-focuspoint-component

> Set focus point on elements

[![npm](https://img.shields.io/npm/v/vue-focuspoint-component.svg?style=for-the-badge)](https://www.npmjs.com/package/vue-focuspoint-component)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

## Demo

[Demo here](https://evodiaaut.github.io/vue-focuspoint-component/)

## Install

`npm install vue-focuspoint-component` or `yarn add vue-focuspoint-component`

## Usage

The most common use case is to register the component globally.

```js
// in your main.js or similar file
import Vue from 'vue'
import App from './App'
import FocusPoint from '../node_modules/vue-focuspoint-component'

Vue.component('focus-point', FocusPoint)
```

Alternatively you can do this to register the components:

```js
import FocusPoint from '../node_modules/vue-focuspoint-component'

export default {
  name: 'app',
  components: {
    FocusPoint
  }
}
```

On your page you can now use html like this to render focus point:

``` html
<!-- IMAGE ELEMENT -->
<focus-point :offset.sync="imageOne">
  <img class="img-fluid" src="./assets/image_1.jpg">
</focus-point>

<!-- OTHER ELEMENT -->
<focus-point :offset.sync="imageFour">
  <div class="jumbotron">
    <h1>Hello, world!</h1>
  </div>
</focus-point>
```

## Props

|Prop|Type|Required|Default|Sync|Description
|-|-|-|-|-|-|
|offset|Object|false|null|true|offset (coordinates) from pin
|offsetDefault|Object|false|`{ x: 50, y: 50 }`|false|Set default for offset

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
