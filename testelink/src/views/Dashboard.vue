<template>
  <div class="dashboard">
    <!-- Fist card -------------------------------------------------->
    <div class="my-2">
      <v-layout row wrap justify-space-around align-end class="space-bottom">
        <v-flex xs12 md3 class="first">
          <h2>Monthly overview</h2>
          <v-card class="border-purple pa-3">
            <div class="content">
              <div class="caption purple--text bold title">Remaining Transactions</div>
              <div class="caption grey--text subtitle">Renew on 2020-01-25</div>
              <h1>99,964</h1>
              <v-progress-linear
                active="true"
                buffer-value="100"
                height="10px"
                value="50%"
                color="purple"
                class="rounded"
              ></v-progress-linear>
            </div>
          </v-card>
        </v-flex>

        <!-- SECOND CARD - GRAY ----------------------------------------------->

        <v-flex xs4 md2>
          <h2>December</h2>
          <v-card class="border-gray pa-2">
            <div class="content">
              <div class="caption black--text bold title">Active Jobs</div>
              <div class="caption grey--text subtitle">view all jobs</div>
              <h1>12</h1>
            </div>
          </v-card>

          <!-- THIRD CARD - BLUE --------------------------------------------->
        </v-flex>
        <v-flex xs4 md2>
          <v-card class="border-blue pa-2">
            <div class="content">
              <div class="caption blue--text bold title">Active Tenants</div>
              <div class="caption grey--text subtitle">view all tenants</div>
              <h1>1</h1>
            </div>
          </v-card>
        </v-flex>

        <!-- FOUR CARD - GREEN ------------------------------------------------>

        <v-flex xs4 md2 align-self-auto>
          <v-card class="border-green pa-2">
            <div class="content">
              <div class="caption green--text bold title">Sucess</div>
              <div class="caption grey--text subtitle">December</div>
              <h1>99,91%</h1>
            </div>
          </v-card>
        </v-flex>

        <!-- FIVE CARD - RED  ---------------------------------------------------->

        <v-flex xs4 md2>
          <v-card class="border-red pa-2">
            <div class="content">
              <div class="caption red--text bold title">Error</div>
              <div class="caption grey--text subtitle">December</div>
              <h1>00,09%</h1>
            </div>
          </v-card>
        </v-flex>
      </v-layout>

      <!------------------------------- 2 Session ---------------------------------------------------------->

      <v-layout row wrap justify-space-around align-init>
        <v-flex xs4 md3>
            <h2>Transactions</h2>
          <v-card class="border-green pa-2">
            <div class="content">
              <div class="caption green--text bold title">Sucess</div>
              <div class="caption grey--text subtitle">December</div>
              <h1>99,91%</h1>
            </div>
          </v-card>
        </v-flex>

        <v-flex xs4 md3 class="middle">
            <h2 style="visibility: hidden;">.</h2>
          <v-card class="border-red pa-2">
            <div class="content">
              <div class="caption red--text bold title">Error</div>
              <div class="caption grey--text subtitle">December</div>
              <h1>00,09%</h1>
            </div>
          </v-card>
        </v-flex>
        <v-flex xs4 md3 class="middle">
            <h2 style="visibility: hidden;">.</h2>
          <v-card class="border-gray pa-2">
            <div class="content">
              <div class="caption black--text bold left-border-yellow">Reject <span class="pos-percent">0%</span></div>
              <div class="caption black--text bold left-border-purple">alert<span class="pos-percent">0%</span></div>
              <div class="caption black--text bold left-border-gray">empty<span class="pos-percent">0%</span></div>
            </div>
          </v-card>
        </v-flex>
        <v-flex xs4 md3 align-center>
            <h2>Jobs Running</h2>
          <v-card class="left-border-green pa-2 aside">
            <div class="content">
              <h4>No jobs-runing</h4>
            </div>
          </v-card>
        </v-flex>
      </v-layout>

      <!---------------------------- 3 session ------------------------------------------------------------>

      <v-layout row wrap justify-space-around>
        <v-flex xs4 md3>
            <h2>Jobs</h2>
          <v-card class="border-gray pa-2 top">
            <div class="content">
              <div class="caption black--text bold title">create products</div>
              <div class="caption grey--text subtitle">See logs</div>
              <h1>99,91%</h1>
            </div>
          </v-card>
        </v-flex>

        <v-flex xs4 md3 class="middle ">
            <h2 style="visibility: hidden; ">.</h2>
          <v-card class="border-gray pa-2 top">
            <div class="content">
              <div class="caption black--text bold title">peopleSync</div>
              <div class="caption grey--text subtitle">See logs</div>
              <h1>00,09%</h1>
            </div>
          </v-card>
        </v-flex>
        <v-flex xs4 md3 class="middle aside">
            <h2 style="visibility: hidden;">.</h2>
          <v-card class="border-gray pa-2 top">
            <div class="content">
              <div class="caption black--text bold title">engageSync</div>
              <div class="caption grey--text subtitle">See logs</div>
              <h1>00,09%</h1>
            </div>
          </v-card>
        </v-flex>
        <v-flex xs4 md3 align-center>
            <h2>Tenant error overview</h2>
          <v-card class="border-blue pa-2 aside">
            <div class="content">
              <h4></h4>
            </div>
          </v-card>
        </v-flex>
      </v-layout>

      <!----------------------------------- 4 session ----------------------------------------------->

      <v-layout row wrap>
        <v-flex xs4 md3>
          <v-btn outline block class="success">1</v-btn>
        </v-flex>
        <v-flex xs4 md3>
          <v-btn outline block class="success">2</v-btn>
        </v-flex>
        <v-flex xs4 md3>
          <v-btn outline block class="success">2</v-btn>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    data = []
  },
  created() {

  this.$http.get('http://localhost:3000/data')
      .then(res => res.json())  
      .then(data => this.data);
      console.log(data)
  }


};
</script>

<style>
/* Borders and sizes */

.border-purple {
  height: 150px;
  border-top: 4px solid purple !important;
}
.border-gray {
  height: 100px;
  border-top: 4px solid gray !important;
}
.border-blue {
  height: 100px;
  border-top: 4px solid rgb(60, 162, 196) !important;
}
.border-green {
  height: 100px;
  border-top: 4px solid green !important;
}
.border-red {
  height: 100px;
  border-top: 4px solid red !important;
}
.left-border-yellow{
  border-left: 3px solid yellow;
  font-size: 10px!important;
  margin: 5px
}
.left-border-purple {
  border-left: 3px solid purple !important;
  font-size: 10px!important;
  margin: 5px
}
.left-border-gray {
  border-left: 3px solid gray !important;
  font-size: 10px!important;
  margin: 5px
}
.left-border-green {
  border-left: 3px solid green !important;

}
/* aside cards positions */
.aside {
  height: 200px;
}
.top{
  height: 200px;

}
/* position globals */
.space-bottom {
  margin-bottom: 5%;
}
.pos-percent{
  position: absolute; 
  right: 2%;
}
/* fonts edits */
.bold {
  font-weight: 900;
}
.title {
  font-size: 15px !important;
}
.subtitle {
  font-size: 10px !important;
}
/* vuetify defalut modifications */
::v-deep .container {
  vertical-align: middle !important;
}
.middle{
  max-width: 22%!important;
}
.rounded {
  border-radius: 5px;
}
</style>
