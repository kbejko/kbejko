<script setup>
import { computed } from 'vue'
const route = useRoute()
const goToParent = computed(() => {
  const splitSlug = route.path?.split('/')?.pop()
  const crumbsToParent = splitSlug.length !== 1 ? splitSlug.join('/') : '/'
  return crumbsToParent
})
const showCrumbs = computed(() => {
  return !!route.path?.split('/').length > 2
})
</script>

<template>
  <header class="info">
    <h3>
     Klajdi Bejko
      <span>is currently moving to nuxt 3</span>
    </h3>
    <nav class="site-nav">
      <nuxt-link to="/" v-if="route.path !== '/'">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a8f7a1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      </nuxt-link>
      <nuxt-link to="/info" v-if="route.path !== '/info'">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
      </nuxt-link>
      <nuxt-link :to="goToParent" v-if="showCrumbs">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffd500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
      </nuxt-link>
    </nav>
  </header>
</template>

<style scoped>
.info {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.info h3 {
  font-variation-settings: "MONO" 1, "wght" 850;
}
.info h3::before {
  content: "";
  display: block;
  width: 1rem;
  height: 1rem;
  margin-bottom: 0.25rem;
  background-color: var(--accent);
}
.info h3 span {
  font-variation-settings: "MONO" 1, "wght" 350;
}
.site-nav {
  display: flex;
  flex-flow: column;
}
.site-nav a {
  margin-bottom: .5rem;
}
</style>