<template>
  <div class="header-container">
    <h2>Contact.</h2>
    <p>
      Get in touch or shoot me an email directly on <span class="mail">dimitri@dimitrishepherd.com </span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: normal;
    margin-bottom: 0.5rem;

    @media screen and (max-width: 1200px) {
      font-size: 1.2rem;
    }

    .mail {
      font-weight: 600;
    }
  }
}
</style>
