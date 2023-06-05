import { useState } from "react";
import ArtistGrid from "../artistGrid/ArtistGrid.jsx";
import { useGetAllArtistsQuery } from "../../services/ArtistsAPI.jsx";
import { useGetAllSongsQuery } from "../../services/SongAPI.jsx";
import "./Selector.css";

export default function Selector() {
  const [selector, setSelector] = useState(true);
  const [chart, setChart] = useState({ TYPE: "", GENRE: "", TIME: "" });
  const [typeIndex, setTypeIndex] = useState(0);
  const [genreIndex, setGenreIndex] = useState(0);
  const [timeIndex, setTimeIndex] = useState(0);

  const type = ["Songs", "Albums", "Artists", "Lyrics"];
  const genre = ["All", "Rap", "Pop", "R&B", "Rock", "Country"];
  const time = ["Day", "Week", "Month", "All Time"];

  const toggleSelector = () => {
    setSelector((i) => !i);
  };

  if (chart.GENRE === "All") chart.GENRE = "ALL GENRES";
  if (chart.TIME === "Day") chart.TIME = "TODAY";
  if (chart.TIME === "Week") chart.TIME = "THIS WEEK";
  if (chart.TIME === "Month") chart.TIME = "THIS MONTH";
  let a = type[typeIndex];

  const { data: Artists, isSuccess: ArtistsSuccess } = useGetAllArtistsQuery();

  const { data: Songs, isSuccess: SongsSuccess } = useGetAllSongsQuery();

  console.log(a);
  return (
    <>
      <section className="chartSection">
        <div className="chartTitle" onClick={() => toggleSelector()}>
          <div>{`${chart.TYPE ? `${chart.TYPE.toUpperCase()} /` : ""} ${
            chart.GENRE ? `${chart.GENRE.toUpperCase()} /` : ""
          } ${chart.TIME.toUpperCase()}`}</div>
          <div>^</div>
        </div>

        <div className={selector ? "experimentalChart" : "chartHide"}>
          <div className="THeader">
            <div className="typeChart">TYPE</div>
            {type.map((i, index) => {
              return (
                <div
                  className={`typeChart TD ${i === type[typeIndex] ? "this" : ""}`}
                  key={index}
                  onClick={() => (setChart((i) => ({ ...i, TYPE: type[index] })), setTypeIndex(index))}
                >
                  {i}
                </div>
              );
            })}
          </div>
          <div className="THeader">
            <div className="typeChart">GENRE</div>
            {genre.map((i, index) => {
              return (
                <div
                  className={`typeChart TD ${i === genre[genreIndex] ? "this" : ""}`}
                  key={index}
                  onClick={() => (setChart((i) => ({ ...i, GENRE: genre[index] })), setGenreIndex(index))}
                >
                  {i}
                </div>
              );
            })}
          </div>
          <div className="THeader">
            <div className="typeChart">TIME</div>
            {time.map((i, index) => {
              return (
                <div
                  className={`typeChart TD ${i === time[timeIndex] ? "this" : ""}`}
                  key={index}
                  onClick={() => (setChart((i) => ({ ...i, TIME: time[index] })), setTimeIndex(index))}
                >
                  {i}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        {a === "Songs" && JSON.stringify(Songs?.map((i) => i.title))}
        {a === "Artists" && JSON.stringify(Artists?.map((i) => i.title))}

        {/* {artistSuccess &&
          Artists.map((i, index) => {
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
    </>
  );
}
