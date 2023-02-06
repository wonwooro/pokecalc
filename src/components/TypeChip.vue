<template>
    <v-chip v-if="type != ''" class="mx-1" :color="typeColors[type]" dark>
        <v-icon small left>{{ typeIcons[type] }}</v-icon>
        <span>{{ type }}</span>
    </v-chip>
</template>

<script>
export default {
    name: "TypeChip",
    props: {
        type: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            typeColors: {
                '노말': '#ADA594',
                '불꽃': '#E25304',
                '물': '#0267C2',
                '풀': '#389A02',
                '전기': '#EDA900',
                '얼음': '#6dd3f5',
                '격투': '#C03028',
                '독': '#6B246E',
                '땅': '#d97746',
                '비행': '#5D73D4',
                '에스퍼': '#DC3165',
                '벌레': '#888C0E',
                '바위': '#9E863D',
                '고스트': '#695582',
                '드래곤': '#4E3BA4',
                '악': '#3C2D23',
                '강철': '#8E8E9F',
                '페어리': '#E08EE0'
            },
            typeIcons: {
                '노말': '$typeNormal',
                '불꽃': '$typeFire',
                '물': '$typeWater',
                '풀': '$typeGrass',
                '전기': '$typeElectric',
                '얼음': '$typeIce',
                '격투': '$typeFighting',
                '독': '$typePoison',
                '땅': '$typeGround',
                '비행': '$typeFlying',
                '에스퍼': '$typePsychic',
                '벌레': '$typeBug',
                '바위': '$typeRock',
                '고스트': '$typeGhost',
                '드래곤': '$typeDragon',
                '악': '$typeDark',
                '강철': '$typeSteel',
                '페어리': '$typeFairy'
            }
        }
    },
    mounted () {

    }
}
</script>