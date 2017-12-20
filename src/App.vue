<template>
  <div id="app">
    App koko <br>
    <SizeBox :width="50" :ratio="2"></SizeBox>
  </div>
</template>

<script>
import SizeBox from './SizeBox'

export default {
  name: 'app',
  components: {
    SizeBox
  }
}
</script>

<style>

</style>
