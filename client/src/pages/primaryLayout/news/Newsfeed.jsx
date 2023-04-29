import { useGetAllNewsArticlesQuery } from "../../../services/NewsAPI.jsx";

export default function News() {
  const {
    data: news,
    error: newsError,
    isSuccess: newsSuccess,
  } = useGetAllNewsArticlesQuery({ refetchOnMountOrArgChange: true });

  console.log(news);
  return (
    newsSuccess &&
    news.map((i) => {
      return (
        <div key={i.id}>
          <img src={i.photo} alt={i.photoAlt} width={350} />
          <div>{i.article} </div>
        </div>
      );
    })
  );
}
