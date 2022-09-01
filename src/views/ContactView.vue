<script setup>
import Header from "../components/Contact Components/Header.vue";
import ContactForm from "../components/Contact Components/ContactForm.vue";
</script>

<template>
  <div class="view-wrapper">
    <Header />
    <ContactForm />
  </div>
</template>

<style lang="scss" scoped>
.view-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 90%;
    margin-top: -9rem;
  }

  @media screen and (max-width: 375px) {
    width: 90%;
    margin-top: -3rem;
  }
}
</style>
