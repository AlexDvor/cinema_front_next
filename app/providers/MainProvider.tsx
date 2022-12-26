import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'
import { store } from 'store/store'

import Layout from '@/components/layout/Layout'

import ReduxToastr from '@/ui/redux-toastr/ReduxToastr'

import { TypeComponentAuthFields } from '@/interfaces/auth.types'

import AuthProvider from './AuthProvider/AuthProvider'
import HeadProvider from './HeadProvider/HeadProvider'

export const queryClientMovie = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<TypeComponentAuthFields> = ({ children, Component }) => {
	return (
		<>
			<HeadProvider>
				<Provider store={store}>
					<QueryClientProvider client={queryClientMovie}>
						<ReduxToastr />
						<AuthProvider Component={Component}>
							<Layout>{children}</Layout>
						</AuthProvider>
						<ReactQueryDevtools />
					</QueryClientProvider>
				</Provider>
			</HeadProvider>
		</>
	)
}

export default MainProvider
