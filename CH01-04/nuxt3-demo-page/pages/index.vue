<script setup>
const { data } = await useFetch("https://api.nuxtjs.dev/mountains", {
  onRequest({ request, options }) {
    // 設置 request headers
    options.headers = options.headers || {};
    options.headers.authorization = `Bearer 1234567890`;
  },
  onResponse({ request, response, options }) {
    // 處理回傳資料
    return response._data;
  },
});

const { $hello } = useNuxtApp();

const store = useHomeStore();

const selectedDate = ref(new Date());

const fetchData = async () => {
  // https://api.nuxtjs.dev/mountains
  const res = await fetch("https://api.nuxtjs.dev/mountains").then((res) =>
    res.json()
  );
  console.log(res);
};
</script>
<template>
  <div class="home">
    <h1>首頁: {{ store.count }}</h1>
    <br />
    <div>
      <NuxtLink to="/user">user</NuxtLink>
      <NuxtLink to="/about">about</NuxtLink>
      <NuxtLink to="/async-data">async-data</NuxtLink>
      <NuxtLink to="/a-lot-of-fetch">a-lot-of-fetch</NuxtLink>
    </div>
    {{ data }}
    <br />
    <button @click="fetchData">get api data</button>
    <br />
    <ClientOnly>
      <h2>{{ $hello("Mike") }}</h2>
    </ClientOnly>
    <br />
    <h2 v-timeformat="1680574081915"></h2>
    <VDatePicker v-model="selectedDate" />
    <button @click="store.add">add</button>
    <Home />
    <Box />
  </div>
</template>
<style scoped>
div.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
a {
  display: inline-block;
  margin: 0 20px 20px 20px;
}
</style>
