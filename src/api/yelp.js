import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 9yb-fCATSmehKaaucKZ8d_ggGK2x3b9giNoYY3Lv-mWD3IZgJhMNYv8mDD7V46xOTXUlnhFxyhHjcoZMrs4LkEbJCuVYmN0GAu2bw4LdFmFCHc6Dz8K0eohN3k0hXnYx"
  }
});
