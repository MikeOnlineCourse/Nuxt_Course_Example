const apiFetch = $fetch.create({ baseURL: "https://api.github.com" });

export const apiGetUserData = (name) => {
  return apiFetch(`/users/${name}`);
};

export const apiGetRepos = (name, page, per_page) => {
  return apiFetch(
    `/users/${name}/repos?page=${page}&per_page=${per_page}&sort=pushed`
  );
};
