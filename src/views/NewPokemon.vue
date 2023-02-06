<template>
    <v-container fluid style="width: 90vw; margin-left: 2.5vw;">
        <v-row>
            <v-col>
                <h1>신규 포켓몬 샘플 생성</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <h2 :class="(pokemonConfirmed)?'confirmed':''">
                    ▶ 1단계: 포켓몬을 선택하세요. 
                    <v-icon v-if="pokemonConfirmed" color="#4aa832">mdi-check</v-icon>
                </h2>
            </v-col>
        </v-row>
        <v-row v-if="!pokemonConfirmed">
            <v-col>
                <pokemon-selector @pokemonChange="pokemonChange" :disabled="pokemonConfirmed"></pokemon-selector>
                <!--
                <type-chip :type="(selectedPokemon) ? selectedPokemon.type_1 : ''" />
                <type-chip :type="(selectedPokemon) ? (selectedPokemon.type_2 ?? '') : ''" />
                -->
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <pokemon-basic-info :pokemon="selectedPokemon"/>
            </v-col>
        </v-row>
        <v-row v-if="!pokemonConfirmed">
            <v-col cols="12"><v-btn width="100%" color="primary" @click="confirmPokemon">결정</v-btn></v-col>
        </v-row>
        <v-row v-if="pokemonConfirmed">
            <v-col>
                <h2 :class="(statConfirmed)?'confirmed':''">
                    ▶ 2단계: 성격, 개체치, 기초 포인트 (노력치) 를 설정하세요.
                    <v-icon v-if="statConfirmed" color="#4aa832">mdi-check</v-icon>
                </h2>
            </v-col>
        </v-row>
        <v-row v-if="pokemonConfirmed">
            <v-col>
                <pokemon-stat-input-table :disabled="statConfirmed" ref="statInputTable" :pokemon="selectedPokemon"/>
            </v-col>
        </v-row>
        <v-row v-if="pokemonConfirmed && !statConfirmed">
            <v-col cols="12"><v-btn width="100%" color="primary" @click="confirmStats">결정</v-btn></v-col>
        </v-row>
        <v-row v-if="statConfirmed" :class="(moveConfirmed)?'confirmed':''">
            <v-col>
                <h2>
                    ▶ 3단계: 기술을 선택하세요.
                    <v-icon v-if="moveConfirmed" color="#4aa832">mdi-check</v-icon>
                </h2>
            </v-col>
        </v-row>
        <v-row v-if="statConfirmed">
            <v-col>
                <pokemon-move-selector :disabled="moveConfirmed"/>
            </v-col>
        </v-row>
        <v-row v-if="statConfirmed && !moveConfirmed">
            <v-col cols="12"><v-btn width="100%" color="primary" @click="confirmStats">결정</v-btn></v-col>
        </v-row>
    </v-container>
</template>

<script>
import PokemonSelector from '../components/PokemonSelector.vue';
import PokemonBasicInfo from '../components/PokemonBasicInfo.vue';
import PokemonStatInputTable from '../components/PokemonStatInputTable.vue';
import PokemonMoveSelector from '../components/PokemonMoveSelector.vue';

//import TypeChip from '../components/TypeChip.vue';

export default {
    name: 'NewPokemon',
    components: { PokemonSelector, PokemonBasicInfo, PokemonStatInputTable, PokemonMoveSelector },
    data () {
        return {
            selectedPokemon: null,
            stats: null,
            pokemonConfirmed: false,
            statConfirmed: false,
            moveConfirmed: false
        }
    },
    methods: {
        pokemonChange (pokemon) {
            this.selectedPokemon = pokemon;
        },
        confirmPokemon () {
            this.pokemonConfirmed = true;
        },
        confirmStats () {
            this.stats = this.$refs.statInputTable.getStatInfo();
            this.statConfirmed = true;
        }
    }
}
</script>

<style scoped>
    .confirmed {
        color: #4aa832;
    }
</style>