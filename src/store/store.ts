import { compose, applyMiddleware, Middleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";

import createSagaMiddleware from "@redux-saga/core";

import { rootReducer } from "./root-reducer";

import storage from "redux-persist/lib/storage";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";

export type RootState = ReturnType<typeof rootReducer>;

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
}

const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV === "development" && logger,
  sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleWares,
});

// sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
