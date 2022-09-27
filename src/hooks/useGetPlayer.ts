import { FilteredMetadata } from 'boardgame.io'
import IPlayer from '../types/IPlayer'

export const useGetPlayer = (
  player: string,
  matchData?: FilteredMetadata,
): IPlayer => {
  const playerData = matchData?.find(
    (p) => p.id.toString() === player,
  ) as unknown as { name: string; id: string; data: any }

  return {
    id: String(playerData?.id),
    name: playerData?.name || '',
    avatar: playerData?.data?.playerAvatar,
  }
}

export const useGetOpponent = (
  mineID: string,
  matchData?: FilteredMetadata,
): IPlayer => {
  const playerData = matchData?.find(
    (p) => p.id.toString() !== mineID,
  ) as unknown as { name: string; id: string; data: any }

  return {
    id: String(playerData?.id),
    name: playerData?.name || '',
    avatar: playerData?.data?.playerAvatar,
  }
}
