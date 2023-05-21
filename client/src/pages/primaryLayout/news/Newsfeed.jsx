import { useGetAllPracticeResultsQuery, usePostPracticeResultsMutation } from "../../../services/practiceAPI.jsx";
import { useGetAllNewsArticlesQuery } from "../../../services/NewsAPI.jsx";
import { useState } from "react";
import moment from "moment";
import axios from "axios";
import "./Newsfeed.css";

export default function News() {
  const [body, setBody] = useState({
    name: "",
    height: "",
    weight: "",
    eyeColor: "",
  });

  const { data: practice, isSuccess: practiceSuccess } = useGetAllPracticeResultsQuery();

  const [updatePost] = usePostPracticeResultsMutation();

  const { data: news, isSuccess: newsSuccess } = useGetAllNewsArticlesQuery({ refetchOnMountOrArgChange: true });

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

  console.log(body);

  const handleUpload = (e) => {
    let data = new FormData();

    data.append("image", body.image);
    data.append("name", body.name);
    data.append("height", body.height);
    data.append("weight", body.weight);
    data.append("eyeColor", body.eyeColor);

    axios({
      url: "http://localhost:5200/mockRegister",
      method: "POST",
      data: data,
    });
  };

  return (
    <main>
      <br />

      <form encType="multipart/form-data" onSubmit={(e) => (e.preventDefault(), handleUpload(e))}>
        <input type="file" name="image" onChange={(e) => formData(e)} />
        <br />
        <label>
          name
          <input type="text" name="name" value={body.name} onChange={(e) => formData(e)} />
        </label>
        <br />
        <label>
          weight
          <input type="text" name="weight" value={body.weight} onChange={(e) => formData(e)} />
        </label>
        <br />
        <label>
          height
          <input type="text" name="height" value={body.height} onChange={(e) => formData(e)} />
        </label>
        <br />
        <label>
          eyeColor
          <input type="text" name="eyeColor" value={body.eyeColor} onChange={(e) => formData(e)} />
        </label>
        <br />
        <button>submit</button>
        <br />
      </form>

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
          );
        })}

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
