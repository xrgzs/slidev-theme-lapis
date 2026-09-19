<script setup lang="ts">
defineProps({
  /**
   * Optional title rendered in the serif title font
   */
  title: {
    type: String,
    default: '',
  },
  /**
   * Tone of the card, drives the left rule & title color:
   * `primary` | `plain` | `note` | `tip` | `important` | `warning` | `caution`
   */
  tone: {
    type: String,
    default: 'primary',
  },
  /**
   * Optional UnoCSS icon class, e.g. `i-carbon-lightbulb`
   */
  icon: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="lapis-card" :class="`lapis-card-${tone}`">
    <div v-if="title || icon" class="lapis-card-title">
      <span v-if="icon" class="lapis-card-icon" :class="icon" />
      <span v-if="title">{{ title }}</span>
    </div>
    <slot />
  </div>
</template>
