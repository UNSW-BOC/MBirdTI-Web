<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { questions } from '@/data/questions'
import type { Question } from '@/data/questions'
 import { useAppStore } from '@/stores/app' // Add language store

import StepButton from '@/components/button/StepButton.vue'
import OptionButton from '@/components/button/OptionButtion.vue'
import LanguageSwitch from '@/components/LanguageSwitch.vue' // Add LanguageSwitch

const router = useRouter()
const appStore = useAppStore() // Use store
const isZh = computed(() => appStore.language === 'zh')

const currentIndex = ref(0)

/**
 * answers[i] = 第 i 题选择的选项下标
 * -1 表示未选择
 */
const answers = reactive<number[]>(Array(questions.length).fill(-1))

const fallbackQuestion: Question = {
  id: 'fallback',
  titleCn: '',
  titleEn: '',
  options: [],
}

const currentQuestion = computed(() => {
  return questions[currentIndex.value] ?? fallbackQuestion
})

const isFirst = computed(() => currentIndex.value === 0)
const isLast = computed(() => currentIndex.value === questions.length - 1)
const hasSelected = computed(() => answers[currentIndex.value] !== -1)

/** 标题换行 */
const formattedTitle = computed(() => {
  const title = isZh.value ? currentQuestion.value.titleCn : currentQuestion.value.titleEn
  return (title || '').replace(/\n/g, '<br/>')
})

/** 布局：含 image 就走图片 2x2，否则走文字竖向列表 */
const layoutType = computed<'imageGrid' | 'textList'>(() => {
  const hasImage = currentQuestion.value.options.some((o) => o.type === 'image')
  return hasImage ? 'imageGrid' : 'textList'
})

function selectOption(optionIndex: number) {
  answers[currentIndex.value] = optionIndex
  // Auto advance to next question immediately
  goNext()
}

function goPrev() {
  if (isFirst.value) return
  currentIndex.value--
  // Reset the answer for the question we are going back to, so it appears "new"
  answers[currentIndex.value] = -1
}

function goNext() {
  if (!hasSelected.value) return
  // 如果是最后一题，跳转到 Loading 页
  if (isLast.value) {
    calculateAndNavigate()
    return
  }
  currentIndex.value++
}

function calculateAndNavigate() {
  // Calculate score based on answers
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
  
  answers.forEach((answerIdx, qIdx) => {
    if (answerIdx === -1) return // Should not happen if logic is correct
    
    const question = questions[qIdx]
    if (!question) return

    const option = question.options?.[answerIdx]
    
    if (option?.value) {
      Object.entries(option.value).forEach(([dim, val]) => {
        scores[dim as keyof typeof scores] += val
      })
    }
  })

  // Calculate dimensions
  // E vs I
  const dimIE = scores.E - scores.I // Positive = E, Negative = I
  // S vs N
  const dimSN = scores.S - scores.N // Positive = S, Negative = N
  // T vs F
  const dimTF = scores.T - scores.F // Positive = T, Negative = F
  // J vs P
  const dimJP = scores.J - scores.P // Positive = J, Negative = P

  // Determine type
  const type = [
    dimIE >= 0 ? 'E' : 'I',
    dimSN >= 0 ? 'S' : 'N',
    dimTF >= 0 ? 'T' : 'F',
    dimJP >= 0 ? 'J' : 'P'
  ].join('')
  
  // Calculate percentages (Mock calculation logic for now to match max theoretical offset mentioned in md)
  // Max offsets: IE: 8, SN: 8, TF: 8, JP: 6
  const pctIE = Math.min(100, Math.round(50 + (Math.abs(dimIE) / 8) * 50))
  const pctSN = Math.min(100, Math.round(50 + (Math.abs(dimSN) / 8) * 50))
  const pctTF = Math.min(100, Math.round(50 + (Math.abs(dimTF) / 8) * 50))
  const pctJP = Math.min(100, Math.round(50 + (Math.abs(dimJP) / 6) * 50))

  // Navigate to result with type and percentages
  // For simplicity, passing type via query. Ideally use store.
  router.push({ 
    path: '/loading', 
    query: { 
      type,
      pIE: pctIE,
      pSN: pctSN,
      pTF: pctTF,
      pJP: pctJP
    } 
  })
}

function closeQuiz() {
  router.push('/') // Back to home
}

/** StepButton 禁用状态 */
const prevDisabled = computed(() => isFirst.value)
const nextDisabled = computed(() => !hasSelected.value) // 最后一题只要选了就能下一步（Finish）
const stepVariant = computed<'default' | 'active' | 'disabled'>(() => {
  if (prevDisabled.value && nextDisabled.value) return 'disabled'
  return 'default'
})

/** 进度条：总宽 334px（按设计稿） */
const progressTotal = 334
const progressWidthPx = computed(() => {
  const step = (currentIndex.value + 1) / questions.length
  return Math.max(8, Math.round(progressTotal * step))
})

/** 小鸟位置跟随进度（鸟宽按 24px 粗略） */
const birdLeftPx = computed(() => {
  const leftBase = 28
  const x = leftBase + progressWidthPx.value - 12
  return Math.min(leftBase + progressTotal - 12, Math.max(leftBase - 12, x))
})
</script>

