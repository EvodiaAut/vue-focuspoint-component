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
      focus: {
        type: Object,
        default: () => {}
      },
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
    }
  }
</script>
