import { useGetAllNewsArticlesQuery } from "../../services/NewsAPI.jsx";
import "./NewsComponent.css";
import moment from "moment";

export default function NewsComponent({ value }) {
  // export default function NewsComponent({ id, photo, photoAlt, author, username }) {
  return (
    <div className="newsComponentContainer">
      {/* {newsSuccess && */}
      {/* news.map((i) => { */}
      {/* return ( */}
      <div key={i.id} className="newsArticleContainer">
        <div>
          <p>NEWS</p>
          <div></div>
        </div>
        <div className="newsPhotoDiv">
          <img src={i.photo} alt={i.photoAlt} />
        </div>
        <div>
          <h3>{i.title}</h3>
          <p>
            by {i.author?.username} / <span className="newsComponentDate"> {moment().format("LL")}</span>
          </p>
        </div>
      </div>
      {/* ); */}
      {/* }) */}
      {/* } */}
    </div>
  );
}
