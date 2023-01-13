import { useRouter } from 'next/router'
import { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon/MaterialIcon'

import styles from './AdminActions.module.scss'

interface IAdminActions {
	removeHandler: () => void
}

const AdminActions: FC<IAdminActions> = ({ removeHandler }) => {
	return (
		<div className={styles.actions}>
			<button
				onClick={() =>
					console.log("This function doesn't work at moment. Sorry")
				}
			>
				<MaterialIcon name="MdEdit" />
			</button>
			<button onClick={removeHandler}>
				<MaterialIcon name="MdClose" />
			</button>
		</div>
	)
}

export default AdminActions
