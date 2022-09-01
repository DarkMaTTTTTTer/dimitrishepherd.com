<script setup>
const props = defineProps({
  message: {
    type: String,
    default: "Notification successfully sent!",
  },
});
</script>

<template>
  <div class="container">
    <div class="rectangle">
      <div class="notification-text">
        <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
        <span>&nbsp;&nbsp;{{ props.message }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;

  justify-content: center;
  top: 0.5rem;
  position: absolute;
  z-index: 9999;
}

.rectangle {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 65px;
  height: 50px;
  background: black;
  transform: scale(0);
  border-radius: 50%;
  color: white;
  opacity: 0;
  overflow: hidden;
  animation: scale-in 0.3s ease-out forwards, expand 0.35s 0.25s ease-out forwards;
}

.notification-text {
  display: flex;
  align-items: center;
  padding: 0 18px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  animation: fade-in 0.65s ease-in forwards;
}

@keyframes scale-in {
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes expand {
  50% {
    width: 360px;
    border-radius: 6px;
  }
  100% {
    width: 330px;
    border-radius: 4px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
      0px 3px 3px -1px rgba(0, 0, 0, 0.12);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.8;
  }
}
</style>
