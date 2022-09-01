<template>
  <div class="backdrop">
    <div class="loader"></div>
  </div>
</template>

<style lang="scss" scoped>
$loader-size: 40px;

@keyframes expand {
  0% {
    z-index: 2;
    transform: scale(0);
  }

  50% {
    z-index: 1;
    transform: scale(1);
  }

  100% {
    z-index: 0;
  }
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  position: absolute;
  left: 50%;
  top: 50%;
  margin: (-$loader-size / 2) 0 0 (-$loader-size / 2);
  width: ($loader-size - 2);
  height: ($loader-size - 2);
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  box-shadow: 0 0 0 ($loader-size / 6) rgb(20, 20, 20);

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    display: block;
    margin: (-$loader-size / 2) 0 0 (-$loader-size / 2);
    width: $loader-size;
    height: $loader-size;
    border-radius: 50%;
    transform: translate3d(0, 0, 0);
  }

  &::before {
    background-color: rgb(24, 24, 24);
    animation: expand 1.6s ease-out infinite both;
  }

  &::after {
    background-color: rgb(255, 255, 255);
    animation: expand 1.6s ease-out 0.8s infinite both;
  }
}
</style>
