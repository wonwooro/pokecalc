<template>
    <v-autocomplete
        v-model="selectedName"
        :items="pokemonNameList"
        @change="change"
    >
        <template v-slot:selection="data">
            <img class="pokemon-icon" :src="require(`../assets/img/pokemon/${getImageName(data.item)}`)" />
            <span class="mx-4 text-h6"> {{ data.item }}</span>
        </template>
        <template v-slot:item="data">
            <img class="pokemon-icon" :src="require(`../assets/img/pokemon/${getImageName(data.item)}`)" />
            <span class="mx-4 text-h6"> {{ data.item }} </span>
        </template>
    </v-autocomplete>
</template>

<script>
import pokemonStats from '../assets/data/pokemonStats.json' 

export default {
    name: "PokemonSelector",
    data () {
        return {
            pokemonNameList: pokemonStats.keys,
            pokemonInfo: pokemonStats.body,
            selectedName: '',
            selected: null
        }
    },
    methods: {
        getImageName (name) {
            let number = this.pokemonInfo[name].dex_number;
            let fileName = `pokemon_gen9_${number}.png`;
            return fileName;
        },
        change () {
            this.selected = this.pokemonInfo[this.selectedName];
            this.$emit('pokemonChange', this.selected);
        },
        getSelectedPokemon () {
            return this.selected;
        }
    }
}
</script>

<style>
    .pokemon-icon {
        width: 64px;
        height: 64px;
    }
</style>