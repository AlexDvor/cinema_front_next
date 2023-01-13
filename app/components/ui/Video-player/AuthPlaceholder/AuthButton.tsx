import Link from 'next/link'
import { FC } from 'react'

import { getMovieUrl } from '@/configs/url.config'

import styles from './AuthPlaceholder.module.scss'

const AuthButton: FC<{ id: number }> = ({ id }) => {
	return (
		<Link className={styles.btn} href={`/auth?redirect=${getMovieUrl(id)}`}>
			Sign in
		</Link>
	)
}

export default AuthButton
