<template>
  <div class="about">
    <h1>{{ message }}</h1>
    <p>{{ body }}</p>
  </div>
</template>

<style></style>

<script>
export default {
  data: function() {
    return {
      message: "About us",
      body: "Add some text here when you are done with MVP Stuff  "
    };
  },
  created: function() {},
  methods: {}
};
</script>
