<script lang="ts">
    import { createNewTab, activeTabs, type Tab } from "../scripts/tabs.helper";
    import TabBar from "./TabBar.svelte";
    import NewServer from "./tabs/NewServer.svelte";

    let activeTab: Tab = $activeTabs.length > 0 ? activeTabs[0] : null;

    function addNewTabAndSetActive(id: string, title: string, component: any) {
        const newTab = createNewTab(id, title, component);
        $activeTabs = [...$activeTabs, newTab];
        if (activeTab != null) {
            activeTab.active = false;
            let filtered = $activeTabs.filter(
                (t) => t.tabId != activeTab.tabId,
            );
            $activeTabs = [...filtered, activeTab];
            activeTab = newTab;
        } else {
            activeTab = newTab;
        }
    }

    function closeTab(event: CustomEvent) {
        const tabId = event.detail;

        if (tabId.length <= 0) return;

        let filtered = $activeTabs.filter((t) => t.tabId != activeTab.tabId);
        $activeTabs = filtered;

        if ($activeTabs.length > 0) {
            activeTab = $activeTabs[0];
        } else {
            activeTab = null;
        }
    }
</script>

<div id="tabber">
    <TabBar bind:tabs={$activeTabs} on:closeTab={closeTab} />

    <div>
        {#if activeTab === null || activeTab.tabComponent === null}
            <p class="empty-txt">
                Looks a little empty, maybe try adding a new server!
                <button
                    class="add-server-btn"
                    on:click|preventDefault={() => {
                        addNewTabAndSetActive(
                            `add-server-${$activeTabs.length + 1}`,
                            "Add New Server",
                            NewServer,
                        );
                    }}
                    ><svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <mask
                            id="mask0_2_170"
                            style="mask-type:alpha"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="34"
                            height="34"
                        >
                            <rect width="34" height="34" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_2_170)">
                            <path
                                d="M15.5834 18.4167V22.6667C15.5834 23.0681 15.7191 23.4045 15.9907 23.676C16.2622 23.9476 16.5987 24.0833 17 24.0833C17.4014 24.0833 17.7379 23.9476 18.0094 23.676C18.2809 23.4045 18.4167 23.0681 18.4167 22.6667V18.4167H22.6667C23.0681 18.4167 23.4046 18.2809 23.6761 18.0094C23.9476 17.7378 24.0834 17.4014 24.0834 17C24.0834 16.5986 23.9476 16.2621 23.6761 15.9906C23.4046 15.7191 23.0681 15.5833 22.6667 15.5833H18.4167V11.3333C18.4167 10.9319 18.2809 10.5955 18.0094 10.324C17.7379 10.0524 17.4014 9.91666 17 9.91666C16.5987 9.91666 16.2622 10.0524 15.9907 10.324C15.7191 10.5955 15.5834 10.9319 15.5834 11.3333V15.5833H11.3334C10.932 15.5833 10.5955 15.7191 10.324 15.9906C10.0525 16.2621 9.91671 16.5986 9.91671 17C9.91671 17.4014 10.0525 17.7378 10.324 18.0094C10.5955 18.2809 10.932 18.4167 11.3334 18.4167H15.5834ZM17 31.1667C15.0403 31.1667 13.1987 30.7948 11.475 30.051C9.75143 29.3073 8.25212 28.2979 6.97712 27.0229C5.70212 25.7479 4.69275 24.2486 3.949 22.525C3.20525 20.8014 2.83337 18.9597 2.83337 17C2.83337 15.0403 3.20525 13.1986 3.949 11.475C4.69275 9.75138 5.70212 8.25208 6.97712 6.97708C8.25212 5.70208 9.75143 4.6927 11.475 3.94895C13.1987 3.2052 15.0403 2.83333 17 2.83333C18.9598 2.83333 20.8014 3.2052 22.525 3.94895C24.2487 4.6927 25.748 5.70208 27.023 6.97708C28.298 8.25208 29.3073 9.75138 30.0511 11.475C30.7948 13.1986 31.1667 15.0403 31.1667 17C31.1667 18.9597 30.7948 20.8014 30.0511 22.525C29.3073 24.2486 28.298 25.7479 27.023 27.0229C25.748 28.2979 24.2487 29.3073 22.525 30.051C20.8014 30.7948 18.9598 31.1667 17 31.1667Z"
                                fill="#FCFCFC"
                            />
                        </g>
                    </svg>
                    Add server</button
                >
            </p>
        {:else}
            <svelte:component this={activeTab.tabComponent} />
        {/if}
    </div>
</div>

<style>
    .empty-txt {
        color: #1f1f1f;
        font-size: 22pt;
        text-align: center;
        margin-top: 12rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }

    .add-server-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.4rem 2rem;
        gap: 1rem;
        font-size: 16pt;
        border-radius: 16px;
        background-color: #1f1f1f;
        color: #fcfcfc;
        font-weight: 500;
        border: 1px solid #1f1f1f;
        cursor: pointer;
    }
</style>
