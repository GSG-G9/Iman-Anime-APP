const fetchAnimes = async (signal, searchVal) => {
  const response = await fetch(
    `https://api.jikan.moe/v3/search/anime?q=${searchVal}`,
    { signal }
  );
  const data = await response.json();
  return data;
};
export default fetchAnimes;
