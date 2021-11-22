<template>
  <div class="Home">
    <h2>{{transaction_id}}</h2>
    <h2>PAYMENT {{status}}</h2>
    <h4>{{message}}</h4>
    <h4>{{response}}</h4>
    <h4>REF <a :href="ref">LINK</a></h4>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
      return {
          transaction_id: this.$route.query.transaction_id,
          status: '',
          ref: '',
          message: '',
          response: '',
      }
  },
  methods: {
    prepareUrl(){
      this.axios.get('https://reqres.in/api/products/' + this.transaction_id).then((response) => {
        this.response = response.data
        this.status = response.data.data.id
        this.message = response.data.data.name
        this.ref = response.data.data.pantone_value
      })
    }
  },
  mounted: function(){
    this.prepareUrl()
  }
}
</script>