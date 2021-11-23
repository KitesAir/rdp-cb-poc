<template>
  <div class="Home">
    <h2>{{transaction_id}}</h2>
    <h4>STATUS {{status}}</h4>
    <h4>CLOUDBEDS TRANS ID {{cbid}}</h4>
    <h4>{{response}}</h4>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
      return {
          transaction_id: this.$route.query.transaction_id,
          status: '',
          response: '',
          cbid: '',
      }
  },
  methods: {
    prepareUrl(){
      this.axios.get('https://rdp-cb.herokuapp.com/info?trans=' + this.transaction_id).then((response) => {
        this.response = response.data.response
        this.status = response.data.status
        this.cbid = response.data.transactionIdCB
      })
    }
  },
  mounted: function(){
    this.prepareUrl()
  }
}
</script>
