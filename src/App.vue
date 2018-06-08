<template>
  <div
    id="app"
  >
    <div class="my-5 container">
      <header class="pb-3 clearfix border-bottom">
        <ul
          class="nav float-right"
        >
          <li
            class="nav-item"
          >
            <a
              class="nav-link"
              href="https://github.com/EvodiaAut/vue-focuspoint-component"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
        <h1 class="text-muted">vue-focuspoint-component</h1>
        <p class="lead">Set focus point on elements </p>
        <div class="d-flex flex-wrap">
          <a
            href="https://www.npmjs.com/package/vue-focuspoint-component"
            target="_blank"
          >
            <img
              class="m-1"
              src="https://img.shields.io/npm/v/vue-focuspoint-component.svg?style=for-the-badge"
              alt="vue-focuspoint-component npm"
            >
          </a>
          <a
            href="https://github.com/EvodiaAut/vue-focuspoint-component/blob/master/LICENSE.md"
            target="_blank"
          >
            <img
              class="m-1"
              src="https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge"
              alt="vue-focuspoint-component license"
            >
          </a>
          <a
            href="https://www.npmjs.com/package/vue-focuspoint-component"
            target="_blank"
          >
            <img
              class="m-1"
              src="https://img.shields.io/npm/dt/vue-focuspoint-component.svg?style=for-the-badge"
              alt="vue-focuspoint-component npm"
            >
          </a>
        </div>
      </header>
      <main
        role="main"
      >
        <div
          class="row my-5"
        >
          <div
            class="col-md-6"
          >
            <h4>Feel free set a focus point</h4>
            <p>Click on the element (picture)</p>
            <focus-point
              v-model="imageOne"
            >
              <img
                class="img-fluid"
                src="./assets/image_1.jpg"
                alt="vue-focuspoint-component"
              >
            </focus-point>
            <div
              v-if="imageOne"
              class="row my-3"
            >
              <div class="col-6">
                <pre>{{ imageOne }}</pre>
              </div>
              <div class="col-5 col-sm-4 ml-auto image-description">
                <img
                  :style="{objectPosition: `${imageOne.x}% ${imageOne.y}%`}"
                  class="img-fluid preview-image"
                  src="./assets/image_1.jpg"
                  alt="vue-focuspoint-component"
                >
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <h4>A saved focus point</h4>
            <p><code>v-model="imageOne"</code></p>
            <focus-point
              v-model="imageTwo"
            >
              <img
                class="img-fluid"
                src="./assets/image_1.jpg"
                alt="vue-focuspoint-component"
              >
            </focus-point>
            <div
              v-if="imageTwo"
              class="row my-3"
            >
              <div class="col-6">
                <pre>{{ imageTwo }}</pre>
              </div>
              <div class="col-5 col-sm-4 ml-auto image-description">
                <img
                  :style="{objectPosition: `${imageTwo.x}% ${imageTwo.y}%`}"
                  class="img-fluid preview-image"
                  src="./assets/image_1.jpg"
                  alt="vue-focuspoint-component"
                >
              </div>
            </div>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-md-6">
            <h4>Own focus pin</h4>
            <p><code>slot="pin"</code> Set your own pin</p>
            <focus-point
              v-model="imageThree"
            >
              <template
                slot="pin"
              >
                😀
              </template>
              <img
                class="img-fluid"
                src="./assets/image_1.jpg"
                alt="vue-focuspoint-component"
              >
            </focus-point>
            <div
              v-if="imageThree"
              class="row my-3"
            >
              <div class="col-6">
                <pre>{{ imageThree }}</pre>
              </div>
              <div class="col-5 col-sm-4 ml-auto image-description">
                <img
                  :style="{objectPosition: `${imageThree.x}% ${imageThree.y}%`}"
                  class="img-fluid preview-image"
                  src="./assets/image_1.jpg"
                  alt="vue-focuspoint-component"
                >
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <h4>Other elements</h4>
            <p>Test on another element</p>
            <focus-point
              v-model="imageFour"
            >
              <div class="jumbotron">
                <h1 class="display-4">Hello, world!</h1>
                <p class="lead">
                  This is a simple hero unit, a simple jumbotron-style component for
                  calling extra attention to featured content or information.
                </p>
                <hr class="my-4">
                <p>
                  It uses utility classes for typography and spacing to
                  space content out within the larger container.
                </p>
                <p class="lead">
                  <a
                    class="btn btn-primary btn-lg"
                    href="#"
                    role="button"
                  >
                    Learn more
                  </a>
                </p>
              </div>
            </focus-point>
            <div
              v-if="imageFour"
              class="row my-3"
            >
              <div class="col-6">
                <pre>{{ imageFour }}</pre>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  import FocusPoint from './components/FocusPoint'

  export default {
    name: 'App',
    components: {
      FocusPoint
    },
    data() {
      return {
        imageOne: null,
        imageTwo: {
          x: 69,
          y: 60
        },
        imageThree: {
          x: 69,
          y: 58
        },
        imageFour: null
      }
    }
  }
</script>

<style lang="scss">
  /*
    FocusPoint
  */
  @import "scss/focus-point";
  @import "scss/focus-point-theme";

  /*
    Bootstrap
  */
  @import "~bootstrap/scss/bootstrap";

  /*
    FOR EXAMPLE
  */
  pre {
    font-size: 11px !important;
    background: black;
    color: #FFF;
    padding: .5rem 1rem;
    border-radius: 3px;
  }

  .preview-image {
    transition: all .3s ease-in-out;
    object-fit: none;
  }

  .image-description {
    position: relative;

    &:after {
      content: "preview by css!";
      position: absolute;
      top: .3rem;
      left: 0;
      width: 100%;
      color: white;
      font-size: 12px;
      text-align: center;
      text-shadow: 0 0 5px #000;
    }
  }
</style>
