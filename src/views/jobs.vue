<template>
  <div class="jobs">
    <h1 class="jobsHead">JOBS</h1>
    <div class="jobWrapper">
    <div v-for="job in jobs" :key="job.id" class="jobHead">
      <h2 >  {{job.title}}   {{job.details}} </h2>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "jobsView",
  data() {
    return {
      jobs: [
        { title: "Ux Designer", id: 1, details: "loream" },
        { title: "Web Developer", id: 2, details: "loream" },
        { title: "Node Developer", id: 3, details: "Korean" },
      ],
    };
  },
  components: {},
};
</script>

<style scoped>
.jobsHead{
    margin-top: 40px;
    font-size: 50px;
    letter-spacing: 1px;
}
.jobWrapper{
    margin-top: 50px;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
}
.jobHead{
    font-size: 20px;
    margin-top: 10px;
    width: 35%;
    background-color: #d4d6d9;
    color: #3f4040;
    border-radius: 5px;
}
</style>