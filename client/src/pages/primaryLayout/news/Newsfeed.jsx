import { useGetAllNewsArticlesQuery } from "../../../services/NewsAPI.jsx";
import { useGetAllArtistsQuery } from "../../../services/ArtistsAPI.jsx";
import NewsComponent from "../../../components/news/NewsComponent.jsx";
import Selector from "../../../components/selector/Selector.jsx";
import ArtistGrid from "../../../components/artistGrid/ArtistGrid.jsx";
import { useState } from "react";
import "./Newsfeed.css";

export default function News() {
  const [body, setBody] = useState();

  const { data: news, isSuccess: newsSuccess } = useGetAllNewsArticlesQuery();

  const { data: artists, isSuccess: artistSuccess } = useGetAllArtistsQuery();

  const formData = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setBody((i) => ({
        ...i,
        image: files[0],
      }));
    } else {
      setBody((i) => ({
        ...i,
        [name]: value,
      }));
    }
  };

  return (
    <main className="newsFeedContainer">
      {/* 
      {practiceSuccess &&
        practice?.map((i, index) => {
          const base64String = btoa(
            new Uint8Array(i.image?.data?.data).reduce(function (data, byte) {
              return data + String.fromCharCode(byte);
            }, "")
            ); 
            return (
              <div key={index}>
              {i.name}
              <br />
              <img src={`data:image/png;base64,${base64String}`} alt="things" width="300" />
              <br />
              <br />
              </div>
              ); })}
            */}

      {newsSuccess &&
        news.map((i, index) => {
          return (
            <NewsComponent
              key={index}
              id={i?.id}
              title={i?.title}
              photo={i?.photo}
              photoAlt={i.photoAlt}
              author={i?.author?.username}
              username={i?.username}
            />
          );
        })}

      <h3 className="chartsTagline">CHARTS</h3>

      <Selector />

      <section className="artistGridSection">
        {/* {artistSuccess &&
          artists.map((i, index) => {
            return (
              <ArtistGrid
                key={index}
                index={index}
                title={i.title}
                stageName={i.stageName}
                artist={i.artists}
                photo={i.photo}
                photoAlt={i.photoAlt}
              />
            );
          })} */}
      </section>
    </main>
  );
}
