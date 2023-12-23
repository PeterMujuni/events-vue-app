<template>
  <h1>Oops!</h1>
  <h3>The {{ resource }} you're looking for is not here.</h3>
  <RouterLink :to="{ name: 'Home' }">Back to the home page</RouterLink>
</template>

<script setup lang="ts">
interface IProps {
  resource: string,
}

withDefaults(defineProps<IProps>(), {resource: 'page'})
</script>

<style scoped>

</style>