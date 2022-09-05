<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    {{ $store.state.User.userInfo.age }} -->

    <!-- <my-component v-model="num"></my-component> -->

    <!-- <my-component
      :value="num"
      @input="(value) => (this.num = value)"
    ></my-component>

    <Children :flag="flag" @handelReverse="handelReverse"></Children> -->

    <!-- v-bind:value="num" -->
    <input type="text" v-model="value" style="width: 600px" />
    <button @click="encrypt">加密</button>
    <button @click="decrypt">解密</button>
    <div>结果：{{ result }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// import MyComponent from '@/components/MyComponent.vue';
import SM4Util from 'gm-crypt';
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
    // HelloWorld,
    // MyComponent,
  },
  data() {
    return {
      // num: 2, // 父组件
      value: '',
      result: '',
    };
  },
  methods: {
    // handelReverse(value) {
    //   this.flag = value;
    // },
    encrypt() {
      this.result = encryptSM4(this.value);
    },
    decrypt() {
      this.result = decryptSM4(this.value);
    },
  },
};
</script>