<template>
  <div class="screen">
    <!-- Navigation bar -->
    <div class="navbar">
      <button class="icon-btn" :disabled="isFirst" @click="goPrev" aria-label="back">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="#766630" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      
      <!-- 中间显示进度 或者 语言切换？ -->
      <!-- 设计稿中间是页码 "1 of 5"，我们可以在这里放页码，旁边放语言切换 -->
      <div class="nav-center">
         <div class="counter">{{ currentIndex + 1 }} of {{ questions.length }}</div>
      </div>
      
      <div class="right-actions">
         <LanguageSwitch class="mini-lang-switch" />
      </div>
    </div>

    <!-- Progress bar -->
    <div class="progress">
      <div class="progress-bg"></div>
      <div class="progress-fg" :style="{ width: progressWidthPx + 'px' }"></div>
      <div class="bird-marker" :style="{ left: birdLeftPx + 'px' }">
        <img src="@/assets/images/icon/progressicon.svg" alt="bird" />
      </div>
    </div>

    <!-- Title -->
    <div class="title" v-html="formattedTitle"></div>

    <!-- Options -->
    <!-- 图片题：2x2 -->
    <div v-if="layoutType === 'imageGrid'" class="options-image">
      <button
        v-for="(opt, idx) in currentQuestion.options"
        :key="idx"
        class="card-image"
        :class="{ selected: answers[currentIndex] === idx }"
        @click="selectOption(idx)"
      >
        <img class="card-img" :src="(opt as any).image" :alt="isZh ? opt.labelCn : opt.labelEn" />
        <div class="card-label">{{ isZh ? opt.labelCn : opt.labelEn }}</div>
      </button>
    </div>

    <!-- 文字题：竖向长条（用你的 OptionButton） -->
    <div v-else class="options-text">
      <div
        v-for="(opt, idx) in currentQuestion.options"
        :key="idx"
        class="option-wrapper"
        :class="{ selected: answers[currentIndex] === idx }"
      >
        <OptionButton @click="selectOption(idx)" :class="{ active: answers[currentIndex] === idx }">
          {{ isZh ? opt.labelCn : opt.labelEn }}
        </OptionButton>
      </div>
    </div>

    <!-- Step Navigation（用你的 StepButton） -->
    <div class="step-nav" v-if="!isFirst">
      <StepButton
        :variant="stepVariant"
        :prev-disabled="prevDisabled"
        :next-disabled="true" 
        :show-next="false"
        @prev="goPrev"
      />
    </div>

    <div class="footer">UNSW Student Life x UNSW BOC</div>
  </div>
</template>

<style scoped>
.screen {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #f6f1e5;
  /* Removed border/radius to fit global layout */
  /* border: 8px solid #535353; */
  /* border-radius: 32px; */
  overflow-x: hidden;
  font-family: Poppins, sans-serif;
  display: flex;
  flex-direction: column;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  /* margin-top: 40px; removed status bar space */
}

.nav-center {
  flex: 1;
  display: flex;
  justify-content: center;
}

.right-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
.mini-lang-switch {
  transform: scale(0.8); /* Make it smaller to fit header */
}

.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.icon-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.counter {
  color: #766630;
  font-weight: 500;
}

/* Progress */
.progress {
  position: relative;
  width: 334px;
  height: 24px; /* increased height to fit bird */
  margin: 0 auto 20px;
}
.progress-bg {
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  height: 4px;
  background: rgba(118, 102, 48, 0.2);
  border-radius: 2px;
}
.progress-fg {
  position: absolute;
  top: 10px;
  left: 0;
  height: 4px;
  background: #766630;
  border-radius: 2px;
  transition: width 0.3s ease;
}
.bird-marker {
  position: absolute;
  top: -8px; /* Adjust bird vertical position */
  width: 24px;
  height: 24px;
  transition: left 0.3s ease;
  transform: translateX(-50%); /* Center on the point */
}

/* Title */
.title {
  margin: 0 28px 24px;
  color: #766630;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  white-space: pre-wrap;
  min-height: 60px; /* Ensure minimum height to prevent jump */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Options */
.options-image {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 0 28px;
  margin-bottom: 20px;
}
.card-image {
  background: white;
  border: 2px solid transparent;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.card-image.selected {
  border-color: #766630;
  background-color: rgba(118, 102, 48, 0.1);
}
.card-img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}
.card-label {
  padding: 8px;
  text-align: center;
  color: #766630;
  font-size: 14px;
  font-weight: 500;
}

.options-text {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 28px;
  margin-bottom: 20px;
}
.option-wrapper {
  /* Wrapper to handle selection style if OptionButton doesn't support it directly */
}
/* Assuming OptionButton handles its own style or we override */
.option-wrapper :deep(button) {
  width: 100%;
  max-width: 334px; /* Ensure options don't exceed container width like title/progress */
  margin: 0 auto; /* Center horizontally */
  text-align: center; /* Center text */
  transition: all 0.2s;
  justify-content: center; /* Flex center if button uses flex */
  font-size: 14px; /* Smaller font to fit long text */
  padding: 16px 24px; /* Increased padding */
  white-space: normal; /* Allow wrap */
  height: auto; /* Allow flexible height */
  min-height: 64px; /* Increased height */
  display: flex; /* Ensure flex for centering */
  align-items: center; /* Vertical align */
}
.option-wrapper.selected :deep(button) {
  background-color: #766630 !important;
  color: white !important;
}

/* Step Nav */
.step-nav {
  margin-top: auto; /* Push to bottom */
  padding: 20px 28px 40px; /* Space for footer */
  display: flex;
  justify-content: center;
}

.footer {
  text-align: center;
  color: #DBCFA6;
  font-size: 12px;
  padding-bottom: 20px;
}
</style>
