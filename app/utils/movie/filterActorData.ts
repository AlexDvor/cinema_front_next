import { IActorItem } from '@/interfaces/actor.types'

export const filterActorData = (data: IActorItem[]) => {
	return data.filter((item) => item.profile_path !== null)
}
