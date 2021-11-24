<template>
  <div class="Home">
    <h2>{{transaction_id}}</h2>
    <h4>STATUS {{response_msg}}</h4>
    <h4>CLOUDBEDS RES ID {{order_id}}</h4>
    <h4>{{response}}</h4>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
      return {
          transaction_id: this.$route.query.transaction_id,
          response_msg: '',
          response: '',
          order_id: '',
      }
  },
  methods: {
    prepareUrl(){
      this.axios.get('https://rdp-cb.herokuapp.com/info?trans=' + this.transaction_id).then((response) => {
        this.response = response.data
        this.response_msg = response.data.response_msg
        this.order_id = response.data.order_id
      })
    }
  },
  mounted: function(){
    this.prepareUrl()
  }
}
</script>
