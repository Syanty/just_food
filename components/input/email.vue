<template>
  <input
    type="text"
    class="p-3 border border-gray-300 rounded-md focus:outline-none"
    placeholder="Email address"
    v-model="email_data"
    @input="$emit('updatedemail', email_data)"
  />
</template>
<script>
export default {
  props: ["email"],
  data() {
    return {
      email_data: "",
    };
  },
  created() {
    this.email_data = this.email;
  },
};
</script>