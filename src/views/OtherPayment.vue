<template>
  <div class="other-payment">
<div>
    <input v-model="reservationId" placeholder="Input the reservation">
    <p>Reservation is: {{ reservationId }}</p>
    <button v-on:click="getInfo()">Get info</button>
    <p>Details: {{ detail }}</p>
</div>
<div><hr/></div>
<div>
  <p>Reservation is: {{ reservationId }}</p>
  <p>Amount: {{amount}}</p>
  <button v-on:click="chargeNo()">Post payment now</button>
</div>
  </div>
</template>

<script>
export default {
  name: 'other-payment',
  data() {
      return {
          reservationId: '',
          detail: '',
          amount: '',
      }
  },
  methods: {
    getInfo(){
      this.axios({
        method: 'get',
        url: 'https://rdp-cb.herokuapp.com/resInfo?reservationID=' + this.reservationId,
      }).then((response) => {
        this.detail = response.data
      })
    }
  }
}
</script>
