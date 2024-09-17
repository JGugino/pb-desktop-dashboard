<script lang="ts">
    import type { Tab } from "../scripts/tabs.helper";
    import TabItem from "./Tab.svelte";

    export let tabs: Array<Tab> = [];
</script>

<nav id="tab-bar">
    {#each tabs as tab}
        <TabItem {tab} on:closeTab />
    {/each}
</nav>

<style>
    #tab-bar {
        display: flex;
        align-items: flex-end;
        min-height: 50px;
        border-bottom: 4px solid rgba(31, 31, 31, 80%);
        padding: 0 0.6rem;
        gap: 1rem;
    }
</style>
