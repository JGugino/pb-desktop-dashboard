<script lang="ts">
    import { Toaster } from "svelte-french-toast";
    import ControlBar from "./lib/components/ControlBar.svelte";
    import Tabber from "./lib/components/tabber/Tabber.svelte";
</script>

<Toaster />
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
