import moment from "moment";
import "./NewsComponent.css";

export default function NewsComponent({ feature, id, photo, photoAlt, author, title }) {
  return (
    <div className="newsComponentContainer">
      <div key={id} className="newsArticleContainer">
        <div>
          <p>{feature || "NEWS"}</p>
          <div></div>
        </div>
        <div className="newsPhotoDiv">
          <img src={photo} alt={photoAlt} />
        </div>
        <div>
          <h3>{title}</h3>
          <p>
            by {author} / <span className="newsComponentDate"> {moment().format("LL")}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
