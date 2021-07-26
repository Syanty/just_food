<template>
  <div class="bg-red-50 h-screen py-20">
    <form
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
      method="post"
      @submit.prevent="onLogin"
    >
      <h1 class="uppercase text-center text-3xl font-sans font-bold mb-4">
        Signin
      </h1>
      <p
        class="p-2 bg-green-100 mb-5 rounded-md text-center"
        v-if="getSuccessMsg"
      >
        {{ getSuccessMsg }}
      </p>
      <p
        class="p-2 bg-red-100 mb-5 rounded-md text-center"
        v-else-if="getErrorMsg"
      >
        {{ getErrorMsg }}
      </p>
      <input-email
        class="w-full mb-4"
        :email="email"
        @updatedemail="email = $event"
      ></input-email>
      <div class="flex w-full border border-gray-300 rounded-md">
        <input-password
          :password="password"
          :isVisible="isVisible"
          @updatedPassword="password = $event"
        ></input-password>
        <password-visibility
          :password="user_password"
          @visibility="isVisible = $event"
        ></password-visibility>
      </div>
      <button
        class="w-full p-3 mt-4 text-lg font-bold rounded-md"
        type="submit"
        :class="
          isValidForm
            ? 'bg-red-600 text-white'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        "
      >
        Login
      </button>
      <div
        class="
          flex flex-col
          items-center
          justify-between
          p-3
          border-b border-gray-300
        "
      >
        <div
          class="text-red-500 cursor-pointer hover:underline"
          @click="openResetModal"
        >
          Forgot password?
        </div>
        or
        <div class="block p-3 border-b border-gray-300">
          <div
            class="text-red-500 cursor-pointer hover:underline"
            @click="openResendModal"
          >
            Didn't get a link? Resend
          </div>
          <div
            v-if="modal"
            class="
              h-screen
              w-screen
              fixed
              top-0
              left-0
              z-50
              bg-opacity-80 bg-gray-200
            "
          >
            <div
              class="
                absolute
                top-1/2
                left-1/2
                transform
                -translate-x-1/2 -translate-y-1/2
                w-96
                h-40
              "
            >
              <div
                class="w-10/12 mx-auto sm:w-full bg-white rounded-md shadow-2xl"
              >
                <h1
                  class="
                    text-xl
                    p-2
                    mb-5
                    bg-red-900
                    text-white
                    rounded-t-md
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span v-if="resetMode">Forgot Password</span>
                  <span v-else>Resend Confirmation Link</span>
                  <div @click="closeModal" class="cursor-pointer">
                    <icon-close class="h-5 w-5"></icon-close>
                  </div>
                </h1>
                <p
                  class="p-2 bg-green-100 mb-5 rounded-md text-center"
                  v-if="getSuccessMsg"
                >
                  {{ getSuccessMsg }}
                </p>
                <p
                  class="p-2 bg-red-100 mb-5 rounded-md text-center"
                  v-else-if="getErrorMsg"
                >
                  {{ getErrorMsg }}
                </p>
                <div class="p-4 flex items-center justify-between">
                  <input-email
                    class="w-8/12"
                    :email="email"
                    @updatedemail="email = $event"
                  ></input-email>
                  <button
                    v-on="
                      resetMode
                        ? { click: resetPassword }
                        : { click: resendLink }
                    "
                    class="w-4/12 p-2 ml-2 rounded-md min-w-max"
                    :class="
                      status
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    "
                  >
                    <span v-if="resetMode">Reset Password</span>
                    <span v-else>Resend Link</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-5">
        Don't have an account?
        <nuxt-link to="/account/signup" class="text-red-500">signup</nuxt-link>
      </div>
    </form>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      isVisible: false,
      email: '',
      password: '',
      modal: false,
      resetMode: false,
    }
  },
  computed: {
    ...mapGetters('helper', ['getSuccessMsg', 'getErrorMsg']),
    user_password() {
      return this.password
    },
    isValidForm() {
      let isvalid = null
      if (this.email !== '' && this.password !== '') {
        isvalid = true
      } else {
        isvalid = false
      }

      return isvalid
    },
    status() {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const status = re.test(String(this.email).toLowerCase())

      return status
    },
  },
  methods: {
    async onLogin() {
      if (this.isValidForm) {
        this.$store.commit('helper/setSuccess', null)
        await this.$auth
          .loginWith('local', {
            data: {
              email: this.email,
              password: this.password,
            },
          })
          .then((res) => {
           console.log(res);
          })
          .catch((err) => {
            if (err.response.status === 500) {
              console.log(err.response)
            } else {
              this.$store.commit('helper/setError', err.response.data.message)
            }
          })
      }
    },

    openResendModal() {
      this.$store.commit('helper/setSuccess', null)
      this.$store.commit('helper/setError', null)
      this.modal = true
    },
    openResetModal() {
      this.$store.commit('helper/setSuccess', null)
      this.$store.commit('helper/setError', null)
      this.modal = true
      this.resetMode = true
    },
    closeModal() {
      this.modal = false
      if (this.resetMode) {
        this.resetMode = false
      }
      this.$store.commit('helper/setSuccess', null)
      this.$store.commit('helper/setError', null)
    },
    resendLink() {
      this.$store.commit('helper/setSuccess', null)
      this.$store.commit('helper/setError', null)
      if (this.status) {
        this.$axios
          .get(`/auth/user/${this.email}/resend/confirmation/`)
          .then((res) => {
            this.$store.commit('helper/setSuccess', res.data.message)
          })
          .catch((err) => {
            if (err.response.status === 500) {
              console.log(err.response)
            } else {
              this.$store.commit('helper/setError', err.response.data.message)
            }
          })
      }
      this.email = ''
    },
    resetPassword() {
      this.$store.commit('helper/setSuccess', null)
      this.$store.commit('helper/setError', null)
      if (this.status) {
        this.$axios
          .get(`/auth/user/forgot-password/${this.email}/reset-password`)
          .then((res) => {
            this.$store.commit('helper/setSuccess', res.data.message)
          })
          .catch((err) => {
            if (err.response.status === 500) {
              console.log(err.response)
            } else {
              this.$store.commit('helper/setError', err.response.data.message)
            }
          })
      }
      this.email = ''
    },
  },
}
</script>