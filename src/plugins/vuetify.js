import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import typeBug from '../components/typeIcons/typeBug.vue';
import typeDark from '../components/typeIcons/typeDark.vue';
import typeDragon from '../components/typeIcons/typeDragon.vue';
import typeElectric from '../components/typeIcons/typeElectric.vue';
import typeFairy from '../components/typeIcons/typeFairy.vue';
import typeFighting from '../components/typeIcons/typeFighting.vue';
import typeFire from '../components/typeIcons/typeFire.vue';
import typeFlying from '../components/typeIcons/typeFlying.vue';
import typeGhost from '../components/typeIcons/typeGhost.vue';
import typeGrass from '../components/typeIcons/typeGrass.vue';
import typeGround from '../components/typeIcons/typeGround.vue';
import typeIce from '../components/typeIcons/typeIce.vue';
import typeNormal from '../components/typeIcons/typeNormal.vue';
import typePoison from '../components/typeIcons/typePoison.vue';
import typePsychic from '../components/typeIcons/typePsychic.vue';
import typeRock from '../components/typeIcons/typeRock.vue';
import typeSteel from '../components/typeIcons/typeSteel.vue';
import typeWater from '../components/typeIcons/typeWater.vue';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        values: {
            typeNormal: { component: typeNormal },
            typeBug: { component: typeBug },
            typeDark: { component: typeDark },
            typeDragon: { component: typeDragon },
            typeElectric: { component: typeElectric },
            typeFairy: { component: typeFairy },
            typeFighting: { component: typeFighting },
            typeFire: { component: typeFire },
            typeFlying: { component: typeFlying },
            typeGhost: { component: typeGhost },
            typeGrass: { component: typeGrass },
            typeGround: { component: typeGround },
            typeIce: { component: typeIce },
            typePoison: { component: typePoison },
            typePsychic: { component: typePsychic },
            typeRock: { component: typeRock },
            typeSteel: { component: typeSteel },
            typeWater: { component: typeWater },
        }
    }
});
