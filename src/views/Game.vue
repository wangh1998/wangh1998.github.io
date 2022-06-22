<!--
 * @Description: 
 * @Date: 2022-06-21 16:01:07
 * @LastEditTime: 2022-06-21 17:28:42
 * @FilePath: /vue2-project/src/views/Game.vue
-->
<template>
  <div class="game-box">
    <div class="button" @click="random">重新发牌</div>
    <div class="player" v-for="(play, index) in players" :key="index">
      <div class="card-list">
        <div class="card-item" v-for="(card, index) in play.cards" :key="card">
          <div
            :class="{
              black: black.includes(card.split('')[0]),
              red: red.includes(card.split('')[0]),
            }"
          >
            {{ card | numberFilter }}
          </div>
          <div
            :class="{
              black: black.includes(card.split('')[0]),
              red: red.includes(card.split('')[0]),
            }"
          >
            {{ card.split('')[0] }}
          </div>
          <div
            :class="{
              black: black.includes(card.split('')[0]),
              red: red.includes(card.split('')[0]),
              'absolute-icon': true,
            }"
            v-if="index === 2"
          >
            {{ card.split('')[0] }}
          </div>
        </div>
      </div>
      <input class="name-info" type="text" v-model="play.name" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Game',
  data() {
    return {
      icon: ['♠', '♥', '♣', '♦'],
      black: ['♠', '♣'],
      red: ['♥', '♦'],
      numbers: [
        'A',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
        'A',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
        'A',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
        'A',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
      ],
      players: [
        {
          name: '玩家一',
          cards: [],
        },
        {
          name: '玩家二',
          cards: [],
        },
        {
          name: '玩家三',
          cards: [],
        },
      ],
    };
  },
  filters: {
    numberFilter(card) {
      const arr = card.split('');
      arr.splice(0, 1);
      return arr.join('');
    },
  },
  created() {
    this.random();
  },
  methods: {
    random() {
      this.numbers = [
        'A',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
        'A',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
        'A',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
        'A',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
      ];
      this.players.forEach((v) => {
        v.cards = [];
        v.cards = [];
        v.cards = [];
      });
      let Arr = [];
      for (let i = 0; i < 9; i++) {
        const randomIcon = this.icon[Math.floor(Math.random() * 4) + 1 - 1];
        const randomNumberIndex = Math.floor(Math.random() * (52 - i)) + 1 - 1;
        const randomNumber = this.numbers.splice(randomNumberIndex, 1)[0];
        const compose = `${randomIcon}${randomNumber}`;
        if (!Arr.includes(compose)) {
          Arr.push(compose);
        } else {
          this.numbers.push(randomNumber);
          i--;
        }
      }
      this.players.forEach((v, i) => {
        v.cards.push(Arr[i]);
        v.cards.push(Arr[i + 3]);
        v.cards.push(Arr[i + 6]);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.game-box {
  font-size: 14px;
  width: 80%;
  margin: 0 auto;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  .button {
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: green;
    border: 1px solid green;
    border-radius: 25px;
    cursor: pointer;
    user-select: none;
  }
  .player {
    width: 350px;
    height: 100%;
    display: flex;
    flex-direction: column;
    & .card-list {
      flex: 1;
      position: relative;
      .card-item {
        width: 260px;
        position: absolute;
        top: 0;
        bottom: 0;
        border: 1px solid #ccc;
        border-right: 0 none;
        font-size: 34px;
        .black {
          color: #000;
        }
        .red {
          color: red;
        }
        .absolute-icon {
          position: absolute;
          left: 50%;
          top: 50%;
          font-size: 100px;
          width: 60px;
          line-height: 60px;
          text-align: center;
          height: 60px;
          transform: translate(-50%, -50%);
        }
      }
      .card-item:nth-child(2) {
        left: 45px;
      }
      .card-item:nth-child(3) {
        left: 90px;
        border-right: 1px solid #ccc;
      }
    }
    & .name-info {
      text-align: center;
      height: 35px;
      line-height: 35px;
      font-size: 18px;
    }
  }
}
</style>