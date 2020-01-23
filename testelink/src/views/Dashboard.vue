<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">
      <v-layout row wrap class="reference">
        <v-flex xs12 md4>
          <h2>Monthly overview</h2>
          <v-card class="border-purple">
            <div class="content">
              <div class="caption purple--text bold title">Remaining Transactions</div>
              <div class="caption grey--text subtitle">Renew on 2020-01-25</div>
              <v-progress-linear
                active="true"
                buffer-value="50"
                height="10px"
                rounded="true"
                value="25%"
                color="purple"
              ></v-progress-linear>
              <h1>99,964</h1>
            </div>
          </v-card>
        </v-flex>
        <v-flex xs4 md2>
          <h2>Monthly overview</h2>
          <v-card class="border-gray">
            <div class="content">
              <div class="caption purple--text bold title">Remaining Transactions</div>
              <div class="caption grey--text subtitle">Renew on 2020-01-25</div>
              <h1>99,964</h1>
            </div>
          </v-card>
        </v-flex>
        <v-flex xs4 md2>
          <v-card class="border-blue">
            <div class="content">
              <div class="caption purple--text bold title">Remaining Transactions</div>
              <div class="caption grey--text subtitle">Renew on 2020-01-25</div>
              <h1>99,964</h1>
            </div>
          </v-card>
        </v-flex>
        <v-flex xs4 md2>
          <v-card class="border-green">
            <div class="content">
              <div class="caption purple--text bold title">Remaining Transactions</div>
              <div class="caption grey--text subtitle">Renew on 2020-01-25</div>
              <h1>99,964</h1>
            </div>
          </v-card>
        </v-flex>
        <v-flex xs4 md2>
          <v-card class="border-red">
            <div class="content">
              <div class="caption purple--text bold title">Remaining Transactions</div>
              <div class="caption grey--text subtitle">Renew on 2020-01-25</div>
              <h1>99,964</h1>
            </div>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs4 md3>
          <v-btn outline block class="success">1</v-btn>
          <div class="caption grey--text">Project title</div>
          <span class="caption text-lowercase">By project name</span>
        </v-flex>
        <v-flex xs4 md3>
          <v-btn outline block class="success">2</v-btn>
        </v-flex>
        <v-flex xs4 md3>
          <v-btn outline block class="success">2</v-btn>
        </v-flex>
      </v-layout>

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

      <v-layout column nowrap class="aside">
        <v-flex xs4 md6>
          <v-btn outline block class="success">1</v-btn>
        </v-flex>
        <v-flex xs4 md6>
          <v-btn outline block class="success">2</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.border-purple {
  border-top: 4px solid purple !important;
  height: 200px;
}
.border-gray {
  border-top: 4px solid gray !important;
}
.border-blue {
  border-top: 4px solid rgb(60, 162, 196) !important;
}
.border-green {
  border-top: 4px solid green !important;
}
.border-red {
  border-top: 4px solid red !important;
}
.aside {
  width: 25%;
  position: absolute;
  right: 0;
  top: 70%;
}
.bold {
  font-weight: 900;
}
.title {
  font-size: 15px !important;
}
.subtitle {
  font-size: 10px !important;
}
.content {
  margin-left: 3%;
}
::v-deep .v-flex {
  margin-left: 5px% !important;
}

::v-deep .container {
  vertical-align: middle !important;
}
</style>
