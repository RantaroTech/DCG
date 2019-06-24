<template>
  <div id="wrapper">
    <div id="base_area">
      <!-- 対戦相手サイド -->
      <BaseStatus
        :hp="setStateHp(enemyModule.user_status_data.hp)"
        style="position: absolute;top: 10px;left: 165px;background:#ff3e3e;"
      ></BaseStatus>
      <Character :character_id="2" style="position: absolute;top: 0;left: 0;"></Character>

      <div class="janken_area">
        <div v-if="this.show_enemy_card">
          <Card
            class="enemy_card_pos"
            :class="{enemy_aiko:this.show_aiko, enemy_attack:this.user_round_lose,enemy_damage:this.user_round_win}"
            v-bind:card_data="enemyModule.card_data.rock"
            v-if="this.enemy_choice_card_type == 'rock'"
          ></Card>
          <Card
            class="enemy_card_pos"
            :class="{enemy_aiko:this.show_aiko, enemy_attack:this.user_round_lose,enemy_damage:this.user_round_win}"
            v-bind:card_data="enemyModule.card_data.scissors"
            v-if="this.enemy_choice_card_type == 'scissors'"
          ></Card>
          <Card
            class="enemy_card_pos"
            :class="{enemy_aiko:this.show_aiko, enemy_attack:this.user_round_lose,enemy_damage:this.user_round_win}"
            v-bind:card_data="enemyModule.card_data.paper"
            v-if="this.enemy_choice_card_type == 'paper'"
          ></Card>
        </div>
        <!-- 自分のじゃんけんカードエリア -->
        <div
          v-if="userModule.card_data.rock.is_show"
          class="user_card"
          @click="tapCard(userModule.card_data.rock.name)"
        >
          <Card
            v-bind:card_data="userModule.card_data.rock"
            v-show="userModule.card_data.rock.is_show"
            :class="{user_attack:this.user_round_win,user_aiko:this.show_aiko,user_damage:this.user_round_lose}"
          ></Card>
        </div>

        <div
          v-if="userModule.card_data.scissors.is_show"
          class="user_card"
          @click="tapCard(userModule.card_data.scissors.name)"
        >
          <Card
            v-bind:card_data="userModule.card_data.scissors"
            v-show="userModule.card_data.scissors.is_show"
            :class="{user_attack:this.user_round_win,user_aiko:this.show_aiko,user_damage:this.user_round_lose}"
          ></Card>
        </div>

        <div
          class="user_card"
          v-if="userModule.card_data.paper.is_show"
          @click="tapCard(userModule.card_data.paper.name)"
        >
          <Card
            v-bind:card_data="userModule.card_data.paper"
            v-show="userModule.card_data.paper.is_show"
            :class="{user_attack:this.user_round_win,user_aiko:this.show_aiko,user_damage:this.user_round_lose}"
          ></Card>
        </div>
      </div>

      <!-- 自分サイド -->
      <BaseStatus
        :hp="setStateHp(userModule.user_status_data.hp)"
        style="position: absolute;bottom: 10px;left: 10px;"
      ></BaseStatus>
      <div @click="allReseet()">
        <Character :character_id="1" style="position: absolute;bottom: 0;left: 245px;">
          <div v-if="this.user_round_win" class="serect_text_l_to_r aiko_label">いいぞ！</div>
          <div v-if="this.show_aiko" class="serect_text_l_to_r aiko_label">あいこだ</div>
          <div v-if="this.user_round_lose" class="serect_text_l_to_r aiko_label">まずい…</div>
          <div class="serect_text_r_to_l red" v-show="userModule.card_data.rock.is_choice">グーを選択</div>
          <div
            class="serect_text_r_to_l green"
            v-show="userModule.card_data.scissors.is_choice"
          >チョキを選択</div>
          <div class="serect_text_r_to_l yellow" v-show="userModule.card_data.paper.is_choice">パーを選択</div>
        </Character>
      </div>
    </div>
  </div>
</template>

