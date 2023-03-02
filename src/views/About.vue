<!--
 * @Description: 
 * @Date: 2022-06-22 09:07:52
 * @LastEditTime: 2023-01-11 17:23:34
 * @FilePath: /wangh1998.github.io/src/views/About.vue
-->
<template>
  <div class="about">
    <template v-if="flag">
      <label>Username</label>
      <input placeholder="Enter your username" />
      <div @click="toggle">按钮</div>
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" />
      <div @click="aaa">Email按钮</div>
    </template>
    <p @click="toggle">按钮</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
    };
  },
  methods: {
    toggle() {
      this.flag = !this.flag;
    },
    aaa() {
      console.log(123);
    },
    bbb() {
      console.log(321);
    },
  },
};
</script>