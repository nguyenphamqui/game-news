<template>
  <svg :width="size" :height="size" :viewBox="viewbox" :style="{ ...styles }">
    <path :fill="color" :d="icon" />
  </svg>
</template>
  
<script setup lang="ts">
import {
  mdiEmailOutline
} from '@mdi/js';

const library = {
  mdiEmailOutline
}

interface Props {
  path?: string;
  size?: string | number;
  viewbox?: string;
  rotate?: number;
  color?: string;
  background?: string;
  radius?: string
  cursor?: string
}

const props = withDefaults(defineProps<Props>(), {
  path: 'mdiAccount',
  size: 20,
  viewbox: '0 0 24 24',
  rotate: 0,
  color: '#4356e0',
  background: 'transparent',
});


const icon = computed(() => library[props.path as keyof typeof library]);
const styles = computed(() => {
  return {
    background: props.background,
    borderRadius: props.radius || 'unset',
    color: props.color,
    cursor: props.cursor || 'default'
  }
});
</script>
  
<style scoped>
svg {
  transform: rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1));
}

path {
  fill: currentColor;
}
</style>
  