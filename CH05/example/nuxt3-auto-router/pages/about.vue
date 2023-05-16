<script setup></script>
<template>
  <nav>
    <NuxtLink to="/">回首頁</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/about/a">A page</NuxtLink>
    <NuxtLink to="/about/b">B page</NuxtLink>
  </nav>
  <main>
    <NuxtPage />
  </main>
</template>
<style lang="scss" scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  > a {
    padding: 0 20px;
  }
}

main {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
