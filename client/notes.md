=== codes to convert to base64 ===

function convertToBase64(file) {
return new Promise((resolve, reject) => {
const fileReader = new FileReader();
fileReader.readAsDataURL(file);
fileReader.onload = () => {
resolve(fileReader.result);
};
fileReader.onerror = (error) => {
reject(error);
};
});
}

const handleFileUpload = async (e) => {
const file = e.target.files[0];
const base64 = await convertToBase64(file);
setBody((i) => ({ ...i, avatar: base64 }));
};

// const formData = (e) => {
// const { name, value, type } = e.target;

// if (type == "file") {
// setBody((i) => ({
// ...i,
// avatar: e.target.files[0],
// }));
// } else {
// setBody((i) => ({
// ...i,
// [name]: value,
// }));
// }
// };

==== axios POST c image ===

const handleUpload = (e) => {
try {
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
    } catch (error) {
      console.log(error.response);
    }

};

===== practice form ======

      {/* <form encType="multipart/form-data" onSubmit={(e) => (e.preventDefault(), updatePost(body))}>
        <input type="file" name="image" formEncType="multipart/form-data" onChange={(e) => formData(e)} />
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
      </form> */}

======= code to convert base64 from DB to images on frontend =======
const base64String = btoa(
new Uint8Array(i.image?.data?.data).reduce(function (data, byte) {
return data + String.fromCharCode(byte);
}, "")
);

         // return
              <img src={`data:image/png;base64,${base64String}`} alt="things" width="300" />