<script>
import BaseStatus from "@/components/1_atoms/BaseStatus";
import Character from "@/components/1_atoms/Character";
import Card from "@/components/2_molecules/card";
import store from "@/store/store";
import { mapState } from "vuex";
import Vue from "vue";

export default {
  components: {
    BaseStatus,
    Character,
    Card,
    store
  },
  computed: {
    ...mapState(["userModule", "enemyModule"])
  },
  created() {},
  data() {
    return {
      card_type: ["rock", "scissors", "paper"],
      enemy_choice_card_type: null,
      is_user_choiced: false,
      show_enemy_card: false,
      user_round_win: false,
      user_round_lose: false,
      show_aiko: false
    };
  },
  methods: {
    setStateHp: function(hp) {
      if (hp <= 0) {
        return 0;
      }
      return hp;
    },
    tapCard: function(type) {
      if (this.is_user_choiced) {
        return;
      }
      console.info(this.$EventBus);
      this.is_user_choiced = true;
      console.info(this.$store);
      this.setShowCard(type);
      this.choiceCard(type);
      this.randamChoice();
      this.show_enemy_card = true;
      this.roundReset();
    },
    randamChoice: function() {
      const ran = Math.random();
      if (ran <= 1 / 3) {
        this.enemy_choice_card_type = "rock";
      } else if (2 / 3 > ran > 1 / 3) {
        this.enemy_choice_card_type = "scissors";
      } else if (ran >= 2 / 3) {
        this.enemy_choice_card_type = "paper";
      }
    },
    choiceRock: function() {
      this.$nextTick(() => {
        if (this.enemy_choice_card_type === "rock") {
          this.show_aiko = true;
          this.$store.dispatch("userModule/setChangeHp", 300);
          this.$store.dispatch("enemyModule/setChangeHp", 300);
        } else if (this.enemy_choice_card_type === "scissors") {
          this.user_round_win = true;
          this.$store.dispatch(
            "enemyModule/setChangeHp",
            this.userModule.card_data.rock.atack
          );
        } else if (this.enemy_choice_card_type === "paper") {
          this.user_round_lose = true;
          this.$store.dispatch(
            "userModule/setChangeHp",
            this.enemyModule.card_data.paper.atack
          );
        }
      });
    },
    choiceScissors: function() {
      this.$nextTick(() => {
        if (this.enemy_choice_card_type === "rock") {
          this.user_round_lose = true;
          this.$store.dispatch(
            "userModule/setChangeHp",
            this.enemyModule.card_data.rock.atack
          );
        } else if (this.enemy_choice_card_type === "scissors") {
          this.show_aiko = true;
          this.$store.dispatch("userModule/setChangeHp", 300);
          this.$store.dispatch("enemyModule/setChangeHp", 300);
        } else if (this.enemy_choice_card_type === "paper") {
          this.user_round_win = true;
          this.$store.dispatch(
            "enemyModule/setChangeHp",
            this.userModule.card_data.scissors.atack
          );
        }
      });
    },
    choicePaper: function() {
      this.$nextTick(() => {
        if (this.enemy_choice_card_type === "rock") {
          this.user_round_win = true;
          this.$store.dispatch(
            "enemyModule/setChangeHp",
            this.userModule.card_data.paper.atack
          );
        } else if (this.enemy_choice_card_type === "scissors") {
          this.user_round_lose = true;
          this.$store.dispatch(
            "userModule/setChangeHp",
            this.enemyModule.card_data.scissors.atack
          );
        } else if (this.enemy_choice_card_type === "paper") {
          this.show_aiko = true;
          this.$store.dispatch("userModule/setChangeHp", 300);
          this.$store.dispatch("enemyModule/setChangeHp", 300);
        }
      });
    },
    choiceCard: function(type) {
      if (type === "rock") {
        this.$store.dispatch("userModule/setChoiceRock");
        this.choiceRock();
      } else if (type === "scissors") {
        this.$store.dispatch("userModule/setChoiceScissors");
        this.choiceScissors();
      } else if (type === "paper") {
        this.$store.dispatch("userModule/setChoicePaper");
        this.choicePaper();
      }
    },
    setShowCard: function(type) {
      if (type !== "rock") {
        this.$store.dispatch("userModule/setHideRock");
      }
      if (type !== "scissors") {
        this.$store.dispatch("userModule/setHideScissors");
      }
      if (type !== "paper") {
        this.$store.dispatch("userModule/setHidePaper");
      }
    },
    roundReset: function() {
      this.countDown = setTimeout(this.allReseet, 2000);
    },
    allReseet: function() {
      this.enemy_choice_card_type = null;
      this.show_enemy_card = false;
      this.user_round_win = false;
      this.user_round_lose = false;
      this.show_aiko = false;
      this.is_user_choiced = false;
      clearInterval(this.countDown);
      this.$store.dispatch("userModule/roundEndCard");
      if (
        this.enemyModule.user_status_data.hp <= 0 &&
        this.userModule.user_status_data.hp <= 0
      ) {
        this.$router.push("resultDraw");
      }
      if (this.enemyModule.user_status_data.hp <= 0) {
        this.$router.push("resultWin");
      }
      if (this.userModule.user_status_data.hp <= 0) {
        this.$router.push("resultLose");
      }
    }
  }
};
</script>

