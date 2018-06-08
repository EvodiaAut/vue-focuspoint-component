<template>
  <div
    class="focus-point"
    @click="click"
  >
    <slot/>
    <div
      ref="pin"
      :style="pinStyle"
      class="focus-point-pin"
    >
      <slot
        name="pin"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FocusPoint',
    props: {
      value: {
        type: Object,
        default: () => ({
          x: 50,
          y: 50
        })
      }
    },
    data() {
      return {
        pin: null
      }
    },
    computed: {
      pinStyle() {
        if (!this.pin) {
          return null
        }

        const { width, height } = this.pin

        if (!this.value) {
          return {
            left: this.s(50, width),
            top: this.s(50, height)
          }
        }

        const { x, y } = this.value

        return {
          left: this.s(x, width),
          top: this.s(y, height)
        }
      }
    },
    mounted() {
      this.pin = this.$refs.pin.getBoundingClientRect()
    },
    methods: {
      click({ clientX, clientY }) {
        const { left, width, top, height } = this.$el.getBoundingClientRect()
        this.$emit('input', {
          x: this.c(clientX, left, width),
          y: this.c(clientY, top, height)
        })
      },
      c(c, mw, w) {
        return Math.round(((c - mw) / w) * 100)
      },
      s(w, mw) {
        return `calc(${w}% - ${mw / 2}px)`
      }
    }
  }
</script>
