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
      wrap: null
    }
  },
  mounted() {
    this.pin = this.$refs.pin.getBoundingClientRect()
  },
  methods: {
    click({ clientX, clientY }) {
      this.wrap = this.$el.getBoundingClientRect()
      this.$emit('update:focus', {
        x: Math.round(((clientX - this.wrap.left) / this.wrap.width) * 100),
        y: Math.round(((clientY - this.wrap.top) / this.wrap.height) * 100)
      })
    }
  },
  computed: {
    pinStyle() {
      if (!this.pin) {
        return null
      }

      const focus = this.focus || this.default

      return {
        left: `calc(${focus.x}% - ${this.pin.width / 2}px)`,
        top: `calc(${focus.y}% - ${this.pin.height / 2}px)`
      }
    }
  }
}
</script>
