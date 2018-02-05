<template>
  <div class="focus-point" @click="click">
    <slot></slot>
    <div ref="pin" class="focus-point-pin" :style="pinStyle">
      <slot name="pin"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FocusPoint',
  props: {
    focus: Object,
    default: {
      type: Object,
      default: () => ({
        x: 50,
        y: 50
      })
    }
  },
  data() {
    return {
      pin: null,
      wrap: null,
      coordinates: this.focus || this.default
    }
  },
  mounted() {
    this.pin = this.$refs.pin.getBoundingClientRect()
  },
  methods: {
    click({ clientX, clientY }) {
      this.wrap = this.$el.getBoundingClientRect()
      this.coordinates = {
        x: clientX - this.wrap.left,
        y: clientY - this.wrap.top
      }
      this.$emit('update:focus', {
        x: Math.round(this.coordinatesPercent.x),
        y: Math.round(this.coordinatesPercent.y)
      })
    }
  },
  computed: {
    coordinatesPercent() {
      if (!this.wrap) {
        return this.coordinates
      }

      return {
        x: (this.coordinates.x / this.wrap.width) * 100,
        y: (this.coordinates.y / this.wrap.height) * 100
      }
    },
    pinStyle() {
      if (!this.pin) {
        return null
      }

      return {
        left: `calc(${this.coordinatesPercent.x}% - ${this.pin.width / 2}px)`,
        top: `calc(${this.coordinatesPercent.y}% - ${this.pin.height / 2}px)`
      }
    }
  }
}
</script>
