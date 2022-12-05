import { FC } from 'react'

import Menu from './Menu'
import { menus } from './Menu.data'
import styles from './MenuContainer.module.scss'

const MenuContainer: FC = () => {
	return (
		<>
			<Menu menu={menus[0]}></Menu>
			<Menu menu={menus[1]}></Menu>
		</>
	)
}

export default MenuContainer
