<!--
 * @Author: LiuMeiYu
 * @Date: 2022-05-23 11:09:04
 * @LastEditors: LiuMeiYu
 * @LastEditTime: 2022-05-23 12:42:44
 * @FilePath: \vue3-ts-milky-way\src\views\HomeView.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by yihua, All Rights Reserved. 
-->
<template>
  <div class="home-container">
    <div
      class="star"
      ref="star"
      v-for="(item, index) in starCount"
      :key="index"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "HomeView",
  setup() {
    const starCount = ref(800);
    const starDistance = ref(800);
    const star = ref(null);
    onMounted(() => {
      let starArr: any = star.value;
      starArr &&
        starArr.forEach((item: any) => {
          let speed = 0.2 + Math.random() * 1;
          let distance = starDistance.value + Math.random() * 300;
          item.style.transformOrigin = `0 0 ${distance}px`;
          item.style.transform = `translate3d(0, 0, -${distance}px) 
                                  rotateY(${Math.random() * 360}deg) 
                                  rotateX(${Math.random() * -50}deg) 
                                  scale(${speed}, ${speed})`;
        });
    });
    return { starCount, starDistance, star };
  },
});
</script>
<style lang="less" scoped>
// 动画
@keyframes rotate {
  0% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
  }
  100% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg)
      rotateY(-360deg);
  }
}
.home-container {
  position: absolute;
  left: 50%;
  transform: perspective(500px);
  transform-style: preserve-3d;
  perspective-origin: 50% 100%;
  animation: rotate 90s infinite linear;
  bottom: 0;
}
.star {
  position: absolute;
  width: 2px;
  height: 2px;
  left: 0;
  top: 0;
  background-color: #f7f7b8;
  backface-visibility: visible;
}
</style>
