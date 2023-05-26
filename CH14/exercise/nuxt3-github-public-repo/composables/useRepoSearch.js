export const useRepoSearch = () => {
  const { resetData, fetchUserData, fetchRepos } = useIndexStore();

  const searchData = async (name) => {
    resetData();
    await fetchUserData(name);
    await fetchRepos(name);
  };

  return { searchData };
};
