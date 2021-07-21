<template>
  <input
    type="number"
    class="p-3 border border-gray-300 rounded-md focus:outline-none"
    placeholder="Phone number"
    v-model="phone_data"
    @input="$emit('updatedPhone', phone_data)"
  />
</template>
<script>
export default {
  props: ["phone"],
  data() {
    return {
      phone_data: "",
    };
  },
  created() {
    this.phone_data = this.phone;
  },
};
</script>