<template>
  <div class="jobDetails">
    <h1>This is job details.</h1>
    <h1>job id: {{ id }}</h1>
  </div>
</template>

<script>
export default {
  name: "jobDetails",
  components: {},
  props: ["id"],
};
</script>