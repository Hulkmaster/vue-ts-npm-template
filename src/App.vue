<template>
  <div
    class="playground"
  >
    <nav>
      <a
        class="playground__nav-link"
        href="#button"
      >button</a>
      <a
        class="playground__nav-link"
        href="#button"
      >input</a>
    </nav>
    <button-playground id="button" />
    <input-playground id="input" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ButtonPlayground from './component/button/button.playground.vue';
import InputPlayground from './component/input/input.playground.vue';

export default Vue.extend({
  name: 'App',
  components: {
    InputPlayground,
    ButtonPlayground,
  },
});
</script>

<style lang="scss">
.playground-header {
  font-size: 50px;
  margin: 25px;
}

.playground-wrapper {
  margin: 10px;
}

.playground__nav-link {
  display: block;
}
</style>
