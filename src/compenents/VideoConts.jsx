import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import { Loader } from './index';
import { GrFavorite } from 'react-icons/gr';
import { GrFormView } from 'react-icons/gr';

const VideoConts = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
    )
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setVideoDetail(result.items[0]);
      })
      .catch(error => console.log(error));
  }, []);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle, description },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <section className="videoConts">
      <div className="container">
        <div className="video__sub">
          <div className="left">
            <div className="play">
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} />
            </div>
            <div className="desc">
              <h3>{title}</h3>
              <div className="channel">
                <Link to={`/channel/${channelId}`}>{channelTitle}</Link>
                <div>
                  <span>
                    <GrFormView className="icon" />
                    조회수 입니다 {viewCount} 회
                  </span>
                  <span>
                    <GrFavorite className="icon" />
                    좋아요 {likeCount} 개
                  </span>
                </div>
              </div>
              <div className="video_desc">{description.slice(0, 500)}...</div>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </section>
  );
};
export default VideoConts;
