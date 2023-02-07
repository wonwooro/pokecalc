<template>
    <v-simple-table>
        <template>
            <thead>
                <tr>
                    <td colspan="2" style="text-align:center;">기술1</td>
                    <td colspan="2" style="text-align:center;">기술2</td>
                    <td colspan="2" style="text-align:center;">기술3</td>
                    <td colspan="2" style="text-align:center;">기술4</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="2" style="text-align:center;" v-for="(l, i) in labels" v-bind:key="i">
                        <v-autocomplete @change="setMoves" v-model="selectedMoveNames[l]" :items="moveNameList"></v-autocomplete>
                    </td>
                </tr>
                <tr>
                    <td style="text-align:center;">타입</td>
                    <td style="text-align:center;"><type-chip :type="(selectedMoves.move1)?selectedMoves.move1.type:''" /></td>
                    <td style="text-align:center;">타입</td>
                    <td style="text-align:center;"><type-chip :type="(selectedMoves.move2)?selectedMoves.move2.type:''" /></td>
                    <td style="text-align:center;">타입</td>
                    <td style="text-align:center;"><type-chip :type="(selectedMoves.move3)?selectedMoves.move3.type:''" /></td>
                    <td style="text-align:center;">타입</td>
                    <td style="text-align:center;"><type-chip :type="(selectedMoves.move4)?selectedMoves.move4.type:''" /></td>
                </tr>
                <tr>
                    <td style="text-align:center;">유형</td>
                    <td style="text-align:center;">{{ (selectedMoves.move1)?selectedMoves.move1.class:'' }}</td>
                    <td style="text-align:center;">유형</td>
                    <td style="text-align:center;">{{ (selectedMoves.move2)?selectedMoves.move2.class:'' }}</td>
                    <td style="text-align:center;">유형</td>
                    <td style="text-align:center;">{{ (selectedMoves.move3)?selectedMoves.move3.class:'' }}</td>
                    <td style="text-align:center;">유형</td>
                    <td style="text-align:center;">{{ (selectedMoves.move4)?selectedMoves.move4.class:'' }}</td>
                </tr>
                <tr>
                    <td style="text-align:center;">위력</td>
                    <td style="text-align:center;">{{ (selectedMoves.move1)?selectedMoves.move1.power:'' }}</td>
                    <td style="text-align:center;">위력</td>
                    <td style="text-align:center;">{{ (selectedMoves.move2)?selectedMoves.move2.power:'' }}</td>
                    <td style="text-align:center;">위력</td>
                    <td style="text-align:center;">{{ (selectedMoves.move3)?selectedMoves.move3.power:'' }}</td>
                    <td style="text-align:center;">위력</td>
                    <td style="text-align:center;">{{ (selectedMoves.move4)?selectedMoves.move4.power:'' }}</td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
import moves from '../assets/data/moves.json';
import TypeChip from './TypeChip.vue';

export default {
    name: 'PokemonMoveSelector.vue',
    components: { TypeChip },
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
            selectedMoveNames: {
                move1: null,
                move2: null,
                move3: null,
                move4: null
            },
            selectedMoves: {
                move1: null,
                move2: null,
                move3: null,
                move4: null
            }
        }
    },
    methods: {
        setMoves () {
            for (let i = 0; i < this.labels.length; i++) {
                this.selectedMoves[this.labels[i]] = this.moveList[this.selectedMoveNames[this.labels[i]]];
            }
            console.log(this.selectedMoves);
        }
    }
}
</script>

<style scoped>
    .green {
        background-color: green;
    }
</style>