<template>
  <div class="focus-point" @click="onClick">
    <slot></slot>
    <span ref="pin" class="focus-point-pin" :style="pinStyle">
      <slot name="pin"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'FocusPoint',
  props: {
    offset: Object,
    offsetDefault: {
      type: Object,
      default: () => ({
        x: 50,
        y: 50
      })
    }
  },
  data() {
    return {
      boundingElement: null,
      boundingPin: null,
      coordinates: this.offset ? this.offset : this.offsetDefault
    }
  },
  mounted() {
    this.boundingPin = this.$refs.pin.getBoundingClientRect()
  },
  methods: {
    onClick({ clientX, clientY }) {
      this.boundingElement = this.$el.getBoundingClientRect()
      this.coordinates = {
        x: clientX - this.boundingElement.left,
        y: clientY - this.boundingElement.top
      }
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
      if (!this.boundingPin) {
        return null
      }

      return {
        top: `calc(${this.coordinatesPercent.y}% - ${this.boundingPin.height / 2}px)`,
        left: `calc(${this.coordinatesPercent.x}% - ${this.boundingPin.width / 2}px)`
      }
    }
  },
  watch: {
    coordinates() {
      this.$emit('update:offset', { ...this.coordinatesPercent, ...{ pixel: this.coordinates } })
    }
  }
}
</script>
