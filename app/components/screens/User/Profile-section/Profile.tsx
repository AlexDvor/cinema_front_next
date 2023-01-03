import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import ProfileFields from '@/components/shared/user/ProfileFields'
import Button from '@/components/ui/Form-elements/Button'
import SkeletonLoader from '@/components/ui/Skeleton-loader/SkeletonLoader'
import UserNavigation from '@/components/ui/user-navigation/UserNavigation'

import { UserService } from '@/services/user/user.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'
import { Meta } from '@/utils/meta'

import styles from './Profile.module.scss'
import { IProfileInput } from './profile.interface'

const Profile: FC = () => {
	const [hasDisabledBtn, setHasDisabledBtn] = useState(false)
	const { handleSubmit, register, formState, setValue } =
		useForm<IProfileInput>({
			mode: 'onChange',
		})

	const { isLoading } = useQuery('profile', () => UserService.getProfile(), {
		onSuccess({ data }) {
			setValue('email', data.user.email)
			// setValue('name', data.user.name)
		},
		onError(error) {
			toastError(error, 'Get profile')
		},
	})

	const { mutateAsync, isLoading: isUpdateProfile } = useMutation(
		'update profile',
		(data: IProfileInput) => UserService.updateProfile(data),
		{
			onError(error) {
				toastError(error, 'Update profile')
			},
			onSuccess() {
				setHasDisabledBtn(true)
				toastr.success('Update profile', 'update was successful')
			},
		}
	)

	const onSubmit: SubmitHandler<IProfileInput> = async (data) => {
		await mutateAsync(data)
	}

	return (
		<Meta title="Profile">
			<UserNavigation />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				{isLoading ? (
					<SkeletonLoader count={2} />
				) : (
					<ProfileFields register={register} formState={formState} />
				)}

				<Button
					type="submit"
					className="block mx-auto"
					disabled={isLoading || isUpdateProfile || hasDisabledBtn}
				>
					Update
				</Button>
			</form>
		</Meta>
	)
}

export default Profile
