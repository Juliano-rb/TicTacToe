import { useQuery } from '@tanstack/react-query'

import Match from '../types/IMatches'
import lobbyApi from '../api/LobbyApi'

const useListMatches = () => useQuery<Match[]>(['matchList'], lobbyApi.listMatches, {
//   onError: () => console.log('houve um erro aqui'),
//   onSuccess: () => toast('Partidas carregados com sucesso!'),
  enabled: true,
  refetchOnWindowFocus: true,
  refetchInterval: 6000,
})

export default useListMatches
