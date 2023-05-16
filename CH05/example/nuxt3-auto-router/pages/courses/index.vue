<script setup>
//https://vue-lessons-api.vercel.app/courses/list
const { data } = await useFetch(
  "https://vue-lessons-api.vercel.app/courses/list"
);
</script>
<template>
  <div>
    <nav>
      <NuxtLink to="/">回首頁</NuxtLink>
    </nav>
    <CardList :courses="data" />
  </div>
</template>
<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}
</style>
