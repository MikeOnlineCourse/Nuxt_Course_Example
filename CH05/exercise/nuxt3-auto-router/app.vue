<template>
  <div id="app">
    <header>
      <img class="logo" src="./assets/image/logo2.png" alt="" />
    </header>
    <NuxtPage />
  </div>
</template>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body,
#__nuxt,
#app {
  width: 100%;
  height: 100%;
}
</style>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 80px;
  background-color: #262052;
  display: flex;
  justify-content: center;
  align-items: center;
  img.logo {
    width: auto;
    height: 100%;
  }
}
</style>
