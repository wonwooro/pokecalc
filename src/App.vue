<template>
  <v-app id="inspire">
    <v-navigation-drawer
      app
      class="pt-4"
      color="grey lighten-3"
      mini-variant
    >
      <v-avatar size="50" class="d-block text-center mx-auto mb-2">
        <img src="./assets/img/masterball.png"/>
      </v-avatar>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="m in menu" v-bind:key="m" style="padding: 0; margin: 0">
          <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
              <v-btn :href="m.path" class="mx-auto mt-2 mb-2" fab small color="secondary" v-bind="attrs" v-on="on">
                <v-icon>{{m.icon}}</v-icon>
              </v-btn>
            </template>
            <span>{{ m.tooltip }}</span>
          </v-tooltip>
        </v-list-item>
      </v-list>
      
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menu: [
        {path: "#/", tooltip: "홈으로", icon: "mdi-home"},
        {path: "#/box", tooltip: "포켓몬 박스", icon: "mdi-archive"},
        {path: "#/pokedex", tooltip: "포켓몬 도감", icon: "mdi-book"},
        {path: "#/teams", tooltip: "대전 팀 관리", icon: "mdi-group"}
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
