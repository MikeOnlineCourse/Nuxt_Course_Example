<script setup></script>

<template>
  <div>
    <main>
      <NuxtLink to="/courses">課程列表</NuxtLink>
      <NuxtLink to="/about">關於我們</NuxtLink>
    </main>
  </div>
</template>

<style lang="scss" scoped>
main {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  > a {
    padding: 0 20px;
  }
}
</style>