<style scoped>
#wrapper {
  position: relative;
  height: 100%;
}
#wrapper:before {
  content: "";
  display: block;
  padding-top: 178%;
  /* padding-top: 100vh; 4:3の比率の場合 100% / 4 *3 1136/640 = 1.78 */
  background-image: url("../../../assets/img/ui/bg.jpg");
  background-size: 120%;
  background-repeat: no-repeat;
}

#base_area {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #3838a291;
}
.janken_area {
  width: 100%;
  height: 390px;
  position: absolute;
  top: 125px;
}

.enemy_card_pos {
  position: absolute;
  top: 0px;
  left: 110px;
}

.enemy_attack {
  -webkit-animation: enemyAttackAnime 1s linear 0s;
  -moz-animation: enemyAttackAnime 1s linear 0s;
  -o-animation: enemyAttackAnime 1s linear 0s;
  -ms-animation: enemyAttackAnime 1s linear 0s;
  animation: enemyAttackAnime 1s linear 0s;
  animation-fill-mode: forwards;
}
@keyframes enemyAttackAnime {
  0% {
    transform: scale(1);
    top: 0px;
    left: 110px;
  }
  70% {
    transform: scale(1.3);
    top: -50px;
    left: 110px;
  }
  80% {
    transform: scale(1.2);
    top: 250px;
    left: 110px;
  }
  100% {
    transform: scale(1.2);
    top: 0px;
    left: 110px;
  }
}
.enemy_damage {
  -webkit-animation: enemyDamageAnime 1s linear 0s;
  -moz-animation: enemyDamageAnime 1s linear 0s;
  -o-animation: enemyDamageAnime 1s linear 0s;
  -ms-animation: enemyDamageAnime 1s linear 0s;
  animation: enemyDamageAnime 1s linear 0s;
  animation-fill-mode: forwards;
}
@keyframes enemyDamageAnime {
  0% {
    transform: scale(1);
    top: -20px;
    left: 110px;
  }
  70% {
    transform: scale(0.9);
    top: -50px;
    left: 110px;
  }
  80% {
    transform: scale(0.8);
    top: -50px;
    left: 110px;
  }
  100% {
    transform: scale(0.9);
    top: -50px;
    left: 110px;
  }
}
.user_damage {
  -webkit-animation: userDamageAnime 1s linear 0s;
  -moz-animation: userDamageAnime 1s linear 0s;
  -o-animation: userDamageAnime 1s linear 0s;
  -ms-animation: userDamageAnime 1s linear 0s;
  animation: userDamageAnime 1s linear 0s;
  animation-fill-mode: forwards;
}
@keyframes userDamageAnime {
  0% {
    transform: scale(1);
    top: 200px;
    left: 110px;
  }
  70% {
    transform: scale(0.9);
    top: 280px;
    left: 110px;
  }
  80% {
    transform: scale(0.7);
    top: 280px;
    left: 110px;
  }
  100% {
    transform: scale(0.9);
    top: 280px;
    left: 110px;
  }
}
.user_aiko {
  -webkit-animation: userAikoAnime 1s linear 0s;
  -moz-animation: userAikoAnime 1s linear 0s;
  -o-animation: userAikoAnime 1s linear 0s;
  -ms-animation: userAikoAnime 1s linear 0s;
  animation: userAikoAnime 1s linear 0s;
  animation-fill-mode: forwards;
}
@keyframes userAikoAnime {
  0% {
    transform: scale(1);
    top: 200px;
    left: 110px;
  }
  70% {
    transform: scale(1.3);
    top: 250px;
    left: 110px;
  }
  80% {
    transform: scale(1.2);
    top: 100px;
    left: 110px;
  }
  100% {
    transform: scale(1.2);
    top: 250px;
    left: 110px;
  }
}
.enemy_aiko {
  -webkit-animation: enemyAikoAnime 1s linear 0s;
  -moz-animation: enemyAikoAnime 1s linear 0s;
  -o-animation: enemyAikoAnime 1s linear 0s;
  -ms-animation: enemyAikoAnime 1s linear 0s;
  animation: enemyAikoAnime 1s linear 0s;
  animation-fill-mode: forwards;
}
@keyframes enemyAikoAnime {
  0% {
    transform: scale(1);
    top: 0px;
    left: 110px;
  }
  70% {
    transform: scale(1.3);
    top: -20px;
    left: 110px;
  }
  80% {
    transform: scale(1.2);
    top: 70px;
    left: 110px;
  }
  100% {
    transform: scale(1.2);
    top: 0px;
    left: 110px;
  }
}
.red {
  background: red;
}
.green {
  background: green;
}
.yellow {
  background: blue;
}

