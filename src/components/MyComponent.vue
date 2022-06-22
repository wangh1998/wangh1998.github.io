<!--
 * @Description: 
 * @Date: 2022-06-20 15:40:27
 * @LastEditTime: 2022-06-20 16:16:00
 * @FilePath: /vue2-project/src/components/MyComponent.vue
-->
<template>
  <div>
    <div>{{ value }}</div>
    <button @click="$emit('input', value + 1)">+1</button>
    <button @click="reverse">取反</button>
  </div>
</template>
<script>
export default {
  props: ['value', 'flag'],
  data() {
    return {};
  },
  methods: {
    reverse() {
      // this.flag = !this.flag; 错误的
      this.$emit('handelReverse', !this.flag);
    },
  },
};
</script>

