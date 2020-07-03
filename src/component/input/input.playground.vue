<template>
  <div>
    <header class="playground-header">
      Input
    </header>
    <div class="playground-wrapper">
      <my-input />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MyInput from './input.vue';

export default Vue.extend({
  components: {
    MyInput,
  },
});
</script>
