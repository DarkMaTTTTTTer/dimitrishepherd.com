<script setup></script>

<template>
  <div class="description-wrapper">
    <div class="description-container">
      <p>
        Highly motivated Full Stack Web Developer,
        Tech enthusiast and Photography lover who
        spends most of the days trying to learn something new.
      </p>
    </div>

    <div class="sub-description-container">
      <p>
        Working with my hands to create something useful and unique. View my
        <router-link class="link" to="/projects">Projects</router-link>,

        <router-link class="link" to="/resume">Resume</router-link>, <router-link class="link" to="/contact">Contact Me</router-link> or send me an email at
        <a href="mailto:dimitri@dimitrishepherd.com" class="link">dimitri@dimitrishepherd.com</a>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/*Colors*/
$color-white: #fafafa;
$color-black: #000;
$color-light: #f4f1ee;

.description-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  p {
    font-size: 1.2rem;
    height: auto;
    width: 100%;
    margin: 1rem 0;

    @media screen and (max-width: 1200px) {
      font-size: 1rem;
      line-height: 35px;
    }

    @media screen and (max-width: 375px) {
      font-size: 1rem;
      line-height: 30px;
    }
  }

  .link {
    background-color: $color-light;
    padding: 0.2rem 0.7rem;
    border-radius: 5px;
    transition: background-color 0.2s linear;
    border: none;
    margin: 0.4rem 0;
    text-decoration: none;
    color: $color-black;

    &:hover {
      background-color: $color-black;
      cursor: pointer;
      color: $color-white;
    }
  }
}
</style>
