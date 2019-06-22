<template>
  <div id="wrapper">
    <div id="base_area">
      <!-- 対戦相手サイド -->
      <BaseStatus
        :hp="setStateHp(enemyModule.user_status_data.hp)"
        style="position: absolute;top: 10px;right: 10px;background:#ff3e3e;"
      >
        <div v-if="this.enemy_choice_card_type ==='rock'">✊</div>
        <div v-if="this.enemy_choice_card_type ==='scissors'">✌️</div>
        <div v-if="this.enemy_choice_card_type ==='paper'">🖐</div>
      </BaseStatus>
      <Character :character_id="2" style="position: absolute;top: 0;left: 0;"></Character>

      <div v-if="this.show_enemy_card" class="enemy_card_pos">
        <Card
          v-bind:card_data="enemyModule.card_data.rock"
          v-if="this.enemy_choice_card_type == 'rock'"
        ></Card>
        <Card
          v-bind:card_data="enemyModule.card_data.scissors"
          v-if="this.enemy_choice_card_type == 'scissors'"
        ></Card>
        <Card
          v-bind:card_data="enemyModule.card_data.paper"
          v-if="this.enemy_choice_card_type == 'paper'"
        ></Card>
      </div>
      <div v-if="this.user_round_win" class="aiko_label">いいぞ！</div>
      <div v-if="this.show_aiko_label" class="aiko_label">あいこだ</div>
      <div v-if="this.user_round_lose" class="aiko_label">まずい…</div>

      <div class="janken_area">
        <!-- 自分のじゃんけんカードエリア -->
        <div class="user_card" @click="tapCard(userModule.card_data.rock.name)">
          <Card
            v-bind:card_data="userModule.card_data.rock"
            v-show="userModule.card_data.rock.is_show"
            :class="{rock_choice:userModule.card_data.rock.is_choice}"
          ></Card>
        </div>

        <div
          class="user_card"
          v-if="userModule.card_data.scissors"
          @click="tapCard(userModule.card_data.scissors.name)"
        >
          <Card
            v-bind:card_data="userModule.card_data.scissors"
            v-show="userModule.card_data.scissors.is_show"
            :class="{rock_choice:userModule.card_data.scissors.is_choice}"
          ></Card>
        </div>

        <div
          class="user_card"
          v-if="userModule.card_data.paper"
          @click="tapCard(userModule.card_data.paper.name)"
        >
          <Card
            v-bind:card_data="userModule.card_data.paper"
            v-show="userModule.card_data.paper.is_show"
            :class="{rock_choice:userModule.card_data.paper.is_choice}"
          ></Card>
        </div>
      </div>

      <!-- 自分サイド -->
      <BaseStatus
        :hp="setStateHp(userModule.user_status_data.hp)"
        style="position: absolute;bottom: 10px;left: 10px;"
      >{{this.enemy_choice_card_type}}</BaseStatus>
      <div @click="allReseet()">
        <Character :character_id="1" style="position: absolute;bottom: 0;right: 0;">
          <div class="serect_text red" v-show="userModule.card_data.rock.is_choice">グー✊を選択</div>
          <div class="serect_text green" v-show="userModule.card_data.scissors.is_choice">チョキ✌️を選択</div>
          <div class="serect_text yellow" v-show="userModule.card_data.paper.is_choice">パー✋を選択</div>
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
  data() {
    return {
      card_type: ["rock", "scissors", "paper"],
      enemy_choice_card_type: null,
      show_enemy_card: false,
      user_round_win: false,
      user_round_lose: false,
      show_aiko_label: false
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
          this.show_aiko_label = true;
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
          this.show_aiko_label = true;
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
          this.show_aiko_label = true;
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
      setTimeout(this.allReseet, 3000);
    },
    allReseet: function() {
      this.enemy_choice_card_type = null;
      this.show_enemy_card = false;
      this.user_round_win = false;
      this.user_round_lose = false;
      this.show_aiko_label = false;
      this.$store.dispatch("userModule/roundEndCard");
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
  /* padding-top: 178%;  */
  padding-top: 100vh; /* 4:3の比率の場合 100% / 4 *3 1136/640 = 1.78 */
  background-image: url("../../../assets/bg.jpg");
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
  /* background: #4caf5099; */
}

.enemy_card_pos {
  position: absolute;
  top: 60px;
  left: 110px;
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

@keyframes ImgAnime {
  0% {
    transform: scale(1);
    top: 200px;
    left: 110px;
  }
  100% {
    transform: scale(1.2);
    top: 300px;
    left: 110px;
  }
}

/* 「RightToLeft」の動作内容 */
@keyframes RightToLeft {
  0% {
    opacity: 0; /* 透明 */
    transform: translateX(-200px); /* X軸方向に50px */
  }
  20% {
    opacity: 1; /* 不透明 */
    transform: translateX(0);
  }
  90% {
    opacity: 1; /* 不透明 */
    transform: translateX(0);
  }
  100% {
    opacity: 0; /* 不透明 */
    /* transform: translateX(0); */
  }
}

/* 「RightToLeft」を適用する箇所 */
.serect_text {
  animation-duration: 2s; /* アニメーション時間 */
  animation-timing-function: ease-out;
  animation-name: RightToLeft; /* アニメーション名 */
  animation-fill-mode: forwards;
}

.user_card .rock {
  position: absolute;
  top: 30px;
  left: 110px;
}
.user_card .rock_choice {
  -webkit-animation: ImgAnime 0.1s linear 0s;
  -moz-animation: ImgAnime 0.1s linear 0s;
  -o-animation: ImgAnime 0.1s linear 0s;
  -ms-animation: ImgAnime 0.1s linear 0s;
  animation: ImgAnime 0.1s linear 0s;
  animation-fill-mode: forwards;
}
.serect_text {
  width: 220px;
  border: solid 2px black;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  position: absolute;
  bottom: 0;
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
  left: 30vw;
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
