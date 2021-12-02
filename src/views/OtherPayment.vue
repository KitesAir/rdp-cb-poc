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
  <p>Amount: <input v-model="amount" placeholder="Input amount"></p>
  <button v-on:click="postPayment()">Generate PAYMENT link</button>
  <br/>
  <a v-bind:href="paymentLink">{{paymentLink}}</a>
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
          paymentLink: '#',
      }
  },
  methods: {
    getInfo(){
      this.axios({
        method: 'get',
        url: 'https://rdp-cb.herokuapp.com/resInfo?reservationID=' + this.reservationId,
      }).then((response) => {
        this.detail = response.data,
        this.amount = response.data.data.balance
      })
    },
    postPayment(){
      this.axios({
        method: 'post',
        url: 'https://rdp-cb.herokuapp.com/genPaymentPage',
        data: {
          reservationId: this.reservationId,
          amount: this.amount.toString()
        }
      }).then((response) => {
        this.paymentLink = response.data.redirect
      })
    },
  }
}
</script>