@keyframes userAttackAnime {
  0% {
    transform: scale(1);
    top: 200px;
    left: 110px;
  }
  70% {
    transform: scale(1.3);
    top: 300px;
    left: 110px;
  }
  80% {
    transform: scale(1.2);
    top: 0px;
    left: 110px;
  }
  100% {
    transform: scale(1.2);
    top: 300px;
    left: 110px;
  }
}

@keyframes RightToRight {
  0% {
    opacity: 0;
    transform: translateX(200px);
  }
  20% {
    opacity: 1;
    transform: translateX(0);
  }
  90% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
  }
}
@keyframes RightToLeft {
  0% {
    opacity: 0;
    transform: translateX(-200px);
  }
  20% {
    opacity: 1;
    transform: translateX(0);
  }
  90% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
  }
}
.serect_text_r_to_l {
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-name: RightToLeft;
  animation-fill-mode: forwards;
}
.serect_text_l_to_r {
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-name: RightToRight;
  animation-fill-mode: forwards;
}

.serect_text_l_to_r {
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-name: RightToRight;
  animation-fill-mode: forwards;
}

.user_card .rock {
  position: absolute;
  top: 30px;
  left: 110px;
}
.user_card .user_attack {
  -webkit-animation: userAttackAnime 1s linear 0s;
  -moz-animation: userAttackAnime 1s linear 0s;
  -o-animation: userAttackAnime 1s linear 0s;
  -ms-animation: userAttackAnime 1s linear 0s;
  animation: userAttackAnime 1s linear 0s;
  animation-fill-mode: forwards;
}
.user_card {
  animation-name: fade_in;
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-delay: 0s;
  /* animation-iteration-count: 1; */
  animation-direction: normal;
  animation-fill-mode: forwards;
}
@keyframes fade_in {
  0% {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.serect_text_r_to_l {
  width: 220px;
  border: solid 2px black;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  position: absolute;
  bottom: 120px;
  right: 0;
}

.user_card .scissors {
  position: absolute;
  top: 210px;
  left: 20px;
}

.user_card .paper {
  position: absolute;
  top: 210px;
  left: 195px;
}
.aiko_label {
  position: absolute;
  top: 45%;
  left: -40px;
  width: 40vw;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  background: gold;
}
.end_game {
  width: 100%;
  height: 100%;
  background: grey;
}
</style>
