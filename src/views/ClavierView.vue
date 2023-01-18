<template >
  <h1>Appeler</h1>

  <div class="clavier">

    <p> {{ numero }}</p>
    <div>
      <button @click="ajoutNum('1')">1</button>
      <button @click="ajoutNum('2')">2</button>
      <button @click="ajoutNum('3')">3</button>
    </div>
    <div>
      <button @click="ajoutNum('4')">4</button>
      <button @click="ajoutNum('5')">5</button>
      <button @click="ajoutNum('6')">6</button>
    </div>
    <div>
      <button @click="ajoutNum('7')">7</button>
      <button @click="ajoutNum('8')">8</button>
      <button @click="ajoutNum('9')">9</button>
    </div>
    <button @click="ajoutNum('0')">0</button>

  </div>
  <div class="submit">
    <button @click="addJournal(numero)">Appeler</button>
    <button @click="effacerNum()">Effacer</button>
  </div>

</template>
<script>
export default {
  data() {
    return {
      numero: ''
    }
  },
  methods: {
    ajoutNum(num) {
      this.numero = this.numero + num
    },
    effacerNum() {
      this.numero = ''
    },
    addJournal() {
      let data = {
        nom: '',
        numero: this.numero,
        date: new Date()

      }
      this.$store.commit('ajoutJournal', data,
        // -> add date + heure
      )
    },
  }

}
</script>
<style >
h1 {
  font-size: 20px;

}

.clavier {
  font-size: 20px;
  background-color: white;
}

button {
  color: purple;
  width: 50px;
  height: 50px;
  font-size: medium;
}
button:hover {
  background-color: purple;
  color: white;
}
.submit {
  padding-top: 20px;
  height: 40px;
  gap: 40px
}

.submit button {
  width: 80px;
  gap: 40px;
  height: 30px;
color:purple;
}

.submit button:hover {
  background-color: purple;
  color: white;
}
</style>