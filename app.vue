<template>
  <div :class="{'dark-mode' : useStore.darkModeEnabled}">
    <NuxtLayout>
      <NuxtPage  />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useTestStore } from '~/store/user';
const useStore = useTestStore()
const test = useStore.darkModeEnabled
console.log(" here in app . vue file ")
// console.log(test)
watch(() => useStore.darkModeEnabled, (newValue, oldValue) => {
  console.log("Dark mode enabled changed from", oldValue, "to", newValue);
});
</script>