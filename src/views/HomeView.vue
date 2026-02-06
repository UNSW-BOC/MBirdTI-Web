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
    <div class="phone" :style="{ backgroundImage: `url(${bgUrl})` }"></div>
  </main>
</template>

<style scoped>
/* 📱 手机端 */
.page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  cursor: pointer;

  background: linear-gradient(191deg, #d3eeec 4.31%, #ecf3cb 92.6%), #f8f8f8;
}

/* 手机框 */
.phone {
  width: min(92vw, 390px);
  aspect-ratio: 390 / 844;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 32px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);
}

/* 💻 桌面端 */
@media (min-width: 1024px) {
  .page {
    background-image: var(--desktop-bg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .phone {
    display: none;
  }
}
</style>
