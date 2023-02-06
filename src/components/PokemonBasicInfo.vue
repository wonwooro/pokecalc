<template>
    <v-container fluid>
        <v-row>
            <v-col lg="1" md="2" sm="3" cols="3">
                <img :src="require(`@/assets/img/pokemon/pokemon_gen9_${pokemon.dex_number}.png`)" />
            </v-col>
            <v-col lg="11" md="10" sm="9" cols="9">
                <v-container fluid>
                    <v-row>
                        <v-col>
                            <h3>{{ pokemon.name }} (No. {{ pokemon.dex_number }})</h3>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <type-chip :type="pokemon.type_1"></type-chip>
                            <type-chip :type="pokemon.type_2 ?? ''"></type-chip>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import TypeChip from './TypeChip.vue';
export default {
    name: 'PokemonBasicInfo',
    components: { TypeChip },
    props: {
        pokemon: {
            type: Object,
            required: true
        }
    }
}
</script>