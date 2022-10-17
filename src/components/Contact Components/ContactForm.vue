<script setup>
import CustomButton from '../CustomButton.vue'
import LoadingSpinner from "../LoadingSpinner.vue";
import Notification from "../Notification.vue";
import emailjs from "@emailjs/browser";
import { ref } from "@vue/reactivity";

const form = ref(null);
const error = ref(false);
const isPending = ref(false);
const notificationState = ref(false);
const notificationMessage = "Your message has been sent successfully !";

const showNotification = () => {
  notificationState.value = true;
  setTimeout(() => {
    notificationState.value = false;
  }, 3000);
};

const sendMail = async () => {
  isPending.value = true;
  try {
    emailjs
      .sendForm("service_zb6xnw8", "template_8pua3tu", form.value, "HV8_XGB7uDcQMSkJy")
      .then((res) => {
        console.log("Email successfully sent!");
        //reset form values
        form.value.reset();
        isPending.value = false;
        //show and hide notification after 2 seconds
        showNotification();
      });
  } catch (error) {
    (error.value = "Oh well, you failed. Here some thoughts on the error that occured:"), error;
    isPending.value = false;
  }
};
</script>

<template>
  <div class="form-container">
    <form ref="form" autocomplete="off" @submit.prevent="sendMail">
      <input class="input" type="text" name="name" placeholder="Your Name" required />
      <input class="input" type="email" name="email" placeholder="Your Email" required />
      <textarea class="input" name="message" cols="30" rows="5" placeholder="Message" required />

      <div v-show="error != false" class="error-container">{{ error }}</div>
      <CustomButton text="Send Message" />
    </form>
  </div>

  <LoadingSpinner v-show="isPending" />
  <Notification v-show="notificationState" :message="notificationMessage" />
</template>

<style lang="scss" scoped>
.form-container {
  width: 100%;
  display: flex;
  justify-content: start;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 2rem;

    .input {
      width: 100%;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      padding: 0.5rem;
      margin-bottom: 1.5rem;

      &:focus {
        outline: none;
      }
    }

    .error-container {
      color: red;
      font-size: 0.8rem;
      margin-bottom: 1.5rem;
      text-align: center;
      font-style: italic;
    }
  }
}
</style>
