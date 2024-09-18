<script lang="ts">
    import type { Tab } from "./tabs.helper";
    import TabItem from "./Tab.svelte";

    export let tabs: Array<Tab> = [];
</script>

<nav id="tab-bar">
    {#each tabs as tab}
        <TabItem {tab} on:closeTab on:selectTab />
    {/each}
</nav>

<style>
    #tab-bar {
        display: flex;
        align-items: flex-end;
        overflow-x: scroll;
        overflow-y: hidden;
        flex-grow: 1;
        width: 100%;
        min-width: 100%;
        min-height: 50px;
        border-bottom: 4px solid rgba(31, 31, 31, 80%);
        padding: 0 0.6rem;
        gap: 1rem;
    }
</style>
