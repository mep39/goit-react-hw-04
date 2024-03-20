import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchPhotos = async (search, page = 1) => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: "QlV_TH1EYV9zXnnWpMpxvmAq7klkwDqEMiguJNKXxZk",
      query: search,
      per_page: 9,
      page,
    },
  });
  const images = response.data.results;
  const total = response.data.total_pages;

  return [images, total];
};
