![vue2](https://img.shields.io/badge/vue-2.5.x-brightgreen.svg)
![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)

# [Beta] vue-focuspoint-component

> Set focus point on elements

## Demo

[Demo here](https://evodiaaut.github.io/vue-focuspoint-component/)

## Install

`[SOON]`

## Usage

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

|Prop|Type|Default|Description
|-|-|-|-|
| [GET/SET] offset | Object | null | offset (coordinates) from pin
| [SET]offsetDefault | Object | `{ x: 50, y: 50 }` | Set default for offset

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
