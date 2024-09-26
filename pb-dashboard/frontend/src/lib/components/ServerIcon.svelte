<script lang="ts">
    export let iconText = "";
</script>

<button class="server-icon" on:click>
    <span>{iconText}</span>
</button>

<style>
    .server-icon {
        --size: 60px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: var(--size);
        height: var(--size);
        min-width: var(--size);
        min-height: var(--size);
        background-color: var(--bg-color);
        border: 1px solid var(--bg-color);
        border-radius: 16px;
        font-size: 20pt;
        cursor: pointer;
    }
</style>
