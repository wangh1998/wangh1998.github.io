<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    {{ $store.state.User.userInfo.age }} -->

    <!-- <my-component v-model="num"></my-component> -->

    <my-component
      :value="num"
      @input="(value) => (this.num = value)"
    ></my-component>

    <Children :flag="flag" @handelReverse="handelReverse"></Children>

    <!-- v-bind:value="num" -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import MyComponent from '@/components/MyComponent.vue';

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    MyComponent,
  },
  data() {
    return {
      num: 2, // 父组件
    };
  },
  methods: {
    handelReverse(value) {
      this.flag = value;
    },
  },
};
</script>
