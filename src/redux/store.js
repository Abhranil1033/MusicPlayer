import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamCoreApi } from './services/shazamCore';

/* this is a boiler plate code and is used in every redux toolkit application and can be found in their documentation */
export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath] : shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
