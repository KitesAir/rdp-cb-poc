<template>
  <div class="init">
    <h1>Prepare URL payment link for {{resId}}</h1>
    <div class="loader"></div>
  </div>
</template>

<style>
.loader {
    margin: 0 auto;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

<script>
export default {
  name: 'Home',
  data() {
      return {
          resId: this.$route.query.resId,
          back: this.$route.query.back,
      }
  },
  methods: {
    prepareUrl(){
      this.axios({
        method: 'post',
        url: 'https://rdp-cb.herokuapp.com/payment',
        data: {
          reservationId: this.resId,
          targetUrl: this.back
        }
      }).then((response) => {
        console.log(response.data)
        window.location.href = response.data.redirect
      })
    }
  },
  beforeMount: function(){
    this.prepareUrl()
  }
}
</script>
