import React, { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService";

function SearchInput() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const users = await fetchUserData(query, location, minRepos);
      setResults(users);
    } catch (err) {
      setError("Error fetching users. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form
        onSubmit={handleSearch}
        className="flex flex-col gap-4 max-w-md mx-auto"
      >
        <input
          type="text"
          placeholder="Search GitHub Users"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 rounded p-2"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-300 rounded p-2"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border border-gray-300 rounded p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      {results.length > 0 && (
        <ul className="mt-6 space-y-4">
          {results.map((user) => (
            <li
              key={user.id}
              className="border border-gray-300 rounded p-4 flex items-center gap-4"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold">{user.login}</h2>
                <p>Location: {user.location || "Not specified"}</p>
                <p>Repositories: {user.public_repos || "N/A"}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchInput;
