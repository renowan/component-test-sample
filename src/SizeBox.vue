<template lang="html">
  <div class="my-box" :style="myStyle">
    myWidth:<span class="my-width">{{myWidth}}</span>
  </div>
</template>

<script>
export default {
  name: 'size-box',
  props: {
    width: {type: Number, default: 0},
    ratio: {type: Number, default: 1}
  },
  computed: {
    myWidth () {
      return Math.floor(this.width * this.ratio)
    },
    myStyle () {
      return {
        width: `${this.myWidth}px`
      }
    }
  },
  methods: {
    add (a, b) {
      return a + b
    }
  }
}
</script>

<style lang="css">
.my-box {
  height: 50px;
  background-color: red;
}
</style>
