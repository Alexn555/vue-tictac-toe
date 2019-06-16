<template>
  <div>
    <div class="scoreBoard" @click="toggleSound">
      <h2> Score Board <span v-if="toggleSounds" class="soundToggle"> Sound {{soundsOn}} </span> </h2>
    </div>
    <div id="app">
      <div class="row">
        <div class="column left">
          <span class="o-win"> O </span>
          <span> {{ wins.O }} </span>
          <cup name="o-cup" playerClass="o-cup" :wins="wins.O"></cup>
        </div>

        <div class="column middle">
          <div class="details">
            <h2>Match #{{ matchCount + 1 }}</h2>
          </div>
          <grid></grid>
          <button class="restart" @click="restart">Restart</button>
        </div>

        <div class="column right">
          <span class="x-win"> X </span>
          <span>{{ wins.X }}</span>
          <cup name="x-cup" playerClass="x-cup" :wins="wins.X"></cup>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" src="./app.ts"> </script>
<style lang="scss" src="./app.scss"></style>
