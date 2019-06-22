// プレイヤーと対戦相手の状態を管理するよ！

const enemyModule = {
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
  mutations: {
    resetUserCard: function (state) {
      state.card_data.rock.is_choice = false;
      state.card_data.scissors.is_choice = false;
      state.card_data.paper.is_choice = false;

      state.card_data.rock.is_show = true;
      state.card_data.scissors.is_show = true;
      state.card_data.paper.is_show = true;
    },
    choiceRock: function (state) {
      state.card_data.rock.is_choice = true;
    },
    choiceScissors: function (state) {
      state.card_data.scissors.is_choice = true;
    },
    choicePaper: function (state) {
      state.card_data.paper.is_choice = true;
    },
    hideRock: function (state) {
      state.card_data.rock.is_show = false;
    },
    hideScissors: function (state) {
      state.card_data.scissors.is_show = false;
    },
    hidePaper: function (state) {
      state.card_data.paper.is_show = false;
    },
  },
  actions: {
    roundEndCard: function () {
      this.commit('enemyModule/resetUserCard', null, { root: true })
    },
    setChoiceRock() {
      this.commit('enemyModule/choiceRock', null, { root: true })
    },
    setChoiceScissors() {
      this.commit('enemyModule/choiceScissors', null, { root: true })
    },
    setChoicePaper() {
      this.commit('enemyModule/choicePaper', null, { root: true })
    },
    setHideRock() {
      this.commit('enemyModule/hideRock', null, { root: true })
    },
    setHideScissors() {
      this.commit('enemyModule/hideScissors', null, { root: true })
    },
    setHidePaper() {
      this.commit('enemyModule/hidePaper', null, { root: true })
    },
  }
}

export default enemyModule
