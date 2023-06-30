import React, { useEffect, useState } from 'react';
import { Category, Videos } from './index';
import { BiSolidCategory } from 'react-icons/bi';

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState('예술의 이유');
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${selectCategory}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
    )
      .then(response => response.json())
      .then(result => {
        console.log(result.items);
        setVideos(result.items);
      })
      .catch(error => console.log(error));
  }, [selectCategory]);

  // if (!videos?.items) return <Loader />;

  return (
    <main id="main">
      <aside id="aside">
        <h2>
          <BiSolidCategory className="icon" />
          카테고리
        </h2>
        <Category
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </aside>
      <section id="contents">
        <h2>{selectCategory} | 유튜버</h2>
        <Videos videos={videos} />
      </section>
    </main>
  );
};

export default MainConts;
