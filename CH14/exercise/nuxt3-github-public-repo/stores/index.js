import { defineStore } from "pinia";
import { apiGetUserData, apiGetRepos } from "@/api";
import notFoundJpg from "@/assets/notFound.jpg";

export const useIndexStore = defineStore("indexStore", () => {
  const repoList = ref([]);

  const state = reactive({
    userName: "",
    avatarUrl: "",
    updatedAt: "",
    publicRepos: 0,
    page: 1,
    limit: 9,
  });

  const isReposOver = ref(false); // Repos 是否 load 完成

  const isLoadRepos = ref(false); // Repos 是否正在 load

  const resetData = () => {
    state.userName = "";
    state.page = 0;
    state.avatarUrl = "";
    state.updatedAt = "";
    repoList.value = [];
  };

  const addPage = () => {
    state.page++;
  };

  const setUserName = (name) => {
    state.userName = name;
  };

  // 取得user資料
  const fetchUserData = async (name) => {
    try {
      const ud = await apiGetUserData(name);
      const { login, avatar_url, public_repos, updated_at } = ud;
      state.userName = login;
      state.avatarUrl = avatar_url;
      state.updatedAt = updated_at;
      state.publicRepos = public_repos;
    } catch (error) {
      if (error.response.status === 404) {
        state.avatarUrl = notFoundJpg;
        state.userName = "This user is not found!!!";
      }
    }
  };

  // 取得Repo列表
  const fetchRepos = async () => {
    if (isReposOver.value) return;
    if (isLoadRepos.value) return;
    isLoadRepos.value = true;
    addPage();
    const repos = await apiGetRepos(state.userName, state.page, state.limit);
    repoList.value = [...repoList.value, ...repos];
    isLoadRepos.value = false;
    isReposOver.value = repos.length < state.limit;
  };

  return {
    state,
    fetchUserData,
    fetchRepos,
    addPage,
    setUserName,
    resetData,
    repoList,
    isReposOver,
    isLoadRepos,
  };
});
