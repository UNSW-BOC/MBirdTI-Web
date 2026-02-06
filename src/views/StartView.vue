<script setup lang="ts">
import PrimaryButton from '@/components/button/PrimaryButton.vue'
import StepNavigation from '@/components/button/StepButton.vue'
import RestartButton from '@/components/button/RestartButton.vue'
import OptionButton from '@/components/button/OptionButtion.vue'
import LanguageOptionButton from '@/components/button/LanguageOptionButton.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
function goQuiz() {
  router.push('/quiz')
}

function goPrev() {
  console.log('Go to previous step')
}

function goNext() {
  console.log('Go to next step')
}
</script>

<template>
  <div class="start" @click="goQuiz">
    <h1>Start Page</h1>
  </div>
  <img class="card" src="@/assets/images/card/FlipTaroCardfront.svg" alt="" />
  <img class="card" src="@/assets/images/card/FlipTaroCardback.svg" alt="" />

  <PrimaryButton @click="router.push('/start')"> Start </PrimaryButton>
  <PrimaryButton disabled> Disabled </PrimaryButton>

  <StepNavigation variant="default" @prev="goPrev" @next="goNext" />
  <StepNavigation variant="active" @prev="goPrev" @next="goNext" />
  <StepNavigation variant="disabled" />

  <!-- 或只禁用某一边 -->
  <StepNavigation variant="default" prevDisabled @next="goNext" />

  <RestartButton @click="router.push('/start')"> Restart </RestartButton>
  <RestartButton disabled> Disabled </RestartButton>

  <LanguageOptionButton @click="router.push('/start')"> English </LanguageOptionButton>

  <OptionButton @click="router.push('/start')"> Option 1 </OptionButton>
</template>

<style scoped>
.start {
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-size: 32px;
}
</style>
