<template>
    <v-simple-table dense>
        <template>
            <thead>
                <tr>
                    <td>기술1</td><td>기술2</td><td>기술3</td><td>기술4</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td v-for="(l, i) in labels" v-bind:key="i">
                        <v-autocomplete v-model="selectedMoves[l]" :items="moveNameList"></v-autocomplete>
                    </td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
import moves from '../assets/data/moves.json';
export default {
    name: 'PokemonMoveSelector.vue',
    props: {
        disabled: {
            type: Boolean
        }
    },
    data () {
        return {
            moveNameList: moves.keys,
            moveList: moves.body,
            labels: ['move1', 'move2', 'move3', 'move4'],
            selectedMoves: {
                move1: null,
                move2: null,
                move3: null,
                move4: null
            }
        }
    }
}
</script>