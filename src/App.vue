<template>
  <div id="app">
    <div class="container">
      <header class="my-3 clearfix">
        <ul class="nav float-right">
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/EvodiaAut/vue-focuspoint-component" target="_blank">Github</a>
          </li>
        </ul>
        <h3 class="text-muted">vue-focuspoint-component</h3>
        <p class="lead">Set focuspoint on element</p>
      </header>
      <hr>
      <main role="main">
        <div class="row">
          <div class="col-md-6">
            <h4>Fell free set a focuspoint</h4>
            <focus-point :offset.sync="imageOne">
              <img class="img-fluid" src="./assets/image_1.jpg">
            </focus-point>
            <pre>{{imageOne}}</pre>
          </div>
          <div class="col-md-6">
            <h4>A saved focuspoint</h4>
            <focus-point :offset.sync="imageTwo">
              <img class="img-fluid" src="./assets/image_1.jpg">
            </focus-point>
            <pre>{{imageTwo}}</pre>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <h4>Own focus marker</h4>
            <p>With <code>slot="pin"</code> can you set our own pin</p>
            <focus-point>
              <template slot="pin">
                <span class="badge badge-primary">TEST</span>
              </template>
              <img class="img-fluid" src="./assets/image_1.jpg">
            </focus-point>
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
      }
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
  // @import "../node_modules/bootstrap/scss/jumbotron";
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
