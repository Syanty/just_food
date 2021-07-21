<template>
  <input
    type="text"
    placeholder="Last Name"
    class="p-3 border border-gray-300 rounded-md focus:outline-none"
    v-model="lname"
    @input="$emit('updatedLname', lname)"
  />
</template>
<script>
export default {
  props: ["last_name"],
  data() {
    return {
      lname: "",
    };
  },
  created() {
    this.lname = this.last_name;
  },
};
</script>