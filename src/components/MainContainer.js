import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import { ButtonsList } from './ButtonsList'
import { VideoContainer } from './VideoContainer'
import { showSideBar } from '../store/appSlice'

export const MainContainer = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showSideBar());
  }, []);

  return (
    <div className='col-span-10'>
      <ButtonsList />
      <VideoContainer />
    </div>
  )
}
