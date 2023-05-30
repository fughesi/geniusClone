import { useGetAllNewsArticlesQuery } from "../../../services/NewsAPI.jsx";
import RegisterUserForm from "../../../components/registerUserForm/RegisterUserForm.jsx";
import { useState } from "react";
import "./Newsfeed.css";
import NewsComponent from "../../../components/news/NewsComponent.jsx";

export default function News() {
  const [body, setBody] = useState();

  const { data: news, isSuccess: newsSuccess } = useGetAllNewsArticlesQuery();

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
  console.log(news);
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
      <NewsComponent />
      {newsSuccess &&
        news.map((i) => {
          <NewsComponent
            value={i?.author}
            //     id={i?.id}
            //     photo={i?.photo}
            //     photoAlt={i?.photoAlt}
            //     author={i?.author?.username}
            //     username={i?.username}
          />;
        })}
      <br />
      <br />
    </main>
  );
}
