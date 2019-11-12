<template>
  <div class="title_message">{{inputName}}</div>
</template>
<script>
export default {
  name: 'title-message',
  // 接受父组件的值
  props: {
    inputName: String,
    required: true,
  },
};
</script>
<style lang="scss">
  .title_message {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
    margin-top: 10px;
  }
</style>
