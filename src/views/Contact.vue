<template>
  <div class="contact">
    <h1>{{ message }}</h1>
    <a href="support@betterplants.com?Subject=Hey%There">Send Mail</a>
  </div>
</template>

<style></style>

<script>
export default {
  data: function() {
    return {
      message: "Contact Us!"
    };
  },
  created: function() {},
  methods: {}
};
</script>
