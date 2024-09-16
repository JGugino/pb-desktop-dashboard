<script lang="ts">
    import ControlBar from "./lib/components/ControlBar.svelte";
    import TabBar from "./lib/components/TabBar.svelte";
</script>

<div class="app-container">
    <ControlBar />
    <div class="app-content">
        <TabBar />
        <main></main>
    </div>
</div>

<style>
    .app-container {
        min-height: 800px;
        min-width: 1280px;
        overflow: hidden;
    }
</style>
