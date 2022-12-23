import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { reducers } from './rootReducer'

export const store = configureStore({
	reducer: reducers,
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ['auth/check-auth/rejected'],
			},
		}),
})

export type TypeRootState = ReturnType<typeof store.getState>
