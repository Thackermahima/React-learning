import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID fkazBidT02kDH2i-Dt6SgHT8RZpElDEJOvrLrbwsOO8"
  }
});
