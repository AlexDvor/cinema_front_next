import { FC } from 'react'

import Menu from './Menu/Menu'
import { menus } from './Menu/Menu.data'
import styles from './MenuContainer.module.scss'

const MenuContainer: FC = () => {
	return (
		<>
			<Menu menu={menus[0]}></Menu>
		</>
	)
}

export default MenuContainer
