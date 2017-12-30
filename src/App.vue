<template>
  <div id="app">
    <div class="my-5 container">
      <header class="my-3 clearfix">
        <ul class="nav float-right">
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/EvodiaAut/vue-focuspoint-component" target="_blank">Github</a>
          </li>
        </ul>
        <h1 class="text-muted">vue-focuspoint-component</h1>
        <p class="lead">Set focus point on elements</p>
      </header>
      <hr>
      <main role="main">
        <div class="row my-5">
          <div class="col-md-6">
            <h4>Feel free set a focus point</h4>
            <p>Click on the element (picture)</p>
            <focus-point :offset.sync="imageOne">
              <img class="img-fluid" src="./assets/image_1.jpg">
            </focus-point>
            <pre>{{imageOne}}</pre>
          </div>
          <div class="col-md-6">
            <h4>A saved focuspoint</h4>
            <p>Use <code>:offset.sync="imageTwo"</code> for get new coordinates</p>
            <focus-point :offset.sync="imageTwo">
              <img class="img-fluid" src="./assets/image_1.jpg">
            </focus-point>
            <pre>{{imageTwo}}</pre>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-md-6">
            <h4>Own focus pin</h4>
            <p><code>slot="pin"</code> Set your own pin</p>
            <focus-point :offset.sync="imageThree">
              <template slot="pin">
                <span class="badge badge-primary">artwork ;)</span>
              </template>
              <img class="img-fluid" src="./assets/image_1.jpg">
            </focus-point>
            <pre>{{imageThree}}</pre>
          </div>
          <div class="col-md-6">
            <h4>Other elements</h4>
            <p>Test on another element</p>
            <focus-point :offset.sync="imageFour">
              <div class="jumbotron">
                <h1 class="display-4">Hello, world!</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4">
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p class="lead">
                  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
              </div>
            </focus-point>
            <pre>{{imageFour}}</pre>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import FocusPoint from './components/FocusPoint'

export default {
  name: 'app',
  data() {
    return {
      imageOne: null,
      imageTwo: {
        x: 94,
        y: 19
      },
      imageThree: null,
      imageFour: null
    }
  },
  components: {
    FocusPoint
  }
}
</script>

<style lang="scss">
  /*
    FocusPoint
  */
  @import "scss/focus-point";

  /*
    Bootstrap
  */
  @import "../node_modules/bootstrap/scss/functions";
  @import "../node_modules/bootstrap/scss/variables";
  @import "../node_modules/bootstrap/scss/mixins";
  // @import "../node_modules/bootstrap/scss/root";
  // @import "../node_modules/bootstrap/scss/print";
  @import "../node_modules/bootstrap/scss/reboot";
  @import "../node_modules/bootstrap/scss/type";
  @import "../node_modules/bootstrap/scss/images";
  @import "../node_modules/bootstrap/scss/code";
  @import "../node_modules/bootstrap/scss/grid";
  // @import "../node_modules/bootstrap/scss/tables";
  // @import "../node_modules/bootstrap/scss/forms";
  // @import "../node_modules/bootstrap/scss/buttons";
  // @import "../node_modules/bootstrap/scss/transitions";
  // @import "../node_modules/bootstrap/scss/dropdown";
  // @import "../node_modules/bootstrap/scss/button-group";
  // @import "../node_modules/bootstrap/scss/input-group";
  // @import "../node_modules/bootstrap/scss/custom-forms";
  @import "../node_modules/bootstrap/scss/nav";
  // @import "../node_modules/bootstrap/scss/navbar";
  // @import "../node_modules/bootstrap/scss/card";
  // @import "../node_modules/bootstrap/scss/breadcrumb";
  // @import "../node_modules/bootstrap/scss/pagination";
  @import "../node_modules/bootstrap/scss/badge";
  @import "../node_modules/bootstrap/scss/jumbotron";
  // @import "../node_modules/bootstrap/scss/alert";
  // @import "../node_modules/bootstrap/scss/progress";
  // @import "../node_modules/bootstrap/scss/media";
  // @import "../node_modules/bootstrap/scss/list-group";
  // @import "../node_modules/bootstrap/scss/close";
  // @import "../node_modules/bootstrap/scss/modal";
  // @import "../node_modules/bootstrap/scss/tooltip";
  // @import "../node_modules/bootstrap/scss/popover";
  // @import "../node_modules/bootstrap/scss/carousel";
  @import "../node_modules/bootstrap/scss/utilities";
</style>
