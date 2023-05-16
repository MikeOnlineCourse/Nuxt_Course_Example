<script setup></script>
<template>
  <div class="card">
    <div class="card_info">
      <img src="" alt="" />
      <h1>name</h1>
    </div>
    <VoteBtn> 0 </VoteBtn>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 170px;
  height: 220px;
  border: 1px solid #999;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .card_info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 100px;
    }
  }
}
</style>
