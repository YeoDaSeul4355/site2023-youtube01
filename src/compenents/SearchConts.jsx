import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Videos } from './';

const SearchConts = () => {
  const [videos, setvideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${searchTerm}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
    )
      .then(response => response.json())
      .then(result => {
        setvideos(result.items);
      })
      .catch(error => console.log(error));
  }, [searchTerm]);

  // if (!videos?.items) return <Loader />;
  return (
    <main id="main">
      <section id="search">
        <h2>검색 결과</h2>
        {videos && <Videos videos={videos} />}
      </section>
    </main>
  );
};

export default SearchConts;
