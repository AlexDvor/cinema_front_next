import cn from 'classnames'
import { FC } from 'react'
import { useQuery } from 'react-query'

import SkeletonLoader from '@/components/ui/Skeleton-loader/SkeletonLoader'

import { AdminService } from '@/services/admin/admin.service'

// import { AdminService } from '@/services/admin/admin.service'
import styles from '../Admin.module.scss'

const CountUsers: FC = () => {
	const { isLoading, data: response } = useQuery(
		'Count users',
		() => AdminService.getStatistics(),
		{
			select({ data }) {
				return data.data
			},
		}
	)

	return (
		<>
			<div className={cn(styles.block, styles.countUsers)}>
				<div className="w-24">
					{isLoading ? (
						<SkeletonLoader className="h-16" />
					) : (
						<div className={styles.number}>{response?.authUsers}</div>
					)}
					<div className={styles.description}>users</div>
				</div>
			</div>
			<div className={cn(styles.block, styles.countUsers)}>
				<div className="w-24">
					{isLoading ? (
						<SkeletonLoader className="h-16" />
					) : (
						<div className={styles.number}>{response?.guests}</div>
					)}
					<div className={styles.description}>guests</div>
				</div>
			</div>
		</>
	)
}

export default CountUsers
