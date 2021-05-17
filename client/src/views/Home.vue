<template>
  <div class="home">
    <HomeCon></HomeCon>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeCon from "@/components/homecomp.vue";

export default {
  name: "Home",
  components: {
    HomeCon,
  },
};
</script>
