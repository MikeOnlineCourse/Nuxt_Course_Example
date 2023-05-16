<script setup></script>

<template>
  <div id="app">
    <select>
      <option value="zh-TW">zh-TW</option>
      <option value="en-US">en-US</option>
      <option value="ja-JP">ja-JP</option>
    </select>

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
#__nuxt {
  width: 100%;
  height: 100%;
  background-color: #ecc9a0;
}
#__nuxt {
  display: flex;
  justify-content: center;
  align-items: center;
}

select {
  width: 100%;
  height: 30px;
  margin: 0 auto;
  border-radius: 20px;
  text-align: center;
  border: 1px solid #d4613e;
  margin: 0 auto 20px auto;
}
select:active,
select:focus {
  outline: none;
}
</style>
