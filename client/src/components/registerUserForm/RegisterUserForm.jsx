import "./RegisterUserForm.css";
import { useState } from "react";
import { useCreateNewUserMutation } from "../../services/UsersAPI.jsx";

export default function RegisterUserForm() {
  const [body, setBody] = useState({
    image: "",
    username: "",
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [updatePost] = useCreateNewUserMutation();

  const formData = (e) => {
    const { name, value, type, files } = e.target;
    console.log(files);
    if (type === "file") {
      setBody((i) => ({
        ...i,
        image: FileList,
        // image: files[0],
      }));
    } else {
      setBody((i) => ({
        ...i,
        [name]: value,
      }));
    }
  };

  return (
    <form encType="multipart/form-data" onSubmit={(e) => (e.preventDefault(), updatePost(body))}>
      <label htmlFor="fileUpload">upload a file!</label>

      <input
        type="file"
        label="Image"
        accept=".jpeg, .jpg, .png"
        id="fileUpload"
        multiple={true}
        hidden
        onChange={(e) => formData(e)}
      />

      <br />
      <label>
        username
        <input type="text" name="username" value={body?.username} required onChange={(e) => formData(e)} />
      </label>
      <br />
      <label>
        First name
        <input type="text" name="firstName" value={body?.firstName} onChange={(e) => formData(e)} />
      </label>
      <br />
      <label>
        Last name
        <input type="text" name="lastName" value={body?.lastName} onChange={(e) => formData(e)} />
      </label>
      <br />
      <label>
        age
        <input type="number" name="age" value={body?.age} onChange={(e) => formData(e)} />
      </label>
      <br />
      <label>
        phone
        <input type="text" name="phone" value={body?.phone} onChange={(e) => formData(e)} />
      </label>
      <br />
      <label>
        email
        <input type="email" name="email" value={body?.email} onChange={(e) => formData(e)} />
      </label>
      <br />
      <label>
        password
        <input type="password" name="password" value={body?.password} onChange={(e) => formData(e)} />
      </label>
      <br />
      <label>
        repeat password
        <input type="password" name="confirmPassword" value={body?.confirmPassword} onChange={(e) => formData(e)} />
      </label>
      <br />

      {/* <label>
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
      </label> */}

      <br />
      <button type="submit">SUBMIT</button>
    </form>
  );
}
