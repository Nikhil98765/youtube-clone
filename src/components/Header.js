import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

export const Header = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="flex col-span-2">
        <MenuRoundedIcon fontSize='large' className='m-2'/>
        <img
          src="https://www.gstatic.com/youtube/img/promos/growth/93bc0c46bc17efa162877e8ec821fefd5e99fd9792cefc51e9b34c88904cc768_129x56.webp"
          alt="youtube-logo"
        />
      </div>
      <div className="col-span-8 h-12 text-center p-2">
        <input type="text" placeholder='Search' className="w-1/2 p-5 h-[40px] border border-gray-400 border-r-0 rounded-l-full" />
        <SearchRoundedIcon fontSize="large" className="w-4 p-1 -mt-1 border border-gray-400 rounded-r-full" style={{height: '42px', width: '50px'}} />
      </div>
      <div className="col-span-2 flex justify-end p-2">
        <AccountCircleRoundedIcon fontSize='large' />
      </div>
    </div>
  );
}