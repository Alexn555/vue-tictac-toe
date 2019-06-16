<template>
	<div>
		<div class="gameStatus" :class="gameStatusColor">
			{{ gameStatusMessage }}
		</div>
		<table class="grid">
		  <tr>
		    <cell name="1"></cell>
		    <cell name="2"></cell>
		    <cell name="3"></cell>
		  </tr>
		  <tr>
		    <cell name="4"></cell>
		    <cell name="5"></cell>
		    <cell name="6"></cell>
		  </tr>
		  <tr>
		    <cell name="7"></cell>
		    <cell name="8"></cell>
		    <cell name="9"></cell>
		  </tr>
		</table>
	</div>
</template>

<script lang="ts" src="./grid.ts"> </script>
<style lang="scss" src="./grid.scss"> </style>