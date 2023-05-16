import { defineStore } from "pinia";
export const useLogingStore = defineStore("login", () => {
  const route = useRoute();

  const router = useRouter();

  const cookie = useCookie("auth", {
    domain: ".nuxt3demo.com",
  });

  const error_message = ref({
    username: "",
    password: "",
  });

  const isLoading = ref(false);

  const handleLoading = () => (isLoading.value = !isLoading.value);

  const sendLoginAuth = async ({ username, password }) => {
    if (isLoading.value) return;
    isLoading.value = true;
    try {
      // https://vue-lessons-api.vercel.app
      const data = await $fetch("/auth/login", {
        method: "POST",
        body: { username, password },
      });
      cookie.value = {
        token: data.token,
      };

      if (route.query.isOpen) {
        window.open("", "_self").close();
      }
      router.replace("/");
    } catch (error) {
      const { username } = error.response._data.error_message;
      error_message.value = {
        username,
        password: "password error",
      };
    } finally {
      isLoading.value = false;
    }
  };

  const checkAuth = async () => {
    try {
      // https://vue-lessons-api.vercel.app
      await $fetch("/testToken", {
        method: "POST",
        headers: {
          Authorization: cookie.value?.token,
        },
      });
    } catch (error) {
      if (error.response?.status === 403) {
        console.log("not login");
        cookie.value = null;
        const { query } = route;
        router.replace({ path: "/login", query });
      }
    }
  };

  return {
    isLoading,
    handleLoading,
    sendLoginAuth,
    checkAuth,
    error_message,
  };
});
