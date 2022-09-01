<script setup>
import { ref } from "@vue/reactivity";
import { useRouteStore } from "../stores/routeStore";
const routeStore = useRouteStore();
const isActive = ref(false);

function toggleActive() {
  isActive.value = !isActive.value;
}
</script>

<template>
  <nav>
    <div class="logo-container">
      <router-link class="logo text-outline text-outline-hover" data-text="DS." to="/">DS.</router-link>
    </div>

    <div class="links-container">
      <div class="home-route-container" v-if="routeStore.currentRoutePath !== '/'"><router-link class="link" to="/">Home</router-link></div>
      <router-link class="link" to="/projects">Projects</router-link>
      <router-link class="link" to="/resume">Resume</router-link>
      <router-link class="link" to="/contact">Contact</router-link>
    </div>

    <div :class="[isActive ? 'mobile-links-wrapper-active' : 'mobile-links-wrapper-inactive']">
      <div class="nav-links-container">
        <router-link class="link" to="/" @click="toggleActive">Home</router-link>
        <router-link class="link" to="/projects" @click="toggleActive">Projects</router-link>
        <router-link class="link" to="/resume" @click="toggleActive">Resume</router-link>
        <router-link class="link" to="/contact" @click="toggleActive">Contact</router-link>
      </div>
    </div>

    <button @click="toggleActive" :class="[isActive ? 'menu active' : 'menu']">
      <svg viewBox="0 0 64 48">
        <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
        <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
        <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
      </svg>
    </button>
  </nav>
</template>

<style lang="scss">
/* Colors */
$color-white: white;
$color-black: black;
$color-gray: #808288;

/* Animations */
@mixin slide-in-out {
  -webkit-transition-duration: 0.5s;
  -moz-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;

  /* Logo Styling */

  .logo-container {
    .logo {
      font-family: inherit;
      font-size: 3rem;
      font-weight: 700;
      line-height: inherit;
      text-transform: uppercase;
      color: $color-black;
      text-decoration: none;

      @media screen and (max-width: 1200px) {
        margin-left: -2rem;
      }
    }

    .text-outline {
      -webkit-text-fill-color: $color-black;
      -webkit-text-stroke-color: currentColor;
      -webkit-text-stroke-width: 0.012em;
    }

    .text-outline-hover {
      position: relative;
      cursor: pointer;

      &::before {
        position: absolute;
        top: 1;
        left: 0;
        max-width: 0;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        content: attr(data-text);
        transition: max-width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
        -webkit-text-fill-color: $color-white;
      }

      &:hover {
        &::before {
          max-width: 100%;
        }
      }
    }
  }

  /* Links Styling */

  .links-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 300px;

    @media screen and (max-width: 1200px) {
      display: none;
    }
  }

  .mobile-links-wrapper-active {
    display: none;

    @media screen and (max-width: 1200px) {
      background-color: $color-white;
      color: $color-black;
      top: 0;
      left: 0;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 99999;
      width: 100%;
      height: 100vh;
      @include slide-in-out;
    }
  }

  .mobile-links-wrapper-inactive {
    display: none;

    @media screen and (max-width: 1200px) {
      background-color: $color-white;
      color: $color-black;
      top: 0;
      left: -100rem;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
      width: 100%;
      height: 100vh;
      @include slide-in-out;
    }
  }

  .nav-links-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 70%;
  }

  /* Menu Button Styling */

  .menu {
    display: none;
    --color: black;
    z-index: 99999;
    width: 42px;
    height: 42px;
    padding: 0;
    margin: 0;
    margin-right: -2.5rem;
    outline: none;
    position: relative;
    border: none;
    background: none;
    cursor: pointer;
    -webkit-appearence: none;
    -webkit-tap-highlight-color: transparent;
    svg {
      width: 64px;
      height: 48px;
      top: -6px;
      left: -14px;
      stroke: var(--color);
      stroke-width: 4px;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: none;
      display: block;
      position: absolute;
      path {
        transition: stroke-dasharray var(--duration, 0.85s) var(--easing, ease) var(--delay, 0s), stroke-dashoffset var(--duration, 0.85s) var(--easing, ease) var(--delay, 0s);
        stroke-dasharray: var(--array-1, 26px) var(--array-2, 100px);
        stroke-dashoffset: var(--offset, 126px);
        transform: translateZ(0);
        &:nth-child(2) {
          --duration: 0.7s;
          --easing: ease-in;
          --offset: 100px;
          --array-2: 74px;
        }
        &:nth-child(3) {
          --offset: 133px;
          --array-2: 107px;
        }
      }
    }
    &.active {
      svg {
        path {
          --offset: 57px;
          &:nth-child(1),
          &:nth-child(3) {
            --delay: 0.15s;
            --easing: cubic-bezier(0.2, 0.4, 0.2, 1.1);
          }
          &:nth-child(2) {
            --duration: 0.4s;
            --offset: 2px;
            --array-1: 1px;
          }
          &:nth-child(3) {
            --offset: 58px;
          }
        }
      }
    }

    @media screen and (max-width: 1200px) {
      display: flex;
    }
  }

  /* Single link Styling */

  .link {
    font-size: 1em;
    font-weight: 400;
    color: $color-gray;
    text-decoration: none;
    line-height: inherit;
    background-image: linear-gradient(180deg, transparent 95%, $color-black 0);
    background-repeat: no-repeat;
    background-size: 0 100%;
    transition: background-size 0.4s ease;

    &:hover {
      background-size: 100% 100%;
      cursor: pointer;
    }

    @media screen and (max-width: 1200px) {
      font-size: 1.5em;
      margin-bottom: 1rem;
    }
  }
}
</style>
