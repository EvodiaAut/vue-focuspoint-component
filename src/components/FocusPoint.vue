<template>
  <div class="focus-point" @click="onClick">
    <slot></slot>
    <slot name="focus">
      <span class="focus-point-focus" :style="focusStyle"></span>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'FocusPoint',
  props: {
    offset: {
      type: Object,
      default: {
        x: 50,
        y: 50
      }
    }
  },
  data() {
    return {
      coordinates: this.offset,
      boundingClientRect: null
    }
  },
  methods: {
    onClick({ offsetX, offsetY }) {
      this.boundingClientRect = this.$el.getBoundingClientRect()
      this.coordinates = {
        x: offsetX,
        y: offsetY
      }

      this.$emit('update:offset', { ...this.coordinatesPercent, ...{ pixel: this.coordinates } })
    }
  },
  computed: {
    coordinatesPercent() {
      if (!this.boundingClientRect) {
        return this.coordinates
      }

      return {
        x: (this.coordinates.x / this.boundingClientRect.width) * 100,
        y: (this.coordinates.y / this.boundingClientRect.height) * 100
      }
    },
    focusStyle() {
      return {
        left: `${this.coordinatesPercent.x}%`,
        top: `${this.coordinatesPercent.y}%`
      }
    }
  }
}
</script>
