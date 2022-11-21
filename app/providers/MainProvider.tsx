import { FC } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
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

const MainProvider: FC<TChildren> = ({ children, pageProps }) => {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Hydrate state={pageProps.dehydratedState}>
					<Layout>{children}</Layout>
				</Hydrate>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</>
	)
}

export default MainProvider
