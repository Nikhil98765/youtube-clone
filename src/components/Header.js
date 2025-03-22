import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { toggleSideBar } from '../store/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { addSearchResults } from '../store/searchSlice';

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((state) => state.search.suggestions);
  const dispatch = useDispatch();

  const menuClickHandler = () => {
    dispatch(toggleSideBar());
  };

  const getSearchSuggestions = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API`${searchQuery}`);
    const json = await response.json();
    if (searchQuery) {
      dispatch(
        addSearchResults({
          [searchQuery]: json[1]
        })
      );
    }
    setSuggestions(json[1]);
  };

  const scrollHandler = () => {
    setShowSuggestions(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  useEffect(() => {
    // API call
    // Added debouncing
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Link className="flex" to={'/'}>
          <MenuRoundedIcon
            fontSize="large"
            className="m-2 cursor-pointer"
            onClick={menuClickHandler}
          />
          <img
            src="https://www.gstatic.com/youtube/img/promos/growth/5fb8f661affdc2ec656657a27f781da4c1297d9e6c3d8dc95c214b128325fa94_129x56.webp"
            alt="youtube-logo"
          />
        </Link>
      </div>
      <div className="col-span-8 text-center p-2">
        <div>
          <input
            type="text"
            placeholder="Search"
            className="w-1/2 p-5 h-[40px] border border-gray-300 border-r-0 rounded-l-full"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <SearchRoundedIcon
            fontSize="large"
            className="w-4 p-1 -mt-1 border border-gray-300 rounded-r-full"
            style={{ height: '42px', width: '50px' }}
          />
        </div>
        {showSuggestions && suggestions.length > 0 && (
          <div className="fixed bg-white p-2 w-[38.7rem] mx-auto ml-[18.5rem] border shadow-md border-gray-200     rounded-lg">
            <ul>
              {suggestions.map((suggestion) => (
                <li key={suggestion} className="p-1 text-left">
                  <SearchRoundedIcon fontSize="medium" />
                  <span className="mx-2">{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-2 flex justify-end p-2">
        <AccountCircleRoundedIcon fontSize="large" />
      </div>
    </div>
  );
};
