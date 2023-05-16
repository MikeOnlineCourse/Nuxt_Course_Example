<script setup>
import axios from "axios";
// https://api.github.com/orgs/nuxt
// https://api.github.com/orgs/nuxt/repos

// const { data: orgsData } = await useFetch("https://api.github.com/orgs/nuxt");
// const { data: reposData } = await useFetch(
//   "https://api.github.com/orgs/nuxt/repos"
// );

// const [{ data: orgsData }, { data: reposData }] = await Promise.all([
//   useFetch(`https://api.github.com/orgs/nuxt`),
//   useFetch(`https://api.github.com/orgs/nuxt/repos`),
// ]);

const { data } = await useAsyncData("axiostest", async () => {
  const res = await axios.get("https://api.github.com/orgs/nuxt");
  return res.data;
});
</script>
<template>
  <div>
    <h1>a lot of fetch</h1>
    {{ data }}
  </div>
</template>
<style></style>
