<template>
  <div class="bg-red-50 h-screen py-16">
    <form
      method="post"
      @submit.prevent="registerUser"
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
        signup
      </h1>
      <p class="p-2 bg-red-100 mb-5 rounded-md text-center" v-if="getErrorMsg">
        {{ getErrorMsg }}
      </p>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div class="flex flex-col">
          <div class="flex items-center">
            <input-first-name
              class="w-full mr-1"
              :first_name="user.first_name"
              @updatedFname="user.first_name = $event"
            ></input-first-name>
            <span class="text-red-500">*</span>
          </div>
          <span>{{ errors.first_name }}</span>
        </div>
        <div class="flex flex-col">
          <div class="flex items-center">
            <input-last-name
              class="w-full mr-1"
              :last_name="user.last_name"
              @updatedLname="user.last_name = $event"
            ></input-last-name>
            <span class="text-red-500">*</span>
          </div>
          <span>{{ errors.last_name }}</span>
        </div>
      </div>
      <div class="flex flex-col mb-3">
        <div class="flex items-center">
          <input-email
            class="w-full mr-1"
            :email="user.email"
            @updatedemail="user.email = $event"
          ></input-email>
          <span class="text-red-500">*</span>
        </div>
        <span>{{ errors.email }}</span>
      </div>
      <div class="flex flex-col mb-3">
        <div class="flex items-center">
          <p class="border border-r-0 border-gray-300 rounded-l-md p-3">+977</p>
          <input-phone
            class="w-full mr-1 border-l-0 rounded-l-none"
            :phone="user.phone"
            @updatedPhone="user.phone = $event"
          ></input-phone>
          <span class="text-red-500">*</span>
        </div>
        <span>{{ errors.phone }}</span>
      </div>
      <div class="flex flex-col mb-3">
        <div class="flex items-center">
          <div class="flex w-full mr-1 border border-gray-300 rounded-md">
            <input-password
              :password="user.password"
              :isVisible="isVisible"
              @updatedPassword="user.password = $event"
            ></input-password>
            <password-visibility
              @visibility="isVisible = $event"
              :password="user_password"
            ></password-visibility>
          </div>
          <span class="text-red-500">*</span>
        </div>
        <span>{{ errors.password }}</span>
      </div>

      <div>
        <button
          class="w-full p-4 text-center rounded-md"
          type="submit"
          :class="
            validate_form
              ? 'bg-red-600 text-white'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          "
        >
          Signup
        </button>
      </div>
      <div class="text-center mt-5">
        Already have an account?
        <nuxt-link to="/account/signin" class="text-red-500">signin</nuxt-link>
      </div>
    </form>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      user: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone: '',
      },
      isVisible: false,
      validation_errors: {},
    }
  },
  methods: {
    async registerUser() {
      this.$store.commit('helper/setError', null)
      if (this.validate_form) {
        await this.$axios
          .post('/auth/user/signup/', this.user)
          .then((res) => {
            this.$router.replace('/account/signin')
            this.$store.commit('helper/setSuccess', res.data.message)
          })
          .catch((err) => {
            if (err.response.data.message) {
              this.$store.commit('helper/setError', err.response.data.message)
            }
            this.validation_errors = err.response.data
          })
      }
    },
  },
  computed: {
    ...mapGetters('helper', ['getSuccessMsg', 'getErrorMsg']),
    user_password() {
      return this.user.password
    },
    errors() {
      return this.validation_errors
    },
    validate_form() {
      let isValid = null
      for (const key in this.user) {
        if (Object.hasOwnProperty.call(this.user, key)) {
          const element = this.user[key]
          if (element === '') {
            isValid = false
            return
          } else {
            isValid = true
          }
        }
      }

      return isValid
    },
  },
}
</script>
<style scoped>
span {
  color: #ef4444;
  margin-left: 5px;
}
</style>