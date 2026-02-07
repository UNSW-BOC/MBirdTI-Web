<script setup lang="ts">
import { useRouter } from 'vue-router'
import bgUrl from '@/assets/images/bg/which_bird_are_you.png'

const router = useRouter()

function goStart() {
  router.push('/start')
}
</script>

<template>
  <main class="page" :style="{ '--desktop-bg': `url(${bgUrl})` }" @click="goStart">
    <!-- 背景图作为容器的背景，或者一个绝对定位的层 -->
  </main>
</template>

<style scoped>
.page {
  width: 100%;
  height: 100vh; /* 撑满 mobile-frame */
  cursor: pointer;
  background-image: var(--desktop-bg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
</style>
