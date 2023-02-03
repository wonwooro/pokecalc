<template>
    <v-container fluid>
        <h1>New Pokemon</h1>
        <pokemon-selector></pokemon-selector>
    </v-container>
</template>

<script>
import PokemonSelector from '../components/PokemonSelector.vue';

export default {
    name: 'NewPokemon',
    components: { PokemonSelector },
    data () {
        return {

        }
    }
}
</script>

<style scoped>

</style>