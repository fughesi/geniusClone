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
