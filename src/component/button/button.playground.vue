<template>
  <div>
    <header class="playground-header">
      Button
    </header>
    <div class="playground-wrapper">
      <my-button>
        super button
      </my-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MyButton from './button.vue';

export default Vue.extend({
  components: {
    MyButton,
  },
});
</script>
