import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon/MaterialIcon'

import styles from '../Menu/Menu.module.scss'
import { IMenuItem } from '../Menu/Menu.types'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()

	return (
		<>
			<li
				className={cn({
					[styles.active]: asPath === item.link,
				})}
			>
				<Link href={item.link}>
					<MaterialIcon name={item.icon} />
					<span>{item.title}</span>
				</Link>
			</li>
		</>
	)
}

export default MenuItem
