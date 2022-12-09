import { IUser } from '@/interfaces/user.types'

export interface IProfileInput
	extends Pick<IUser, 'name' | 'email' | 'password'> {}
