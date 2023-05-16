import dayjs from "dayjs";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("timeformat", {
    mounted(el, binding) {
      const time = dayjs(binding.value).format("YYYY年MM月DD日");
      el.innerText = time;
    },
  });
});
