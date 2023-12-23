<template>
    <header>
      <div class="wrapper">
      <!-- <div id="flashMessage" v-if="gStore.flashMessage">{{ gStore.flashMessage }}</div> -->
        <nav>
          <RouterLink :to="{name: 'Home'}">Events</RouterLink> |
          <RouterLink :to="{name: 'About'}">About</RouterLink>
        </nav>
      </div>
    </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>

</style>