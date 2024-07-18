import { useState, useEffect } from 'react';
import axios from 'axios';
import Heart from '../../assets/icons/heart';
import ChevronDown from '../../assets/icons/chevronDown';
import './style.css';

function AnimesGeral() {
  const [query, setQuery] = useState('');
  const [animes, setAnimes] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [toggles, setToggles] = useState({});

  useEffect(() => {
    const fetchInitialAnimes = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://kitsu.io/api/edge/anime', {
          params: {
            'page[limit]': 8,
          },
        });
        setAnimes(response.data.data);
      } catch (error) {
        setError('Error fetching initial data from Kitsu API.');
      }
      setLoading(false);
    };

    fetchInitialAnimes();
  }, []);

  const fetchAnimes = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('https://kitsu.io/api/edge/anime', {
        params: {
          'filter[text]': query,
          'page[limit]': 8,
        },
      });
      setAnimes(response.data.data);
    } catch (error) {
      setError('Error fetching data from Kitsu API.');
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnimes();
  };

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  const handleChange = debounce((value) => {
    setQuery(value);
    fetchAnimes();
  }, 300);

  const toggleSynopsis = (id) => {
    setToggles((prevToggles) => ({
      ...prevToggles,
      [id]: !prevToggles[id],
    }));
    console.log(`toggles`);
  };

  return (
    <div className="AnimesGeral w-full flex justify-center items-center flex-col mt-12">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search for an anime"
          className="border border-gray-300 rounded p-2 m-12"
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>. . .</p>}
      {error && <p>{error}</p>}
      <div className="results rounded grid grid-cols-4 w-11/12 gap-10">
        {animes.map((anime) => (
          <div key={anime.id} className="anime rounded m-6 w-full">
            <h3 className="title text-3xl mb-5">
              {anime.attributes.titles.en || anime.attributes.titles.en_jp}
            </h3>
            <div className="flex justify-center items-center flex-col w-full">
              <img
                className="rounded m-5 w-full h-1/2"
                src={anime.attributes.posterImage.small}
                alt={
                  anime.attributes.titles.en || anime.attributes.titles.en_jp
                }
                id={`image${anime.id}`}
              />
              <div className="flex justify-between w-full">
                <div className="shadow rounded p-2">
                  <Heart
                    id={anime.id}
                    className="heart"
                    onClick={() => {
                      const image = document.getElementById(`image${anime.id}`);
                      if (image) {
                        image.classList.toggle('hearted');
                      }
                    }}
                  />
                </div>
                <div className="shadow rounded p-2">
                  <ChevronDown
                    id={anime.id}
                    className="chevron"
                    onClick={() => toggleSynopsis(anime.id)}
                  />
                </div>
              </div>
              {toggles[anime.id] && (
                <div className="w-full" id={`synopsis${anime.id}`}>
                  <p className="synopsis text-xl ml-5 position absolute w-1/6">
                    {anime.attributes.synopsis}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimesGeral;
