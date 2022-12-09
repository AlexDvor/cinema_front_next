import { FC } from 'react'

import UserNavItem from './UserNavItem'
import styles from './UserNavigation.module.scss'
import { navItems } from './user-navigation.data'

const UserNavigation: FC = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				{navItems.map((item) => (
					<UserNavItem navItem={item} key={item.link} />
				))}
			</ul>
		</nav>
	)
}

export default UserNavigation
