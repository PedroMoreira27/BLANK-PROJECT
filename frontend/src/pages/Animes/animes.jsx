import { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

function AnimesGeral() {
  const [query, setQuery] = useState('');
  const [animes, setAnimes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Buscar uma lista inicial de animes ao montar o componente
    const fetchInitialAnimes = async () => {
      try {
        const response = await axios.get('https://kitsu.io/api/edge/anime', {
          params: {
            'page[limit]': 10, // Buscar os primeiros 10 animes
          },
        });
        setAnimes(response.data.data);
      } catch (error) {
        setError('Error fetching initial data from Kitsu API.');
      }
    };

    fetchInitialAnimes();
  }, []);

  const fetchAnimes = async () => {
    setError('');
    try {
      const response = await axios.get('https://kitsu.io/api/edge/anime', {
        params: {
          'filter[text]': query,
        },
      });
      setAnimes(response.data.data);
    } catch (error) {
      setError('Error fetching data from Kitsu API.');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnimes();
  };

  return (
    <div className="AnimesGeral">
      <h1>Anime Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for an anime"
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      <div className="results">
        {animes.map((anime) => (
          <div key={anime.id} className="anime">
            <h3>
              {anime.attributes.titles.en || anime.attributes.titles.en_jp}
            </h3>
            <img
              src={anime.attributes.posterImage.small}
              alt={anime.attributes.titles.en || anime.attributes.titles.en_jp}
            />
            <p>{anime.attributes.synopsis}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimesGeral;
