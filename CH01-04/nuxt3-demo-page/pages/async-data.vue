<script setup>
const { data } = await useAsyncData("nuxt3test", () => {
  return $fetch("https://api.nuxtjs.dev/mountains");
});

// 如果有需要的話可以重新觸發更新資料
const refreshGetData = () => {
  refreshNuxtData("nuxt3test");
  console.log("refreshGetData");
};

// 這是會重複在server跟client觸發，所以不推薦這麼做
// const data = await $fetch("https://api.nuxtjs.dev/mountains");
</script>
<template>
  <div>
    <h1>useAsyncData</h1>
    <button @click="refreshGetData">refresh</button>
    <br />
    {{ data }}
  </div>
</template>
<style></style>
