<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  background: {
    type: String,
    default: undefined,
  },
})

const style = computed(() => handleBackground(props.background))
</script>

<template>
  <div class="slidev-layout end" :style="style">
    <div class="my-auto w-full">
      <slot>Thank you</slot>
    </div>
  </div>
</template>
