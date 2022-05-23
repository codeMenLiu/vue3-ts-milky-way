<!--
 * @Author: LiuMeiYu
 * @Date: 2022-05-23 11:09:04
 * @LastEditors: LiuMeiYu
 * @LastEditTime: 2022-05-23 11:35:58
 * @FilePath: \vue3-ts-milky-way\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by yihua, All Rights Reserved. 
-->
<template>
  <router-view />
</template>

<style lang="less">
body {
  background: radial-gradient(
    200% 100% at bottom center,
    #f7f7b6,
    #e96f92,
    #1b2947
  );
  background: radial-gradient(
    220% 105% at top center,
    #1b2947 10%,
    #75517d 40%,
    #e96f92 65%,
    #f7f7b6
  );
  background-attachment: fixed;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
