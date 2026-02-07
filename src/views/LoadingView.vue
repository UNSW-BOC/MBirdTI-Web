<template>
  <div class="loading-container">
    <div class="header">
      <button class="back-button" @click="$router.back()">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="#766630" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      
      <!-- 语言切换按钮 (可选，如果Loading页也允许切换的话) -->
      <!-- <LanguageSwitch /> -->
    </div>

    <div class="content">
      <div class="bird-wrapper">
        <img 
          src="@/assets/images/loadingBird/LoadingBirdActiave.svg" 
          alt="Loading Bird" 
          class="loading-bird"
        />
      </div>
      
      <h2 class="title">{{ appStore.language === 'zh' ? '正在展开你的鸟类人格' : 'Unfolding your bird personality' }}</h2>
      <p class="subtitle">{{ appStore.language === 'zh' ? '请稍候片刻...' : 'Please wait a moment...' }}</p>
    </div>

    <div class="footer">
      UNSW Student Life x UNSW BOC
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAppStore } from '@/stores/app'
// import LanguageSwitch from '@/components/LanguageSwitch.vue'

const router = useRouter()
const route = useRoute()
const appStore = useAppStore()

onMounted(() => {
  // 随机延迟 0ms - 1000ms (最迟1秒)
  const delay = Math.random() * 1000
  
  setTimeout(() => {
    // Get params from current route query and pass them to result view
    const { type, pIE, pSN, pTF, pJP } = route.query
    
    router.push({
      path: '/result',
      query: {
        type: type || 'ISTJ', // Fallback
        pIE,
        pSN,
        pTF,
        pJP
      }
    })
    console.log('Loading finished, ready to navigate')
  }, delay)
})
</script>

<style scoped>
.loading-container {
  width: 100%;
  height: 100vh;
  background-color: #F6F1E5;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.header {
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 20px;
}

.bird-wrapper {
  margin-bottom: 24px;
}

.loading-bird {
  width: 60px; /* 根据实际 SVG 大小调整 */
  height: auto;
  animation: bounce 2s infinite ease-in-out;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

.title {
  color: #766630;
  text-align: center;
  font-family: Poppins, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 160% */
  margin-bottom: 8px;
}

.subtitle {
  color: #766630;
  text-align: center;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 200% */
}

.footer {
  padding-bottom: 40px;
  text-align: center;
  color: #A6914E;
  font-family: Poppins, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0.48px;
}
</style>
