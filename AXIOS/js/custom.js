const postFetch = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    Accept: "aplication/json",
    Authorization: "meunovotoken",
  },
});
