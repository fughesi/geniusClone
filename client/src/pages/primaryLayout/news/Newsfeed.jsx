import { useGetAllNewsArticlesQuery } from "../../../services/NewsAPI.jsx";
import RegisterUserForm from "../../../components/registerUserForm/RegisterUserForm.jsx";
import { useState } from "react";
import moment from "moment";
import "./Newsfeed.css";

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

  return (
    <main>
      <br />
      <RegisterUserForm />
      {/* {practiceSuccess &&
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
      <br />
      <br />
      {newsSuccess &&
        news.map((i) => {
          return (
            <div key={i.id} className="newsArticleContainer">
              <div className="border"></div>
              <div>
                <h3>{i.title}</h3>
                <h4>{i.snippet}</h4>
                <p>
                  by {i.author?.username} / {moment().format("LL")}
                </p>
              </div>
              <img src={i.photo} alt={i.photoAlt} width={350} />
            </div>
          );
        })}
    </main>
  );
}
