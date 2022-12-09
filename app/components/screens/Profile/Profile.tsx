import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'

import ProfileFields from '@/components/shared/user/ProfiileFields'
// import { toastr } from 'react-redux-toastr'
import Heading from '@/components/ui/Heading/Heading'
import SkeletonLoader from '@/components/ui/Skeleton-loader/SkeletonLoader'
import Button from '@/components/ui/form-elements/Button'
import UserNavigation from '@/components/ui/user-navigation/UserNavigation'

// import { UserService } from '@/services/user/user.service'
// import { toastError } from '@/utils/api/withToastrErrorRedux'
import { Meta } from '@/utils/meta'

import { user } from '@/store/user'

import styles from './Profile.module.scss'
import { IProfileInput } from './profile.interface'

const Profile: FC = () => {
	const { handleSubmit, register, formState, setValue } =
		useForm<IProfileInput>({
			mode: 'onChange',
		})

	setValue('email', user.email)
	setValue('name', user.name)

	const onSubmit: SubmitHandler<IProfileInput> = async (data) => {
		console.log('onSubmit', data)
	}

	return (
		<Meta title="Profile">
			<UserNavigation />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				{false ? (
					<SkeletonLoader count={2} />
				) : (
					<ProfileFields
						register={register}
						formState={formState}
						isPasswordRequired={false}
					/>
				)}

				<Button className="block mx-auto">Update</Button>
			</form>
		</Meta>
	)
}

export default Profile
