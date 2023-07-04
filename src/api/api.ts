import axios from "axios";

const baseUrl = "https://api.github.com/users/JhonatanGAlves/repos";

export function getRepos(): Promise<any> {
  return axios.get(baseUrl).then((response) => response.data);
}
