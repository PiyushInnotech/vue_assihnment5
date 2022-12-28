<template>
  <div class="jobId">
    <h1>These are job details</h1>
    <h1>JobId: {{jobId}}</h1>
  </div>
</template>

<script>
export default {
  name: "jobId",
  components: {},
  props: ['jobId']
};
</script>