import { FC } from 'react'

import styles from './Loader.module.scss'

const Loader: FC = () => {
	return (
		<div className={styles.idsRing}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}

export default Loader
