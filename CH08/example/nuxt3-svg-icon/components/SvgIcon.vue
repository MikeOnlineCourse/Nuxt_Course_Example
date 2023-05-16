<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "#333",
  },
});
const svgName = computed(() => {
  return props.name.includes("/") ? `#${props.name}` : `#/${props.name}`;
});
</script>
<template>
  <svg aria-hidden="true">
    <use :xlink:href="svgName" :fill="props.color" />
  </svg>
</template>
