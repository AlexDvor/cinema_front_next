import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import Field from '@/components/ui/Form-elements/Field'

import { validEmail } from '@/utils/string/regex'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({
	register,
	formState: { errors },
	isPasswordRequired = true,
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
				type="email"
				autoComplete="username"
			/>
			<Field
				{...register(
					'password',
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
				placeholder="Password"
				type="password"
				error={errors.password}
				autoComplete="current-password"
			/>
		</>
	)
}

export default AuthFields
