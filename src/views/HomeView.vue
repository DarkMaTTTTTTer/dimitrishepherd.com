<script setup>
import AnimatedName from "../components/Home Components/AnimatedName.vue";
import Description from "../components/Home Components/Description.vue";
import SeeMore from "../components/Home Components/SeeMore.vue";
import SocialIcons from "../components/Home Components/SocialIcons.vue";
import CustomButton from "../components/CustomButton.vue";
</script>

<template>
  <div class="view-wrapper">
    <div class="name-container">
      <AnimatedName />
    </div>

    <div class="description-container">
      <Description />
    </div>

    <div class="see-more-container">
      <a href="https://dimitrishepherd.com" target="_blank"> <CustomButton text="More about me" /></a>
    </div>

    <div class="social-icons-container">
      <SocialIcons />
    </div>
  </div>
</template>

<style lang="scss" scoped>
body {
  overflow: hidden;
}
.view-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .name-container {
    display: flex;
    justify-content: start;
    width: 70%;

    @media screen and (max-width: 768px) {
      width: 90%;
      margin-top: -9rem;
    }

    @media screen and (max-width: 375px) {
      width: 90%;
      margin-top: -2rem;
    }
  }

  .description-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .see-more-container {
    display: flex;
    justify-content: start;
    width: 70%;
    margin-top: 2rem;

    @media screen and (max-width: 768px) {
      width: 90%;
      margin-top: 2rem;
    }

    @media screen and (max-width: 375px) {
      width: 90%;
      margin-top: 1.5rem;
    }
  }

  .social-icons-container {
    display: flex;
    justify-content: center;
    position: relative;
    bottom: -3rem;
    width: 70%;
    margin-top: 2rem;

    @media screen and (max-width: 768px) {
      width: 90%;
      bottom: -5rem;
    }
  }
}
</style>
