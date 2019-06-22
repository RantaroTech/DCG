<template>
  <div id="wrapper">
    <div id="base_area">
      <!-- 対戦相手サイド -->
      <BaseStatus style="position: absolute;top: 10px;right: 10px;background:#ff3e3e;"></BaseStatus>
      <Character :character_id="2" style="position: absolute;top: 0;left: 0;"></Character>

      <div class="janken_area">
        <!-- 自分のじゃんけんカードエリア -->
        <div class="card" @click="tapCard(card_data.rock.name)">
          <Card
            v-bind:card_data="this.card_data.rock"
            v-show="this.card_data.rock.is_show"
            :class="{rock_choice:this.card_data.rock.is_choice}"
          ></Card>
        </div>

        <div class="card" v-if="this.card_data.scissors" @click="tapCard(card_data.scissors.name)">
          <Card
            v-bind:card_data="this.card_data.scissors"
            v-show="this.card_data.scissors.is_show"
            :class="{rock_choice:this.card_data.scissors.is_choice}"
          ></Card>
        </div>

        <div class="card" v-if="this.card_data.paper" @click="tapCard(card_data.paper.name)">
          <Card
            v-bind:card_data="this.card_data.paper"
            v-show="this.card_data.paper.is_show"
            :class="{rock_choice:this.card_data.paper.is_choice}"
          ></Card>
        </div>
      </div>

      <!-- 自分サイド -->
      <BaseStatus style="position: absolute;bottom: 10px;left: 10px;"></BaseStatus>
      <Character :character_id="1" style="position: absolute;bottom: 0;right: 0;">
        <div class="serect_text red" v-show="this.card_data.rock.is_choice">グー✊を選択</div>
        <div class="serect_text green" v-show="this.card_data.scissors.is_choice">チョキ✌️を選択</div>
        <div class="serect_text yellow" v-show="this.card_data.paper.is_choice">パー✋を選択</div>
      </Character>
    </div>
  </div>
</template>

<script>
import BaseStatus from "@/components/1_atoms/BaseStatus";
import Character from "@/components/1_atoms/Character";
import Card from "@/components/2_molecules/card";
import store from "@/store/store";

export default {
  components: {
    BaseStatus,
    Character,
    Card,
    store
  },
  data() {
    return {
      card_data: {
        rock: { name: "rock", atack: 1000, is_show: true, is_choice: false },
        scissors: {
          name: "scissors",
          atack: 500,
          is_show: true,
          is_choice: false
        },
        paper: { name: "paper", atack: 300, is_show: true, is_choice: false }
      },
      card_type: ["rock", "scissors", "paper"]
    };
  },
  methods: {
    tapCard: function(type) {
      console.info(this.$store);
      console.info(this.$store.state);
      this.setShowCard(type);
      this.choiceCard(type);
    },
    choiceCard: function(type) {
      if (type === "rock") {
        console.info("グーだ！");
        this.card_data.rock.is_choice = true;
      }
      if (type === "scissors") {
        console.info("チョキだ！");
        this.card_data.scissors.is_choice = true;
      }
      if (type === "paper") {
        console.info("パーだ！");
        this.card_data.paper.is_choice = true;
      }
    },
    setShowCard: function(type) {
      if (type !== "rock") {
        console.info("グーじゃない");
        this.card_data.rock.is_show = false;
        this.card_data.rock.is_choice = false;
      }
      if (type !== "scissors") {
        console.info("チョキじゃない");
        this.card_data.scissors.is_show = false;
        this.card_data.scissors.is_choice = false;
      }
      if (type !== "paper") {
        console.info("パーじゃない");
        this.card_data.paper.is_show = false;
        this.card_data.paper.is_choice = false;
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
  /* margin-top: -2%; */
  padding-top: 178%; /* 4:3の比率の場合 100% / 4 *3 1136/640 = 1.78 */
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
  background: #4caf5099;
}

.red {
  background: red;
}
.green {
  background: green;
}
.yellow {
  background: yellow;
}

@keyframes ImgAnime {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(1.2);
  }
  99% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1.2);
    top: 210px;
    left: 120px;
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

.rock {
  position: absolute;
  top: 30px;
  left: 110px;
}
.card .rock_choice {
  -webkit-animation: ImgAnime 1s linear 0s;
  -moz-animation: ImgAnime 1s linear 0s;
  -o-animation: ImgAnime 1s linear 0s;
  -ms-animation: ImgAnime 1s linear 0s;
  animation: ImgAnime 1s linear 0s;
  animation-fill-mode: forwards;
}
.serect_text {
  width: 220px;
  /* background: dodgerblue; */
  border: solid 2px black;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  right: 0;
}

.scissors {
  position: absolute;
  top: 210px;
  left: 20px;
}

.paper {
  position: absolute;
  top: 210px;
  left: 195px;
}
</style>
