<template>
  <div id="layout">
    <HeaderMain />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderMain from './components/molecules/HeaderMain.vue';
</script>

