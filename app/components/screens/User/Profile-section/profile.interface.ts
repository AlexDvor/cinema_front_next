import { IUser } from '@/interfaces/user.types'

export interface IProfileInput extends Pick<IUser, 'email' | 'password'> {}
