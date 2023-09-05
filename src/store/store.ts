import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cartReducer from './slices/cartSlice'
import loginReducer from './slices/loginSlice'
import { productsAPI } from './slices/productsApiSlice'
import { usersAPI } from './slices/usersApiSlice'
import { ordersAPI } from './slices/ordersApiSlice'

const persistConfig = { key: 'root', storage}
const persistedLoginReducer = persistReducer(persistConfig, loginReducer)

const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: persistedLoginReducer,
    [productsAPI.reducerPath]: productsAPI.reducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
    [ordersAPI.reducerPath]: ordersAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(productsAPI.middleware)
      .concat(usersAPI.middleware)
      .concat(ordersAPI.middleware)
})

setupListeners(store.dispatch)

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export { store, persistor }

