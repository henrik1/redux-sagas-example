import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
  devTools: true
});

// then run the sagas
sagaMiddleware.run(sagas);

export default store;
