import cn from 'classnames'
import { FC } from 'react'
import { useQuery } from 'react-query'

import SkeletonLoader from '@/components/ui/Skeleton-loader/SkeletonLoader'

import { staticData } from '@/store/user'

// import { AdminService } from '@/services/admin/admin.service'
import styles from '../Admin.module.scss'

const CountUsers: FC = () => {
	// const { isLoading, data: response } = useQuery('Count users', () =>
	// 	AdminService.getCountUsers()
	// )

	return (
		<>
			<div className={cn(styles.block, styles.countUsers)}>
				<div className="w-24">
					{false ? (
						<SkeletonLoader className="h-16" />
					) : (
						// <div className={styles.number}>{response?.data}</div>
						<div className={styles.number}>{staticData.authUsers}</div>
					)}
					<div className={styles.description}>users</div>
				</div>
			</div>
			<div className={cn(styles.block, styles.countUsers)}>
				<div className="w-24">
					{false ? (
						<SkeletonLoader className="h-16" />
					) : (
						// <div className={styles.number}>{response?.data}</div>
						<div className={styles.number}>{staticData.guests}</div>
					)}
					<div className={styles.description}>guests</div>
				</div>
			</div>
		</>
	)
}

export default CountUsers
