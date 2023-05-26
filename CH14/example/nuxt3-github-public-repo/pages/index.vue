<script setup>
const { searchData } = useRepoSearch();

useAsyncData("repo", async () => await searchData("MikeCheng1208"));
</script>

<template>
  <div id="app">
    <UserTitle />
    <ReposList />
  </div>
</template>

<style scoped>
#app {
  width: 100%;
}
</style>
