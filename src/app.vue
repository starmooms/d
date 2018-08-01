<template>
    <p>{{ a }}</p>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {
    a = 'ddd'
}
</script>

