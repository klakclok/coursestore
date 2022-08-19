<template>
  <div class="claims">
    <h2 v-if="claims.length === 0" style="color: black">
      Нет заявок
    </h2>
    <div v-for="claim in claims" :key="claim.id" class="claim" v-else>
      <div
        @click="deleteClaim(claim.id)"
        class="delete-btn"
      ></div>
      <div class="claim__row">
        <span>Фамилия</span>
        <p>{{ claim.surname }}</p>
      </div>

      <div class="claim__row">
        <span>Имя</span>
        <p>{{ claim.name }}</p>
      </div>

      <div class="claim__row">
        <span>Отчество</span>
        <p>{{ claim.patronymic }}</p>
      </div>

      <div class="claim__row">
        <span>Телефон</span>
        <p>{{ claim.phone }}</p>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Claims",
  data() {
    return {
      claims: []
    }
  },
  methods: {
    deleteClaim(id) {
      axios({
        url: `https://8bit.comrades.dev/api/claim/delete/${id}`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(() => {
        this.claims = this.claims.filter(item => item.id !== id)
        this.getClaims()
        console.log(this.claims)
      }).catch(err => {
        console.log(err)
      })
    },
    getClaims() {
      axios({
        url: 'https://8bit.comrades.dev/api/claims',
        method: "GET"
      }).then((response) => {
        this.claims = response.data
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.getClaims()
  }
}
</script>

<style lang="scss" scoped>
@import '~materialize-css/dist/css/materialize.min.css';
@import '@/assets/styles/index.css';
.claims {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.delete-btn {
  right: 0;
  top: 0;
  display: none;
  position: absolute;
  cursor: pointer;
  content: url("@/assets/images/svg/delete-ico.svg");
  z-index: 2;
}

.claim:hover {
  > .delete-btn {
    display: inline;
  }
}

.claim {
  position: relative;
  width: 330px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0 0 6px 6px rgba(0, 0, 0, .4);

  &__row {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, .4);
    border-radius: 10px;
    padding: 0 10px;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, .4);

    > span {

    }
  }
}

</style>
