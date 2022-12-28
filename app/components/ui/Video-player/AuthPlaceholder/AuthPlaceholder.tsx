import { FC } from 'react'

import AuthButton from './AuthButton'
import styles from './AuthPlaceholder.module.scss'

const AuthPlaceholder: FC<{ id: number }> = ({ id }) => {
	return (
		<div className={styles.placeholder}>
			<div>
				<p>You must be logged in to start watching</p>
				<AuthButton id={id} />
			</div>
		</div>
	)
}

export default AuthPlaceholder
