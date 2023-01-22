import cn from 'classnames'
import { FC } from 'react'

import Loader from '../Loader/Loader'

import { IButton } from './form.interface'
import styles from './form.module.scss'

const Button: FC<IButton> = ({ children, className, isLoading, ...rest }) => {
	return (
		<button className={cn(styles.button, className)} {...rest}>
			{children} {isLoading && <Loader />}
		</button>
	)
}

export default Button
