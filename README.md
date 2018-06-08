# vue-focuspoint-component

> Set focus point on elements

[![npm](https://img.shields.io/npm/v/vue-focuspoint-component.svg?style=for-the-badge)](https://www.npmjs.com/package/vue-focuspoint-component)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge)](https://github.com/EvodiaAut/vue-focuspoint-component/blob/master/LICENSE.md)
[![npm](https://img.shields.io/npm/dt/vue-focuspoint-component.svg?style=for-the-badge)](https://www.npmjs.com/package/vue-focuspoint-component)

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
// HelloWorld.vue
import FocusPoint from 'vue-focuspoint-component'

export default {
  name: 'HelloWorld',
  components: {
    FocusPoint
  }
}
```

On your page you can now use html like this:

Image element

```html
<!-- set focus point in `focus` -->
<focus-point
  v-model="focus"
>
  <img src="https://is.example.com/image.jpg">
</focus-point>

<!-- after click `focus` shows like this -->
focus: {
  "x": 35,
  "y": 62
}

<!-- example to get image from image server -->
<img src="https://is.example.com/{focus.x}/{focus.y}/1024/768/image.jpg">
<!-- output: we get from a 1920x1080 image the focus [35%:62% into 1024x768] -->
<img src="https://is.example.com/35/62/1024/768/image.jpg">
```

Other elements (use careful element with text has not the same ratio by a resize)

```html
<focus-point
  v-model="element"
>
  <div
    class="jumbotron"
  >
    <h1>Hello, world!</h1>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr...</p>
  </div>
</focus-point>
```

## CSS

```scss
// required and to get updates
@import "./node_modules/vue-focuspoint-component/src/scss/focus-point";
// simple theme
@import "./node_modules/vue-focuspoint-component/src/scss/focus-point-theme";
```

Do you like my theme but not the colors or paddings, ...?

```scss
@import "./node_modules/vue-focuspoint-component/src/scss/focus-point";

// overwrite variables from the simple theme
$focuspoint-background: blue;
$focuspoint-border: 3px solid white;
$focuspoint-radius: 2px;
// find more variables in /src/scss/_focus-point-variables.scss

@import "./node_modules/vue-focuspoint-component/src/scss/focus-point-theme";
```

## V-Model

|Type|Required|Default|Description
|-|-|-|-|
|Object|false|`{ x: 50, y: 50 }`|Focus

## Slots

|Name|Description
|-|-|
|pin|Inner html from pin

## Slots example

Create your own pin

```html
<focus-point
  v-model="image"
>
  <template
    slot="pin"
  >
    <i class="cool-focus-icon"/>
  </template>
  <img src="https://is.example.com/image.jpg">
</focus-point>
```

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
npm run unit

# run all tests
npm test
```
