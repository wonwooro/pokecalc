<template>
    <v-container fluid>
        <v-select v-model="selectedPersonality"
            label="성격을 선택해주세요."
            :items="personalities"
            item-text="name"
            item-value="mod"
            @change="checkPersonality"
            :disabled="disabled"
        />
        <v-simple-table v-if="selectedPersonality" dense>
            <template>
                <thead>
                    <tr>
                        <td>능력치</td>
                        <td>종족값</td>
                        <td>개체치</td>
                        <td>기초포인트 (노력치)</td>
                        <td>실측치 (Lv. 50)</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>HP</td>
                        <td>{{ pokemon.H }}</td>
                        <td>
                            <v-switch v-if="!disabled" v-model="individualStrength.H" :label="(individualStrength.H)?'V':'Z'"/>
                            <span v-else>
                                {{ (individualStrength.H)?'V':'Z' }}
                            </span>
                        </td>
                        <td>
                            <v-slider v-if="!disabled" class="slider" step="4" v-model="basicPoints.H" min="0" max="252" type="number">
                                <template v-slot:append>
                                    <v-text-field
                                        v-model="basicPoints.H"
                                        class="mt-0 pt-0"
                                        hide-details
                                        single-line
                                        type="number"
                                        style="width: 60px"
                                    ></v-text-field>
                                </template>
                            </v-slider>
                            <span v-else>
                                {{ basicPoints.H }}
                            </span>
                        </td>
                        <td>{{ Math.floor(pokemon.H + (basicPoints.H / 4 + ((individualStrength.H)?31:0)) + 60) }}</td>
                    </tr>
                    <tr v-for="l in labels" v-bind:key="l.labels">
                        <td>{{ l.label }}</td>
                        <td>{{ pokemon[l.abbv] }}</td>
                        <td>
                            <v-switch v-if="!disabled" v-model="individualStrength[l.abbv]" :label="(individualStrength[l.abbv])?'V':'Z'"/>
                            <span v-else>
                                {{ (individualStrength[l.abbv])?'V':'Z' }}
                            </span>
                        </td>
                        <td>
                            <v-slider v-if="!disabled" class="slider" step="4" v-model="basicPoints[l.abbv]" min="0" max="252" type="number">
                                <template v-slot:append>
                                    <v-text-field
                                        v-model="basicPoints[l.abbv]"
                                        class="mt-0 pt-0"
                                        hide-details
                                        single-line
                                        type="number"
                                        style="width: 60px"
                                    ></v-text-field>
                                </template>
                            </v-slider>
                            <span v-else>
                                {{ basicPoints[l.abbv] }}
                            </span>
                        </td>
                        <td>
                            <span :style="setTextColor(selectedPersonality.up, selectedPersonality.down, l.abbv)">
                                {{ Math.floor((pokemon[l.abbv] + (basicPoints[l.abbv] / 4 + ((individualStrength[l.abbv])?31:0)) / 2 + 5) * setStatMod(selectedPersonality.up, selectedPersonality.down, l.abbv)) }}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-container>
</template>

<script>
import personalities from '../assets/data/personality.json';
export default {
    name: 'PokemonStatInpufTable',
    props: {
        pokemon: {
            type: Object,
            required: true
        },
        disabled: {
            type: Boolean
        }
    },
    data () {
        return {
            selectedPersonality: null,
            personalities: personalities,
            labels: [
                {label: '공격', abbv: 'A'},
                {label: '방어', abbv: 'B'},
                {label: '특수공격', abbv: 'C'},
                {label: '특수방어', abbv: 'D'},
                {label: '스피드', abbv: 'S'},
            ],
            individualStrength: {
                H: true,
                A: true,
                B: true,
                C: true,
                D: true,
                S: true
            },
            basicPoints: {
                H: 0,
                A: 0,
                B: 0,
                C: 0,
                D: 0,
                S: 0
            }
        };
    },
    methods: {
        checkPersonality () {
            console.log(this.selectedPersonality);
        },
        setTextColor (up, down, abbv) {
            if (up == abbv) {
                return 'color: red;'
            }
            else if (down == abbv) {
                return 'color: blue;'
            }
            else {
                return 'color: black;'
            }
        },
        setStatMod (up, down, abbv) {
            if (up == abbv) {
                return 1.1;
            }
            else if (down == abbv) {
                return 0.9;
            }
            else {
                return 1;
            }
        },
        getStatInfo () {
            return {basicPoints: this.basicPoints, individualStrength: this.individualStrength};
        }
    }
}
</script>