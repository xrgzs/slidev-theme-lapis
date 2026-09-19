<script setup lang="ts">
defineProps({
  /**
   * Tone of the pill:
   * `primary` | `plain` | `note` | `tip` | `important` | `warning` | `caution`
   */
  tone: {
    type: String,
    default: 'primary',
  },
})
</script>

<template>
  <span class="lapis-pill" :class="`lapis-pill-${tone}`">
    <slot />
  </span>
</template>
