<template>
  <div class="relative w-full bg-red-50 h-600">
    <div class="w-full h-full container-fluid">
      <div
        class="absolute grid w-11/12 grid-cols-1 transform -translate-y-1/2  sm:grid-cols-2 left-1/6 top-1/2 h-96"
      >
        <div class="ml-4">
          <h1
            class="font-serif text-2xl font-extrabold leading-10  md:font-bold md:text-4xl"
          >
            Your favourite restaurants <br />
            delivered.
          </h1>
          <h4
            class="mt-2 font-sans text-base font-medium  md:text-lg md:leading-10"
          >
            Enter your address, select food from your favourite restaurant and
            <br class="hidden md:block" />
            we’ll deliver it to your door.
          </h4>

          <div class="flex items-center mt-10">
            <div
              class="flex items-center w-9/12 bg-white border border-r-0 border-red-900  rounded-l-md"
            >
              <input
                type="text"
                placeholder="Enter a location"
                class="w-11/12 p-4 rounded-md focus:outline-none"
              />
              <span
                class="flex items-center justify-center w-1/12 mx-2 cursor-pointer "
              >
                <icon-location class="w-5 h-5 text-red-900"></icon-location>
              </span>
            </div>
            <button
              class="w-3/12 border border-red-900  min-w-max btn_large rounded-r-md"
            >
              Find Food
            </button>
          </div>
          <div class="absolute bottom-0">
            <h4 class="text-lg font-semibold">Popular Cities</h4>
            <div class="flex items-center mt-5">
              <button class="btn_sm">Kathmandu</button>
              <button class="btn_sm">Lalitpur</button>
              <button class="btn_sm">Bhaktapur</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.btn_sm {
  margin-right: 1rem;
}
</style>