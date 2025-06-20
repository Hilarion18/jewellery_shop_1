import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';

const SearchIcon = FaSearch as unknown as React.FC;

type Artist = {

}

type Song = {
  id?: number;
  song_title: string;
  album_id: number;
  artist_id: number;
  genre_id: number;
  songwritter: string;
  price: number;
  label_id: number;
  image: string;
  release_date: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string | null;
};

const exchangeRates = { IDR: 1, USD: 0.000064, EUR: 0.000059 };
const genres = [
  { id: 1, name: 'classic' }, { id: 2, name: 'pop' },
  { id: 3, name: 'dangdut' }, { id: 4, name: 'rock' },
  { id: 5, name: 'metal' }, { id: 6, name: 'jazz' },
  { id: 7, name: 'blues' }, { id: 8, name: 'reggae' },
  { id: 9, name: 'country' },
];
const SONGS_PER_PAGE = 12;

const SongMarketplace: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [filteredSongs, setFilteredSongs] = useState<Song[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currency, setCurrency] = useState<'IDR' | 'USD' | 'EUR'>('IDR');
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [sortOption, setSortOption] = useState('');
  const [yearRange, setYearRange] = useState({ min: 1920, max: new Date().getFullYear() });
  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch data from API
  useEffect(() => {
    fetch('https://hysteria-music-server.fly.dev/v1/song')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.result)) {
          setSongs(data.result);
          setFilteredSongs(data.result);
        }
      })
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  const handleSearch = () => { filterAndSortSongs(); setCurrentPage(1); };
  const handleFilterSubmit = () => { filterAndSortSongs(); setShowFilter(false); setCurrentPage(1); };

  const filterAndSortSongs = () => {
    let result = [...songs];
    if (searchQuery) {
      result = result.filter(song =>
        song.song_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.songwritter.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (selectedGenres.length > 0) {
      result = result.filter(song => selectedGenres.includes(song.genre_id));
    }
    result = result.filter(song => {
      const year = new Date(song.release_date).getFullYear();
      return year >= yearRange.min && year <= yearRange.max;
    });
    switch (sortOption) {
      case 'title-asc': result.sort((a, b) => a.song_title.localeCompare(b.song_title)); break;
      case 'title-desc': result.sort((a, b) => b.song_title.localeCompare(a.song_title)); break;
      case 'price-asc': result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result.sort((a, b) => b.price - a.price); break;
      case 'date-asc': result.sort((a, b) => a.release_date.localeCompare(b.release_date)); break;
      case 'date-desc': result.sort((a, b) => b.release_date.localeCompare(a.release_date)); break;
    }
    setFilteredSongs(result);
  };

  const convertPrice = (price: number) => (price * (currency === 'IDR' ? 15000 : 1) * exchangeRates[currency]).toFixed(2);
  const totalPages = Math.ceil(filteredSongs.length / SONGS_PER_PAGE);
  const startIdx = (currentPage - 1) * SONGS_PER_PAGE;
  const currentSongs = filteredSongs.slice(startIdx, startIdx + SONGS_PER_PAGE);

  return (
    <div className="p-4">
      {/* Search and Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-1 flex border rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search songs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 p-2 outline-none"
          />
          <button onClick={handleSearch} className="bg-blue-500 text-white p-2">
            <SearchIcon />
          </button>
        </div>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border p-2 rounded-md"
        >
          <option value="">Sort By</option>
          <option value="title-asc">A-Z</option>
          <option value="title-desc">Z-A</option>
          <option value="price-asc">Price Low-High</option>
          <option value="price-desc">Price High-Low</option>
          <option value="date-asc">Date Old-New</option>
          <option value="date-desc">Date New-Old</option>
        </select>
        <button onClick={() => setShowFilter(!showFilter)} className="bg-green-500 text-white p-2 rounded">
          {showFilter ? 'Close Filter' : 'Filter'}
        </button>
      </div>

      {/* Filter Section */}
      {showFilter && (
        <div className="border p-4 rounded-md shadow-md mb-4 bg-white">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label>Currency:</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as 'IDR' | 'USD' | 'EUR')}
                className="border p-1 rounded w-full"
              >
                <option value="IDR">IDR</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
            <div>
              <label>Genre:</label>
              <div className="flex flex-wrap gap-2">
                {genres.map((g) => (
                  <label key={g.id} className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      checked={selectedGenres.includes(g.id)}
                      onChange={() =>
                        setSelectedGenres((prev) =>
                          prev.includes(g.id) ? prev.filter((id) => id !== g.id) : [...prev, g.id]
                        )
                      }
                    />
                    {g.name}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label>Year Range:</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={yearRange.min}
                  onChange={(e) => setYearRange({ ...yearRange, min: parseInt(e.target.value) })}
                  className="border p-1 rounded w-20"
                />
                <input
                  type="number"
                  value={yearRange.max}
                  onChange={(e) => setYearRange({ ...yearRange, max: parseInt(e.target.value) })}
                  className="border p-1 rounded w-20"
                />
              </div>
            </div>
          </div>
          <button onClick={handleFilterSubmit} className="mt-4 bg-blue-600 text-white p-2 rounded">Apply Filters</button>
        </div>
      )}

      {/* Song Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {currentSongs.map((song) => (
          <div key={song.id} className="border rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105 dark:text-gray-300">
            <Image src={song.image} alt={song.song_title} className="w-full h-40 object-cover" />
            <div className="p-2">
              <h3 className="font-semibold">{song.song_title}</h3>
              <p className="text-sm">Songwriter: {song.songwritter}</p>
              <p className="text-sm">{new Date(song.release_date).toLocaleDateString()}</p>
              <p className="font-bold">{currency} {convertPrice(song.price)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-4">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)} className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50">Prev</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage((prev) => prev + 1)} className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50">Next</button>
      </div>
    </div>
  );
};

export default SongMarketplace;
