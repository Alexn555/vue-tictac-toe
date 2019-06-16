<template>
	<td v-bind:class="cellClass" @click="strike">{{ mark }}</td>
</template>

<script lang="ts" src="./cell.ts"> </script>
<style lang="scss" src="./cell.scss"> </style>
