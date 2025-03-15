import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MusicVideoRoundedIcon from '@mui/icons-material/MusicVideoRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import { useSelector } from 'react-redux';

export const Sidebar = () => {

  const showSideBar = useSelector(state => state.app.showSideBar);

  // early return pattern
  if (!showSideBar) return null;

  return (
    <div className="p-2 col-span-2 shadow-lg">
      <div className="p-2">
        <ul>
          <li className="p-2">
            <HomeRoundedIcon />
            <span className="px-2">Home</span>
          </li>
          <li className="p-2">
            <MusicVideoRoundedIcon />
            <span className="px-2">Shorts</span>
          </li>
          <li className="p-2">
            <SubscriptionsRoundedIcon />
            <span className="px-2">Subscriptions</span>
          </li>
          <li className="p-2">
            <LibraryMusicRoundedIcon />
            <span className='px-2'>Youtube Music</span>
          </li>
        </ul>
      </div>
      <div className="p-2">
        <h1 className="pb-2">Subscriptions</h1>
        <ul>
          <li className="p-2">
            <span >FirstPost</span>
          </li>
          <li className="p-2">
            <span>Abhijit chavda</span>
          </li>
          <li className="p-2">
            <span>WION</span>
          </li>
          <li className="p-2">
            <span>CRUX</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
