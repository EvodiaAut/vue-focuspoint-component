<template>
  <div class="focus-point" @click="onClick">
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
      boundingElement: null,
      coordinates: this.focus ? this.focus : this.default
    }
  },
  mounted() {
    this.pin = this.$refs.pin.getBoundingClientRect()
    this.updateFocus()
  },
  methods: {
    onClick({ clientX, clientY }) {
      this.boundingElement = this.$el.getBoundingClientRect()
      this.coordinates = {
        x: clientX - this.boundingElement.left,
        y: clientY - this.boundingElement.top
      }
      this.updateFocus()
    },
    updateFocus() {
      this.$emit('update:focus', {
        x: Math.round(this.coordinatesPercent.x),
        y: Math.round(this.coordinatesPercent.y)
      })
    }
  },
  computed: {
    coordinatesPercent() {
      if (!this.boundingElement) {
        return this.coordinates
      }

      return {
        x: (this.coordinates.x / this.boundingElement.width) * 100,
        y: (this.coordinates.y / this.boundingElement.height) * 100
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
