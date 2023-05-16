<script setup>
// https://vue-lessons-api.vercel.app/courses/{id}
const route = useRoute();
const { data: detal } = await useFetch(
  `https://vue-lessons-api.vercel.app/courses/${route.params.id}`
);
</script>
<template>
  <div>
    <nav>
      <NuxtLink to="/courses">上一頁</NuxtLink>
      <NuxtLink to="/">回首頁</NuxtLink>
    </nav>
    <main>
      <div>
        <h1>{{ detal.data[0].name }}</h1>
        <h2>NTD: {{ detal.data[0].money }}</h2>
        <img :src="detal.data[0].photo" alt="" />
        <div>
          <img :src="detal.data[0].teacher.img" alt="" />
          <p>{{ detal.data[0].teacher.name }}</p>
        </div>
      </div>
    </main>
    <div>
      <nav>
        <NuxtLink :to="`/courses/${route.params.id}/`"> 課程首頁 </NuxtLink>
        <NuxtLink :to="`/courses/${route.params.id}/about`">
          課程介紹
        </NuxtLink>
        <NuxtLink :to="`/courses/${route.params.id}/list`"> 課程列表 </NuxtLink>
        <NuxtLink :to="`/courses/${route.params.id}/feedbacks`">
          評價回饋
        </NuxtLink>
      </nav>
      <NuxtPage />
    </div>
  </div>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  > a {
    margin: 0 20px;
  }
}
</style>
