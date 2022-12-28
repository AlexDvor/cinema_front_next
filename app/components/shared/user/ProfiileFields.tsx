import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import Field from '@/components/ui/Form-elements/Field'

import { validEmail } from '@/utils/string/regex'

interface IProfileFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const ProfileFields: FC<IProfileFields> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email is required!',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email',
					},
				})}
				placeholder="E-mail"
				error={errors.email}
				disabled
			/>

			<Field
				{...register(
					'current password',
					isPasswordRequired
						? {
								required: 'Password is required!',
								minLength: {
									value: 6,
									message: 'Min length should more 6 symbols!',
								},
						  }
						: {}
				)}
				placeholder="Current Password"
				type="password"
				error={errors.password}
				autoComplete="true"
			/>
			<Field
				{...register(
					'new password',
					isPasswordRequired
						? {
								required: 'Password is required!',
								minLength: {
									value: 6,
									message: 'Min length should more 6 symbols!',
								},
						  }
						: {}
				)}
				placeholder="New Password"
				type="password"
				error={errors.password}
				autoComplete="true"
			/>
		</>
	)
}

export default ProfileFields
