<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { questions } from '@/data/questions'
import type { Question } from '@/data/questions'

import StepButton from '@/components/button/StepButton.vue'
import OptionButton from '@/components/button/OptionButtion.vue'

const router = useRouter()

const currentIndex = ref(0)

/**
 * answers[i] = 第 i 题选择的选项下标
 * -1 表示未选择
 */
const answers = reactive<number[]>(Array(questions.length).fill(-1))

const fallbackQuestion: Question = {
  id: 'fallback',
  title: '',
  options: [],
}

const currentQuestion = computed(() => {
  return questions[currentIndex.value] ?? fallbackQuestion
})

const isFirst = computed(() => currentIndex.value === 0)
const isLast = computed(() => currentIndex.value === questions.length - 1)
const hasSelected = computed(() => answers[currentIndex.value] !== -1)

/** 标题换行 */
const formattedTitle = computed(() => (currentQuestion.value.title || '').replace(/\n/g, '<br/>'))

/** 布局：含 image 就走图片 2x2，否则走文字竖向列表 */
const layoutType = computed<'imageGrid' | 'textList'>(() => {
  const hasImage = currentQuestion.value.options.some((o) => o.type === 'image')
  return hasImage ? 'imageGrid' : 'textList'
})

function selectOption(optionIndex: number) {
  answers[currentIndex.value] = optionIndex
}

function goPrev() {
  if (isFirst.value) return
  currentIndex.value--
}

function goNext() {
  if (!hasSelected.value) return
  if (isLast.value) return
  currentIndex.value++
}

function closeQuiz() {
  router.back()
}

/** StepButton 禁用状态 */
const prevDisabled = computed(() => isFirst.value)
const nextDisabled = computed(() => !hasSelected.value || isLast.value)
const stepVariant = computed<'default' | 'active' | 'disabled'>(() => {
  if (prevDisabled.value && nextDisabled.value) return 'disabled'
  return 'default'
})

/** 进度条：总宽 334px（按你的设计稿） */
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
    <!-- Status bar（占位） -->
    <div class="statusbar">
      <div class="time">9:41</div>
      <div class="levels">
        <div class="cell"></div>
        <div class="wifi"></div>
        <div class="battery">
          <div class="battery-border"></div>
          <div class="battery-cap"></div>
          <div class="battery-fill"></div>
        </div>
      </div>
    </div>

    <!-- Navigation bar -->
    <div class="navbar">
      <button class="icon-btn" :disabled="isFirst" @click="goPrev" aria-label="back">‹</button>
      <div class="counter">{{ currentIndex + 1 }} of {{ questions.length }}</div>
      <button class="icon-btn" @click="closeQuiz" aria-label="close">×</button>
    </div>

    <!-- Progress bar -->
    <div class="progress">
      <div class="progress-bg"></div>
      <div class="progress-fg" :style="{ width: progressWidthPx + 'px' }"></div>
      <div class="bird" :style="{ left: birdLeftPx + 'px' }"></div>
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
        <img class="card-img" :src="(opt as any).image" :alt="opt.label" />
        <div class="card-label">{{ opt.label }}</div>
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
        <OptionButton @click="selectOption(idx)">
          {{ opt.label }}
        </OptionButton>
      </div>
    </div>

    <!-- Step Navigation（用你的 StepButton） -->
    <div class="step-nav">
      <StepButton
        :variant="stepVariant"
        :prev-disabled="prevDisabled"
        :next-disabled="nextDisabled"
        @prev="goPrev"
        @next="goNext"
      />
    </div>

    <div class="footer">UNSW Student Life x UNSW BOC</div>
  </div>
</template>

<style scoped>
.screen {
  position: relative;
  width: 390px;
  height: 844px;
  background: #f6f1e5;
  border: 8px solid #535353;
  border-radius: 32px;
  overflow: hidden;
  font-family:
    Poppins,
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    Arial,
    sans-serif;
}

/* Status bar */
.statusbar {
  position: absolute;
  left: 0;
  top: 0;
  width: 390px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 21px 24px 19px;
  gap: 154px;
  box-sizing: border-box;
}
.time {
  width: 94px;
  text-align: center;
  font-size: 17px;
  font-weight: 590;
}
.levels {
  width: 94px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
}
.cell,
.wifi {
  width: 18px;
  height: 12px;
  background: #000;
  border-radius: 2px;
}
.battery {
  position: relative;
  width: 27px;
  height: 13px;
}
.battery-border {
  position: absolute;
  inset: 0;
  border: 1px solid #000;
  opacity: 0.35;
  border-radius: 4.3px;
}
.battery-cap {
  position: absolute;
  right: -2px;
  top: 4px;
  width: 2px;
  height: 6px;
  background: #000;
  opacity: 0.4;
}
.battery-fill {
  position: absolute;
  left: 3px;
  top: 2px;
  width: 18px;
  height: 9px;
  background: #000;
  border-radius: 2.5px;
}

/* Navbar */
.navbar {
  position: absolute;
  left: 0;
  top: 62px;
  width: 390px;
  height: 24px;
  padding: 0 28px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.icon-btn {
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  color: #525252;
  font-size: 24px;
  line-height: 24px;
  padding: 0;
  cursor: pointer;
}
.icon-btn:disabled {
  opacity: 0.35;
  cursor: default;
}
.counter {
  font-size: 12px;
  letter-spacing: 0.04em;
  color: #a6914e;
}

/* Progress */
.progress {
  position: absolute;
  left: 0;
  top: 130px;
  width: 390px;
  height: 16px;
}
.progress-bg {
  position: absolute;
  left: 28px;
  top: 6px;
  width: 334px;
  height: 4px;
  background: #e3dfd3;
  border-radius: 4px;
}
.progress-fg {
  position: absolute;
  left: 28px;
  top: 6px;
  height: 4px;
  background: #766630;
  border-radius: 4px;
}
.bird {
  position: absolute;
  top: -2px;
  width: 24px;
  height: 16px;
  background: #766630;
  border-radius: 6px;
}

/* Title */
.title {
  position: absolute;
  left: 36px;
  top: 200px;
  width: 318px;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  color: #766630;
}

/* ========== 图片题（Q1 2x2） ========== */
.options-image {
  position: absolute;
  left: 28px;
  top: 300px;
  width: 334px;
  display: grid;
  grid-template-columns: 157px 157px;
  gap: 20px;
}
.card-image {
  width: 157px;
  height: 180px;
  border: none;
  border-radius: 20px;
  background: #fff;
  cursor: pointer;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-image.selected {
  outline: 3px solid #766630;
}
.card-img {
  width: 100%;
  height: 130px;
  object-fit: cover;
  border-radius: 14px;
}
.card-label {
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #564a24;
}

/* ========== 文字题（Q3 竖向 4 条） ========== */
.options-text {
  position: absolute;
  left: 36px;
  top: 327px;
  width: 318px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* 包住 OptionButton 的外壳 */
.option-wrapper {
  width: 318px;
}

/* 已选中态：给 OptionButton 的根按钮加样式 */
.option-wrapper.selected :deep(.btn-option) {
  background: #e9debb;
  outline: 3px solid #766630;
}

/* StepButton 定位 */
.step-nav {
  position: absolute;
  left: 234px;
  top: 736px;
}

/* Footer */
.footer {
  position: absolute;
  left: 96px;
  top: 812px;
  width: 198px;
  height: 16px;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: #dbcfa6;
  text-align: center;
}
</style>
