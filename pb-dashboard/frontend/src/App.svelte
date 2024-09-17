<script lang="ts">
    import ControlBar from "./lib/components/ControlBar.svelte";
    import Tabber from "./lib/components/Tabber.svelte";
</script>

<div class="app-container">
    <ControlBar />
    <div class="app-content">
        <Tabber />
    </div>
</div>

<style>
    .app-container {
        display: flex;
        min-height: 800px;
        min-width: 1280px;
        overflow: hidden;

        & .app-content {
            width: 100%;
            height: 100%;
        }
    }
</style>
