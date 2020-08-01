<template>
<div>
<div v-for="(item, index) in content" :key="index">
  <div  style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{item.reportName}}</h5>
    <a :href="item.reportUrl" class="card-link">Report link</a>
  </div>
</div>
</div>
</div>
</template>

<script>
import ReportService from '../services/report.service';

export default {
  name: 'Home',
  data() {
    return {
      content: []
    };
  },
  mounted() {
    ReportService.getPublicContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>
