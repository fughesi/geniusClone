import { useGetAllNewsArticlesQuery } from "../../../services/NewsAPI.jsx";
import { useCreateNewUserMutation } from "../../../services/UsersAPI.jsx";
import moment from "moment";
import "./Newsfeed.css";
import { useState } from "react";

export default function News() {
  const [body, setBody] = useState({
    avatar: {},
    username: "",
    firstName: "",
    lastName: "",
    age: 0,
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    // shippingAddress: {
    //   number: "",
    //   city: "",
    //   state: "",
    //   zipCode: "",
    // },
  });

  const [updatePost, { data }] = useCreateNewUserMutation();

  const {
    data: news,
    error: newsError,
    isSuccess: newsSuccess,
  } = useGetAllNewsArticlesQuery({ refetchOnMountOrArgChange: true });

  const formData = (e) => {
    const { name, value, type } = e.target;

    if (type == "file") {
      setBody((i) => ({
        ...i,
        avatar: e.target.files[0],
      }));
    } else {
      setBody((i) => ({
        ...i,
        [name]: value,
      }));
    }
  };

  console.log(body);

  return (
    <main>
      <br />
      <br />

      <form onSubmit={(e) => (e.preventDefault(), updatePost(body))}>
        <label htmlFor="fileUpload">upload a file!</label>

        <input
          type="file"
          label="Image"
          name="avatar"
          accept=".jpeg, .jpg, .png"
          id="fileUpload"
          hidden
          onChange={(e) => (formData(e), console.log(e.target.files[0]))}
        />

        <br />
        <label>
          username
          <input type="text" name="username" required onChange={(e) => formData(e)} />
        </label>
        <label>
          First name
          <input type="text" name="firstName" onChange={(e) => formData(e)} />
        </label>
        <label>
          Last name
          <input type="text" name="lastName" onChange={(e) => formData(e)} />
        </label>
        <label>
          age
          <input type="number" name="age" onChange={(e) => formData(e)} />
        </label>
        <label>
          phone
          <input type="text" name="phone" onChange={(e) => formData(e)} />
        </label>
        <label>
          email
          <input type="email" name="email" onChange={(e) => formData(e)} />
        </label>
        <label>
          password
          <input type="password" name="password" onChange={(e) => formData(e)} />
        </label>
        <label>
          repeat password
          <input type="password" name="confirmPassword" onChange={(e) => formData(e)} />
        </label>
        <label>
          Shipping Address
          <div>
            <label>
              number
              <input type="text" title="shippingAddress" name="number" onChange={(e) => formData(e)} />
            </label>
            <label>
              City
              <input type="text" title="shippingAddress" name="city" onChange={(e) => formData(e)} />
            </label>
            <label>
              State
              <input type="text" title="shippingAddress" name="state" onChange={(e) => formData(e)} />
            </label>

            <label>
              Zip Code
              <input type="text" title="shippingAddress" name="zipCode" />
            </label>
          </div>
          <br />
          <button type="submit">SUBMIT</button>
        </label>
      </form>

      <br />
      <br />
      <br />
      <br />
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
