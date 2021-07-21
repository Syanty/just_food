<template>
  <input
    type="text"
    placeholder="First Name"
    class="p-3 border border-gray-300 rounded-md focus:outline-none"
    v-model="fname"
    @input="$emit('updatedFname', fname)"
  />
</template>
<script>
export default {
  props: ["first_name"],
  data() {
    return {
      fname: "",
    };
  },
  created() {
    this.fname = this.first_name;
  },
};
</script>