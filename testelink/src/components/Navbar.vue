<template>
  <nav>
    <v-toolbar flat app>

      <img :src="require('../assets/logo-link.png')" class="white--text img-ajust" />
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <div class="absolute">
        <v-btn flat slot="activator" color="white">
          <span>Leonardo</span>
          <v-icon left>expand_more</v-icon>
        </v-btn>
        <v-btn flat slot="activator" color="white">
          <span>#main</span>
          <v-icon left>expand_more</v-icon>
        </v-btn>
        <v-btn flat slot="activator" color="white">
          <span>Builder</span>
          <v-icon left>expand_more</v-icon>
        </v-btn>
        <v-btn flat slot="activator" color="white">
          <span>Destribution</span>
          <v-icon left>expand_more</v-icon>
        </v-btn>
        <v-btn flat slot="activator" color="white">
          <span>monitoring</span>
          <v-icon left>expand_more</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </div>

      <v-btn flat color="white" background-color="green">
        <span>Get help</span>
      <img :src="require('../assets/logo-link.png')" class="white--text img-ajust end-img" />
        <v-icon right>expand_more</v-icon>
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
     
    };
  }
};
</script>

<style scoped>
.background-drop {
  background: green;
}
::v-deep .v-toolbar__content {
  background-color: #36C185 !important;
  height: 30px !important;
}
.img-ajust {
  width: 30px;
  height: 30px;
}
.absolute {
  position: absolute;
  margin-top: 5px;
  left: 5%;
}
.absolute span{
  font-size: 10px;
}
.end-img{
  margin-left: 15px;
}::v-deep .v-icon{
  font-size: 15px!important;
}


</style>
