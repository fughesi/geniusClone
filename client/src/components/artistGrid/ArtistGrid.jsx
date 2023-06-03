import "./ArtistGrid.css";

export default function ArtistGrid({ index, title, stageName, artist, photo, photoAlt }) {
  return (
    <div className="chartGridContainer">
      <div>{index + 1}</div>
      <div>
        <img src={"#"} alt={photoAlt} />
      </div>
      <div>{stageName}</div>
    </div>
  );
}
