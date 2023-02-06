<template>
    <v-container fluid>
        <h1>New Pokemon</h1>
        <pokemon-selector @pokemonChange="pokemonChange"></pokemon-selector>
        <type-chip :type="(selectedPokemon)? selectedPokemon.type_1:''" />
        <type-chip :type="(selectedPokemon)? (selectedPokemon.type_2 ?? ''):''" />
    </v-container>
</template>

<script>
import PokemonSelector from '../components/PokemonSelector.vue';
import TypeChip from '../components/TypeChip.vue';

export default {
    name: 'NewPokemon',
    components: { PokemonSelector, TypeChip },
    data () {
        return {
            selectedPokemon: null
        }
    },
    methods: {
        pokemonChange (pokemon) {
            this.selectedPokemon = pokemon;
        }
    }
}
</script>

<style scoped>

</style>