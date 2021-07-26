<template>
  <div class="h-screen py-16">
    <form
      method="post"
      @submit.prevent="resetPassword"
      class="
        w-11/12
        sm:w-8/12
        md:w-96
        border border-gray-200
        shadow-2xl
        p-6
        mx-auto
        bg-white
        rounded-xl
        text-red-900
      "
    >
      <h1 class="uppercase text-center text-3xl font-sans font-bold mb-4">
        reset password
      </h1>
      <p class="p-2 bg-red-100 mb-5 rounded-md text-center" v-if="getErrorMsg">
        {{ getErrorMsg }}
      </p>
      <div v-if="email" class="flex flex-col mb-3">
        <div class="flex items-center">
          <input
            type="text"
            class="
              p-3
              border
              w-full
              mr-1
              border-gray-300
              rounded-md
              focus:outline-none
            "
            v-model="email"
            readonly
          />
        </div>
      </div>
      <div class="flex flex-col mb-3">
        <div class="flex items-center">
          <div class="flex w-full mr-1 border border-gray-300 rounded-md">
            <input-password
              :password="password"
              :isVisible="isVisible"
              @updatedPassword="password = $event"
            ></input-password>
            <password-visibility
              @visibility="isVisible = $event"
              :password="user_password"
            ></password-visibility>
          </div>
        </div>
        <span>{{ errors.password || errors.message }}</span>
      </div>
      <div class="flex flex-col mb-3">
        <div class="flex items-center">
          <div class="flex w-full mr-1 border border-gray-300 rounded-md">
            <input-password
              :password="confirm_password"
              :isVisible="isVisible"
              @updatedPassword="confirm_password = $event"
            ></input-password>
            <password-visibility
              @visibility="isVisible = $event"
              :password="user_confirm_password"
            ></password-visibility>
          </div>
        </div>
      </div>
      <div>
        <button
          class="w-full p-4 text-center rounded-md"
          :class="
            email && isValidForm
              ? 'bg-red-600 text-white'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          "
          type="submit"
          :disabled="email && isValidForm != '' ? false : true"
        >
          Reset
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: '',
      confirm_password: '',
      validation_errors: {},
      isVisible: false,
    }
  },
  async fetch() {
    await this.$axios
      .get(`/auth/user/reset-password/${this.$route.params.resetCode}`)
      .then((res) => {
        this.email = res.data
      })
      .catch((err) => {
        if (err.response.data.message) {
          this.$store.commit('helper/setError', err.response.data.message)
        }
        this.validation_errors = err.response.data
      })
  },
  computed: {
    ...mapGetters('helper', ['getErrorMsg']),
    user_password() {
      return this.password
    },
    user_confirm_password() {
      return this.confirm_password
    },
    errors() {
      return this.validation_errors
    },
    isValidForm() {
      let isvalid = null
      if (this.password !== '' && this.confirm_password !== '') {
        isvalid = true
      } else {
        isvalid = false
      }

      return isvalid
    },
  },
  methods: {
    resetPassword() {
      this.$axios
        .post(`/auth/user/reset-password/${this.$route.params.resetCode}`, {
          password: this.password,
          confirm_password: this.confirm_password,
        })
        .then((res) => {
          this.$store.commit('helper/setSuccess', res.data.message)
          this.$router.replace('/account/signin')
        })
        .catch((err) => {
          if (err.response.data.message) {
            this.validation_errors = err.response.data
          }
          this.validation_errors = err.response.data
        })
    },
  },
}
</script>