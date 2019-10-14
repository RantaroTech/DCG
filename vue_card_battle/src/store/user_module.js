// プレイヤーと対戦相手の状態を管理するよ！

const userModule = {
  namespaced: true,
  state() {
    return {
      user_status_data: {
        hp: 3000
      },
      card_data: {
        rock: { name: 'rock', atack: 800, is_show: true, is_choice: false },
        scissors: {
          name: 'scissors',
          atack: 500,
          is_show: true,
          is_choice: false
        },
        paper: { name: 'paper', atack: 600, is_show: true, is_choice: false }
      }
    };
  },
  mutations: {
    changeHp: function (state, num) {
      state.user_status_data.hp -= num;
    },
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
    resetUserHP: function (state) {
      state.user_status_data.hp = 3000;
    }
  },
  actions: {
    setChangeHp: function (state, num) {
      this.commit('userModule/changeHp', num);
    },
    roundEndCard: function () {
      this.commit('userModule/resetUserCard', null, { root: true });
    },
    setChoiceRock() {
      this.commit('userModule/choiceRock', null, { root: true });
    },
    setChoiceScissors() {
      this.commit('userModule/choiceScissors', null, { root: true });
    },
    setChoicePaper() {
      this.commit('userModule/choicePaper', null, { root: true });
    },
    setHideRock() {
      this.commit('userModule/hideRock', null, { root: true });
    },
    setHideScissors() {
      this.commit('userModule/hideScissors', null, { root: true });
    },
    setHidePaper() {
      this.commit('userModule/hidePaper', null, { root: true });
    },
    gameResetHp() {
      this.commit('userModule/resetUserHP', null, { root: true });
    }
  }
};

export default userModule;
