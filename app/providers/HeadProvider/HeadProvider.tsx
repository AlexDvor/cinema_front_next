import Head from 'next/head'
import NextProgressBar from 'nextjs-progressbar'
import { FC } from 'react'

import { accentColor } from '@/configs/constants'

import Favicons from './Favicons'

type IHeadProvider = {
	children: React.ReactNode
}

const HeadProvider: FC<IHeadProvider> = ({ children }) => {
	return (
		<>
			<NextProgressBar
				color={accentColor}
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=5"
				/>

				<Favicons />

				<meta name="theme-color" content={'#181B1E'} />
				<meta name="msapplication-navbutton-color" content={'#181B1E'} />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content={'#181B1E'}
				/>
			</Head>
			{children}
		</>
	)
}

export default HeadProvider
