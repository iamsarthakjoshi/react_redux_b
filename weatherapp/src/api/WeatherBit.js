import axios from "axios";

const API_KEY = "wSo0LRcHZMmsh4rXshasAImNK7Ulp19zkGQjsnUjeMXsnpyilC";

export default axios.create({
  baseURL: "https://weatherbit-v1-mashape.p.mashape.com/forecast/",
  params: {}
});
