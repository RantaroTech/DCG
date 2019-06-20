// プレイヤーと対戦相手の状態を管理するよ！

const userModule = {
  namespaced: true,
  state() {
    return {
      card_data: {
        rock: { name: 'rock', atack: 1000, is_show: true, is_choice: false },
        scissors: {
          name: 'scissors',
          atack: 500,
          is_show: true,
          is_choice: false
        },
        paper: { name: 'paper', atack: 300, is_show: true, is_choice: false }
      }
    }
  },
  actions: {},
  mutations: {}
}

export default userModule
