import React, { PropsWithChildren } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { RootState } from '../store/store'
import cartReducer from '../store/slices/cartSlice'
import loginReducer from '../store/slices/loginSlice'
import { productsAPI } from '../store/slices/productsApiSlice'
import { usersAPI } from '../store/slices/usersApiSlice'
import { ordersAPI } from '../store/slices/ordersApiSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedLoginReducer = persistReducer(persistConfig, loginReducer)

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  initialState?: RootState
  store?: EnhancedStore<RootState>
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    initialState,
    store = configureStore({
      reducer: {
        cart: cartReducer,
        login: persistedLoginReducer,
        [productsAPI.reducerPath]: productsAPI.reducer,
        [usersAPI.reducerPath]: usersAPI.reducer,
        [ordersAPI.reducerPath]: ordersAPI.reducer,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      }).concat(productsAPI.middleware).concat(usersAPI.middleware).concat(ordersAPI.middleware)
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
): { store: EnhancedStore<RootState> } & ReturnType<typeof render> {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  if (initialState) {
    store.getState = jest.fn(() => ({ ...initialState }))
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) } as {
    store: EnhancedStore<RootState>
  } & ReturnType<typeof render>
}