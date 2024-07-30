<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { ref } from 'vue'
import * as THREE from "three";
import Globe from "vanta/src/vanta.globe";

const Area = ref(null);
let vantaEffect: { destroy: () => void } | null = null;

onMounted(() => {
  vantaEffect = Globe({
    el: Area.value,
    THREE: THREE,
    vertexColors: true,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x1e37a9,
    color2: 0x8597a7,
    backgroundColor: 0xe1129
  });
});

onUnmounted(() => {
  if (vantaEffect) {
    vantaEffect.destroy();
  }
});


</script>
<template>
  <div class="whole" ref="Area">
    <div class="content">
      <div class="nav" style="display: flex;flex-direction: row;width: 100%;">
        <div class="choice1">
          <span class="iconfont icon-manager"></span>
          <a href="#">首页</a>
        </div>
        <div class="choice2">
          <span class="iconfont icon-guanli"></span>
          <a href="#">更多</a>
        </div>
      </div>
      <div style="margin-top: 200px;">
        <h1 style="font-family: Georgia, 'Times New Roman', Times, serif;
      font-size: 50px;
      font-weight: 700px;
      margin-left: 30px;
      background-image: linear-gradient(90deg,skyblue,#008000);
      background-size: 100% 100%;
      -webkit-background-clip: text;
      -webkit-text-fill-color:transparent; 
      "> ‘苏’醒世界</h1>
        <h2 style="color:skyblue;">勇敢的人先享受世界,做个追风少年吧！</h2>
        <div class="bottom">
          <el-link type="primary" style="font-size: 20px;" @click="$router.push({ name: 'register' })">开始探索</el-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>