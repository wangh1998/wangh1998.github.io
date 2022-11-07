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
