import { useState } from "react";
import "./Selector.css";

export default function Selector() {
  const [selector, setSelector] = useState(true);
  const [chart, setChart] = useState({ TYPE: "", GENRE: "", TIME: "" });
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

  return (
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
                className={`typeChart TD ${i === chart.TYPE ? "this" : ""}`}
                key={index}
                onClick={() => setChart((i) => ({ ...i, TYPE: type[index] }))}
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
                className={`typeChart TD ${i === chart.GENRE ? "this" : ""}`}
                key={index}
                onClick={() => setChart((i) => ({ ...i, GENRE: genre[index] }))}
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
                className={`typeChart TD ${i === chart.TIME ? "this" : ""}`}
                key={index}
                onClick={() => setChart((i) => ({ ...i, TIME: time[index] }))}
              >
                {i}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
