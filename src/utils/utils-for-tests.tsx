import React, { PropsWithChildren } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Store & Slices
import { RootState } from '../store/store'
import cartReducer from '../store/slices/cartSlice'
import loginReducer from '../store/slices/loginSlice'
import { productsAPI } from '../store/slices/productsApiSlice'
import { usersAPI } from '../store/slices/usersApiSlice'

// Config for persisting login state on refresh
const persistConfig = {
  key: 'root',
  storage,
}

// Persist the login reducer
const persistedLoginReducer = persistReducer(persistConfig, loginReducer)

// Initial state
const initialState = {
  cart: [],
  login: { isLoggedIn: false, userId: '' },
  productsApi: {
    queries: {},
    mutations: {},
    provided: {},
    subscriptions: {},
    config: {
      online: true,
      focused: true,
      middlewareRegistered: false,
      refetchOnFocus: false,
      refetchOnReconnect: false,
      refetchOnMountOrArgChange: false,
      keepUnusedDataFor: 60,
      reducerPath: 'productsApi'
    }
  },
  usersApi: {
    queries: {},
    mutations: {},
    provided: {},
    subscriptions: {},
    config: {
      online: true,
      focused: true,
      middlewareRegistered: false,
      refetchOnFocus: false,
      refetchOnReconnect: false,
      refetchOnMountOrArgChange: false,
      keepUnusedDataFor: 60,
      reducerPath: 'usersApi'
    }
  }
}

// This type interface extends the default options for render from RTL, as well as allows the user to specify other things such as initialState, store.
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
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      }).concat(productsAPI.middleware).concat(usersAPI.middleware)
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

  // Return an object with the store and all of RTL's functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) } as {
    store: EnhancedStore<RootState>
  } & ReturnType<typeof render>
}