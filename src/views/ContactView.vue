<template >
    <h1>Contacts</h1>

    <div v-for="contact in contacts" :key="contact.nom" class="contact">

        <h2> {{ contact.nom }}</h2>


        <span>{{ contact.numero }} </span>


        <img src="./img/appel.png" @click="ajoutJournal(contact)">


    </div>

</template>
<script>

export default {
    name: 'ContactView',
    computed: {
        contacts() {
            return this.$store.state.contacts

        },
    },

    methods: {
        ajoutJournal(contact) {
            console.log(contact)
            contact.date = new Date()
            let data = {
                nom: contact.nom,
                numero: contact.numero,
                date: contact.date
            }
            this.$store.commit("ajoutJournal",
                data,
            )
        },
    }
}

</script>
<style scoped>
.contact {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-left: 380px;

    font-size: 20px;
    gap: 40px;
    border: 1px solid purple;
    width: 500px
}

.contact h2 {
    font-size: 20px;
    font-weight: 200px;
}

span {
    font-size: 18px;
}

button {
    font-size: 12px;
    width: 80px;
    height: 20px;
}
</style>