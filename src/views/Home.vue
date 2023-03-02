<template>
  <div class="home">
    <input type="text" v-model="value" style="width: 600px" />
    <button @click="encrypt">加密</button>
    <button @click="decrypt">解密复杂类型</button>
    <button @click="decryptSim">解密简单类型</button>
    <button @click="init">初始化</button>
    <div v-show="!isEncrypt">
      <div>解密结果：</div>
      <button @click="onCopy">复制</button>
      <json-viewer :value="result" :expanded="true"></json-viewer>
    </div>
    <div v-show="isEncrypt">
      <div>
        加密结果：<button @click="onCopy">复制</button> &nbsp;{{ result }}
      </div>
    </div>

    <!-- 一些css效果 -->
    <div class="flex">
      <span class="demo-item">玻璃效果（我喜欢桔梗）</span>
      <div class="glass">
        <div class="glass-effect" v-draggable></div>
        <div class="glass-text">
          犬夜叉，日本漫画《犬夜叉》及其衍生作品中的男主角。西国犬妖斗牙王与人类公主十六夜之子，人类与妖怪所生的半妖，因自己半妖的身份从小受人排挤，为此想要得到四魂之玉的力量成为完全的妖怪。与同父异母所生的兄长杀生丸，并没有兄弟之情。在跟日暮戈薇、弥勒、珊瑚、七宝等同伴一起收集四魂之玉碎片的过程中不断成长，最终成为了一个勇敢坚强而又温柔善良的半妖，并跟朝夕相处相恋的现代少女日暮戈薇共同结束了四魂之玉的命运轮回，走到了一起，和大家一起共同迎接未来。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SM4Util from 'gm-crypt';
import JsonViewer from 'vue-json-viewer';
const SM4_KEY = 'AKV4OR5HFU4XM6D7';
const encryptSM4 = (text) => {
  const sm4Config = {
    //配置sm4参数
    key: SM4_KEY, // 这里这个key值是跟后端要的
    mode: 'cbc', // 加密的方式有两种，ecb和cbc两种，也是看后端如何定义的，不过要是cbc的话下面还要加一个iv的参数，ecb不用
    cipherType: 'base64',
  };
  const s4 = new SM4Util.sm4({ ...sm4Config });
  //  初始化加密函数的变量，也叫初始向量。
  // （本来应该动态生成的，由于项目没有严格的加密要求，直接写死一个）
  s4.iv = '2346853468247843'; // iv是initialization vector的意思，就是加密的初始话矢量
  return s4.encrypt(text);
};
const decryptSM4 = (text) => {
  const sm4Config = {
    //配置sm4参数
    key: SM4_KEY, // 这里这个key值是跟后端要的
    mode: 'cbc', // 加密的方式有两种，ecb和cbc两种，也是看后端如何定义的，不过要是cbc的话下面还要加一个iv的参数，ecb不用
    cipherType: 'base64',
  };
  const s4 = new SM4Util.sm4({ ...sm4Config });
  s4.iv = '2346853468247843';
  return s4.decrypt(text);
};
export default {
  name: 'Home',
  components: {
    JsonViewer,
  },
  data() {
    return {
      value: '',
      result: '',
      isEncrypt: false, // 加密
    };
  },
  methods: {
    init() {
      this.value = '';
      this.result = '';
      this.isEncrypt = false;
    },
    encrypt() {
      this.isEncrypt = true;
      this.result = encryptSM4(this.value);
    },
    decrypt() {
      this.isEncrypt = false;
      this.result = JSON.parse(decryptSM4(this.value));
    },
    decryptSim() {
      this.isEncrypt = false;
      this.result = decryptSM4(this.value);
    },
    onCopy() {
      this.$copyText(JSON.stringify(this.result)).then(
        function () {
          alert('复制成功!');
        },
        function () {
          alert('复制失败!');
        }
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.flex {
  display: flex;
  flex-direction: column;
  .demo-item {
    margin: 0 auto;
    margin-bottom: 20px;
    text-align: left;
    color: #000;
    position: relative;
    cursor: pointer;
    &::after {
      content: '';
      position: absolute;
      transform: scaleX(0);
      bottom: -5px;
      height: 2px;
      background: #4e7bf4;
      left: 0;
      width: 100%;
      transition: transform 0.3s ease-in-out;
      transform-origin: bottom right;
    }
    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
  .glass {
    width: 80%;
    margin: 0 auto;
    position: relative;
    border: 2px dotted #000;
    padding: 15px;
    border-radius: 5px;
    user-select: none;
    & .glass-text {
      font-size: 18px;
      line-height: 30px;
      font-family: Helvetica, Arial, sans-serif;
      text-transform: capitalize;
      // text-shadow: 0px 0px 0px #fff, 1px 1px 2px #000;
      font-weight: normal;
      letter-spacing: 2px;
    }
    & .glass-effect {
      position: absolute;
      width: 20%;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      height: 28px;
      -webkit-backdrop-filter: blur(6.2px);
      backdrop-filter: blur(1px);
      background: rgba(255, 255, 255, 0.4);
      border-radius: 30px;
      border: 2px solid #7807281a;
    }
  }
}
</style>