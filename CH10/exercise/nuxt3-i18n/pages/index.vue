<script setup></script>

<template>
  <div class="lang">
    <div class="menu">
      <a>首頁</a>
      <a>關於我們</a>
      <a>聯絡我們</a>
      <a>產品介紹</a>
      <a>最新消息</a>
      <a>歷史沿革</a>
    </div>
  </div>
</template>

<style scoped>
.menu {
  width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
a {
  cursor: pointer;
  color: #84551c;
  font-size: 25px;
  margin-bottom: 20px;
}
</style>
