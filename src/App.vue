<script setup>
import Navbar from "./components/Navbar.vue";
import CustomCursor from "./components/CustomCursor.vue";
import { useRoute } from "vue-router";
import { watch } from "vue";
import { useRouteStore } from "./stores/routeStore";
const routeStore = useRouteStore();
const route = useRoute();

//watch route changes and update routeStore
watch(route, (newVal, oldVal) => {
  routeStore.currentRoutePath = newVal.path;
});

console.log(`Hey There i'm glad you liked the site and want to see whats going on, contact me on discord https://battlestar.host/discord to find out more. 🚀`);
</script>

<template>
  <div class="page-wrapper">
    <div class="navbar-container">
      <Navbar />
    </div>
    <div class="routes-wrapper">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </div>
    <CustomCursor />
  </div>
</template>

<style lang="scss" scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;

  .navbar-container {
    margin: 0 auto;
    width: 70%;
  }
}

.routes-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
