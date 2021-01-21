import React, { useState, useEffect } from "react";

import Card from "./Card";

import fetchAnimes from "../fectchAnimes";

const AnimeList = ({ searchVal }) => {
  const [animeData, setAnimeData] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetchAnimes(signal, searchVal)
      .then(({ results }) => {
        return results.map((item) => {
          return {
            name: item.title,
            image_url: item.image_url,
            description: item.synopsis,
            url: item.url,
            rating: item.score,
            episodes: item.episodes,
          };
        });
      })
      .then((animeArr) => setAnimeData(animeArr))

      .catch((err) => console.log(err));

    return () => {
      controller.abort();
    };
  }, [searchVal]);

  return (
    <section className="anime-list">
      {animeData &&
        animeData.map((el, i) => <Card key={el + i} data={el}></Card>)}
    </section>
  );
};

export default AnimeList;
