import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { IUserNavItem } from '@/interfaces/user-navigation.types'

import styles from './UserNavigation.module.scss'

const UserNavItem: FC<{ navItem: IUserNavItem }> = ({ navItem }) => {
	const { asPath } = useRouter()

	return (
		<li>
			<Link
				className={cn({ [styles.active]: asPath === navItem.link })}
				href={navItem.link}
			>
				{navItem.title}
			</Link>
		</li>
	)
}

export default UserNavItem
