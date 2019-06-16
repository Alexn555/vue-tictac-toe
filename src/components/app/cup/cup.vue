<template>
    <div class="cup-wrapper">
        <ul v-bind:class="playerClass" v-for="(value, name) in wins">
            <li class="cup-holder-img" width="25" height="25">
                {{ name }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" src="./cup.ts"></script>
<style lang="scss" src="./cup.scss"></style>