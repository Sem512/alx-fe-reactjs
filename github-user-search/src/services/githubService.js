import axios from "axios";

const GITHUB_API_URL = "https://api.github.com";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};

export const searchUsers = async (query, location, minRepos) => {
  const q = [`q=${query}`];
  if (location) q.push(`location:${location}`);
  if (minRepos) q.push(`repos:>${minRepos}`);

  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q`
    );
    return response.data.items;
  } catch (error) {
    throw new Error("Error fetching users");
  }
};
