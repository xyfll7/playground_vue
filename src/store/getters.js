import store from '@/store'
const getters = {
  token: state => state.user.token,
  user: state => state.user.user,
  roles: state => state.user.roles,
  teams: state => {
    if (!state.team.teams.length) {
      store.dispatch('getTeams')
    }
    return state.team.teams
  },
  judges: state => {
    if (!state.judge.judges.length) {
      store.dispatch('getJudges')
    }
    return state.judge.judges
  }
}

export default getters