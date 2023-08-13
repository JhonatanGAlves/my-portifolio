import axios from "axios";

const baseUrl = "https://api.github.com/users/JhonatanGAlves/repos";

export function getRepos(): Promise<any> {
  return axios.get(baseUrl).then((response) => response.data);
}

export function getTools(tools_url: string | undefined): Promise<any> {
  return axios.get(tools_url).then((response) => response.data);
}
