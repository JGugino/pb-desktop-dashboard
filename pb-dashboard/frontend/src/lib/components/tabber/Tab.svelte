<script lang="ts">
    import { type Tab } from "./tabs.helper";
    import { createEventDispatcher } from "svelte";

    export let tab: Tab = {
        tabId: "example-tab",
        tabTitle: "Example Tab",
        active: false,
        tabComponent: null,
    };

    const dispatch = createEventDispatcher();
</script>

<button
    id="tab"
    class:active={tab.active}
    on:click|preventDefault={() => {
        if (tab.tabId) {
            dispatch("selectTab", tab.tabId);
        }
    }}
>
    <span>{tab.tabTitle}</span>
    <button
        class="close-btn"
        on:click|preventDefault|stopPropagation={() => {
            console.log(tab);
            dispatch("closeTab", tab.tabId);
        }}
        ><svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <mask
                id="mask0_2_147"
                style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="18"
                height="18"
            >
                <rect width="18" height="18" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_2_147)">
                <path
                    d="M9 10.05L11.175 12.225C11.3125 12.3625 11.4875 12.4312 11.7 12.4312C11.9125 12.4312 12.0875 12.3625 12.225 12.225C12.3625 12.0875 12.4312 11.9125 12.4312 11.7C12.4312 11.4875 12.3625 11.3125 12.225 11.175L10.05 9L12.225 6.825C12.3625 6.6875 12.4312 6.5125 12.4312 6.3C12.4312 6.0875 12.3625 5.9125 12.225 5.775C12.0875 5.6375 11.9125 5.56875 11.7 5.56875C11.4875 5.56875 11.3125 5.6375 11.175 5.775L9 7.95L6.825 5.775C6.6875 5.6375 6.5125 5.56875 6.3 5.56875C6.0875 5.56875 5.9125 5.6375 5.775 5.775C5.6375 5.9125 5.56875 6.0875 5.56875 6.3C5.56875 6.5125 5.6375 6.6875 5.775 6.825L7.95 9L5.775 11.175C5.6375 11.3125 5.56875 11.4875 5.56875 11.7C5.56875 11.9125 5.6375 12.0875 5.775 12.225C5.9125 12.3625 6.0875 12.4312 6.3 12.4312C6.5125 12.4312 6.6875 12.3625 6.825 12.225L9 10.05ZM9 16.5C7.9625 16.5 6.9875 16.3031 6.075 15.9094C5.1625 15.5156 4.36875 14.9813 3.69375 14.3063C3.01875 13.6313 2.48438 12.8375 2.09063 11.925C1.69687 11.0125 1.5 10.0375 1.5 9C1.5 7.9625 1.69687 6.9875 2.09063 6.075C2.48438 5.1625 3.01875 4.36875 3.69375 3.69375C4.36875 3.01875 5.1625 2.48438 6.075 2.09063C6.9875 1.69687 7.9625 1.5 9 1.5C10.0375 1.5 11.0125 1.69687 11.925 2.09063C12.8375 2.48438 13.6313 3.01875 14.3063 3.69375C14.9813 4.36875 15.5156 5.1625 15.9094 6.075C16.3031 6.9875 16.5 7.9625 16.5 9C16.5 10.0375 16.3031 11.0125 15.9094 11.925C15.5156 12.8375 14.9813 13.6313 14.3063 14.3063C13.6313 14.9813 12.8375 15.5156 11.925 15.9094C11.0125 16.3031 10.0375 16.5 9 16.5ZM9 15C10.675 15 12.0938 14.4187 13.2563 13.2563C14.4187 12.0938 15 10.675 15 9C15 7.325 14.4187 5.90625 13.2563 4.74375C12.0938 3.58125 10.675 3 9 3C7.325 3 5.90625 3.58125 4.74375 4.74375C3.58125 5.90625 3 7.325 3 9C3 10.675 3.58125 12.0938 4.74375 13.2563C5.90625 14.4187 7.325 15 9 15Z"
                    fill="#CA0202"
                />
            </g>
        </svg>
    </button>
</button>

<style>
    #tab {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        color: #1f1f1f;
        background-color: #fcfcfc;
        border: 2px solid rgba(31, 31, 31, 80%);
        border-bottom: transparent;
        padding: 0.2rem 0.4rem;
        border-radius: 16px 16px 0 0;

        &.active {
            border-width: 4px;
        }

        & .close-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--background-color--primary);
            border: none;
            cursor: pointer;
        }
    }
</style>
