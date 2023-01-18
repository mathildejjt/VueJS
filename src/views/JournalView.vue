<template>
  <h1>Journal d'appel</h1>

  <div v-for="j in journal" :key="j.contact" class="journal">
    {{ j.nom }}  <br>
    {{ j.numero }} 
    {{ j.contact }}
    
  </div>

</template>

<script>


export default {
  computed: {
    journal() {
      console.log(this.$store.state.journal)
      return this.$store.state.journal

    },
  }
}
</script>

<style>

.journal {
color: purple;
border: 1px solid purple;
padding: 10px;
width: 400px;
display: flex;
justify-content: center;
align-items: center;
margin-left: 410px;
font-weight: 400;
}
</style>