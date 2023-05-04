import { useGetAllNewsArticlesQuery } from "../../../services/NewsAPI.jsx";
import "./Newsfeed.css";

export default function News() {
  const {
    data: news,
    error: newsError,
    isSuccess: newsSuccess,
  } = useGetAllNewsArticlesQuery({ refetchOnMountOrArgChange: true });

  return (
    newsSuccess &&
    news.map((i) => {
      return (
        <div key={i.id} className="newsArticleContainer">
          <div className="border"></div>
          <div>
            <h3>{i.title}</h3>
            <h4>{i.snippet}</h4>
            <p>
              {/* by {i.author.username} / {new Date().toLocaleDateString().split("/")} */}
              by {i.author.username} / {new Date().toLocaleDateString().replaceAll("/", " ")}
            </p>
          </div>
          <img src={i.photo} alt={i.photoAlt} width={350} />
        </div>
      );
    })
  );
}
