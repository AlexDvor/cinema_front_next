import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import AuthFields from '@/components/shared/user/AuthFields'
import Heading from '@/components/ui/Heading/Heading'
import Button from '@/components/ui/form-elements/Button'

import { Meta } from '@/utils/meta'

import styles from './Auth.module.scss'

interface IAuthInput {
	email: string
	password: string
}

// import { useActions } from '@/hooks/useActions'
// import { useAuth } from '@/hooks/useAuth'

// import { Meta } from '@/utils/meta'

// import { IAuthInput } from './auth.interface'
// import { useAuthRedirect } from './useAuthRedirect'

const Auth: FC = () => {
	// useAuthRedirect()

	// const { isLoading } = useAuth()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	})

	// const { login, register } = useActions()

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		// if (type === 'login') login(data)
		// else if (type === 'register') register(data)

		// reset()
		console.log(data)

		reset()
	}

	return (
		<Meta title="Auth">
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title="Auth" className="mb-6" />
					<AuthFields register={registerInput} formState={formState} />

					<div className={styles.buttons}>
						<Button
							type="submit"
							onClick={() => setType('login')}
							disabled={false}
						>
							Login
						</Button>
						<Button
							type="submit"
							onClick={() => setType('register')}
							disabled={false}
						>
							Register
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	)
}

export default Auth
