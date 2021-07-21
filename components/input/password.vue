<template>
  <input
    v-model="password_data"
    :type="isVisible ? 'text' : 'password'"
    class="w-11/12 p-3 rounded-md focus:outline-none"
    placeholder="Password"
    @input="$emit('updatedPassword', password_data)"
  />
</template>
<script>
export default {
  props: {
    password:{
      type:String,
      default:""
    },
    isVisible:{
       type:Boolean,
      default:false
    }
  },
  data() {
    return {
      password_data: '',
    }
  },
  created() {
    this.password_data = this.password
  },
}
</script>