<template>
  <div class="social-container">
    <ul class="social-icons">
      <li>
        <a href="https://github.com/DarkMaTTTTTTer/" target="_blank"><i class="fa-brands fa-github"></i></a>
      </li>
      <li>
        <a href="https://battlestar.host/discord" target="_blank"><i class="fa-brands fa-discord"></i></a>
      </li>
      <li>
        <a href="https://www.instagram.com/matter_darker" target="_blank"><i class="fa-brands fa-instagram"></i></a>
      </li>
      <li>
        <a href="https://twitter.com/matter_darker" target="_blank"><i class="fa-brands fa-twitter"></i></a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css);

.social-icons {
  padding: 0;
  list-style: none;

  li {
    display: inline-block;
    margin: 0.5em;

    font-size: 1.2em;
  }

  i {
    color: black;

    top: 10px;
    left: 10px;
    transition: transform 100ms ease-in-out;

    &:hover {
      transform: scale(2);
    }
  }

  a {
    display: inline-block;
    margin: 0 1rem;
  }
}
</style>
