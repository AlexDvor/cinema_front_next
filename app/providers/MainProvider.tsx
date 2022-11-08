import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import Layout from '@/components/layout/Layout'

import { TChildren } from '@/interfaces/children.types'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: true,
		},
	},
})

const MainProvider: FC<TChildren> = ({ children }) => {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Layout>{children}</Layout>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</>
	)
}

export default MainProvider
