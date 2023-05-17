import "./RegisterUserForm.css";
import { useState } from "react";
import { useCreateNewUserMutation } from "../../services/UsersAPI.jsx";

export default function RegisterUserForm() {
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

  return (
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
  );
}
