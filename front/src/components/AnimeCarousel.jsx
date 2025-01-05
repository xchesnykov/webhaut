import React from "react";
import "../styles/AnimeCarousel.css";

const AnimeCarousel = () => {
  var animePosters = [];


  return (
    <div className="carousel-container">
      <h2>Trending Anime</h2>
      <div className="anime-slider">
        {animePosters.map((anime, index) => (
          <a href={anime.link} key={index} className="anime-poster">
            <img src={anime.imageUrl} alt={anime.title} />
            <div className="poster-title">{anime.title}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AnimeCarousel;
