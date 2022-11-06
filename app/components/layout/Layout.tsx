import { FC } from 'react'
import React from 'react'

import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'

type TChildren = {
	children: React.ReactNode
}

const Layout: FC<TChildren> = ({ children }) => {
	return (
		<>
			<div className={styles.layout}>
				<Navigation />
				<div className={styles.center}> {children}</div>
				<Sidebar />
			</div>
		</>
	)
}

export default Layout
