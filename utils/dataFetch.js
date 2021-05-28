import dotenv from "dotenv";
dotenv.config();

const URL = process.env.GHOST_API_URL;
const API_KEY = process.env.GHOST_API_KEY;

// https://ghost.org/docs/content-api/
export const fetchAllData = async (url = URL, apiKey = API_KEY) => {
  const result = await fetch(`${url}/posts?key=${apiKey}`);
  const data = await result.json();

  return data.posts;
};

export const getAllPaths = async () => {
  const posts = await fetchAllData();
  const routes = [];

  posts.forEach((post) => {
    routes.push({
      params: {
        id: post.id,
      },
    });
  });

  return routes;
};

export const getStoryById = async (id) => {
  const response = await fetch(`${URL}/posts/${id}?key=${API_KEY}`);
  const post = await response.json();

  return post;
};
