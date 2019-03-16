import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 6015711e0afd2166a151bb5f278f7385ec0b13cdaaa99fb8c79f72c9985bb97b"
  }
});
