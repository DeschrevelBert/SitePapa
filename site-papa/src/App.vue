<template>
  <Navigation />
  <main class="font-poppins overflow-x-hidden bg-white">
    <HelloWorld />
  </main>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navigation
  }
}
</script>

