<script>
    import ServerIcon from "./ServerIcon.svelte";
</script>

<div id="control-bar">
    <div id="bar-header">
        <button class="add-server-btn"
            ><svg
                width="52"
                height="48"
                viewBox="0 0 52 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <mask
                    id="mask0_2_376"
                    style="mask-type:alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="52"
                    height="48"
                >
                    <rect width="51.5556" height="48" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_2_376)">
                    <path
                        d="M23.6297 26V32C23.6297 32.5667 23.8355 33.0417 24.2473 33.425C24.659 33.8083 25.1692 34 25.7778 34C26.3864 34 26.8966 33.8083 27.3084 33.425C27.7201 33.0417 27.926 32.5667 27.926 32V26H34.3704C34.979 26 35.4892 25.8083 35.901 25.425C36.3127 25.0417 36.5185 24.5667 36.5185 24C36.5185 23.4333 36.3127 22.9583 35.901 22.575C35.4892 22.1917 34.979 22 34.3704 22H27.926V16C27.926 15.4333 27.7201 14.9583 27.3084 14.575C26.8966 14.1917 26.3864 14 25.7778 14C25.1692 14 24.659 14.1917 24.2473 14.575C23.8355 14.9583 23.6297 15.4333 23.6297 16V22H17.1852C16.5766 22 16.0664 22.1917 15.6547 22.575C15.2429 22.9583 15.0371 23.4333 15.0371 24C15.0371 24.5667 15.2429 25.0417 15.6547 25.425C16.0664 25.8083 16.5766 26 17.1852 26H23.6297ZM25.7778 44C22.8062 44 20.0136 43.475 17.4 42.425C14.7864 41.375 12.513 39.95 10.5797 38.15C8.64633 36.35 7.11577 34.2333 5.98799 31.8C4.86021 29.3667 4.29633 26.7667 4.29633 24C4.29633 21.2333 4.86021 18.6333 5.98799 16.2C7.11577 13.7667 8.64633 11.65 10.5797 9.85C12.513 8.05 14.7864 6.625 17.4 5.575C20.0136 4.525 22.8062 4 25.7778 4C28.7494 4 31.542 4.525 34.1556 5.575C36.7692 6.625 39.0426 8.05 40.976 9.85C42.9093 11.65 44.4398 13.7667 45.5676 16.2C46.6954 18.6333 47.2593 21.2333 47.2593 24C47.2593 26.7667 46.6954 29.3667 45.5676 31.8C44.4398 34.2333 42.9093 36.35 40.976 38.15C39.0426 39.95 36.7692 41.375 34.1556 42.425C31.542 43.475 28.7494 44 25.7778 44Z"
                        fill="#1C1B1F"
                    />
                </g>
            </svg>
        </button>
    </div>
    <div id="bar-content">
        <ServerIcon />
    </div>
    <div id="bar-footer">
        <!--Expand Control Bar Icon -->
        <button class="plain-btn">
            <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <mask
                    id="mask0_2_370"
                    style="mask-type:alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="48"
                    height="48"
                >
                    <rect width="48" height="48" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_2_370)">
                    <path
                        d="M23 29.6V18.4C23 17.9333 22.8 17.6167 22.4 17.45C22 17.2833 21.6333 17.3667 21.3 17.7L16.4 22.6C16 23 15.8 23.4667 15.8 24C15.8 24.5333 16 25 16.4 25.4L21.3 30.3C21.6333 30.6333 22 30.7167 22.4 30.55C22.8 30.3833 23 30.0667 23 29.6ZM10 42C8.9 42 7.95833 41.6083 7.175 40.825C6.39167 40.0417 6 39.1 6 38V10C6 8.9 6.39167 7.95833 7.175 7.175C7.95833 6.39167 8.9 6 10 6H38C39.1 6 40.0417 6.39167 40.825 7.175C41.6083 7.95833 42 8.9 42 10V38C42 39.1 41.6083 40.0417 40.825 40.825C40.0417 41.6083 39.1 42 38 42H10ZM32 38H38V10H32V38ZM28 38V10H10V38H28Z"
                        fill="#1F1F1F"
                    />
                </g>
            </svg>
        </button>

        <!--Profile Icon -->
        <button class="plain-btn">
            <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0_2_197)">
                    <mask
                        id="mask0_2_197"
                        style="mask-type:luminance"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="60"
                        height="60"
                    >
                        <path d="M60 0H0V60H60V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_2_197)">
                        <path d="M60 0H0V60H60V0Z" fill="#F0F0D8" />
                        <path
                            d="M23.8226 68.2011L67.3254 47.9154C73.3319 45.1145 75.9306 37.9748 73.1297 31.9683L52.844 -11.5345C50.0431 -17.541 42.9034 -20.1396 36.8969 -17.3388L-6.60587 2.94692C-12.6124 5.74779 -15.211 12.8876 -12.4101 18.894L7.87553 62.3968C10.6764 68.4033 17.8162 71.002 23.8226 68.2011Z"
                            fill="black"
                        />
                        <path
                            d="M30.4548 29.345C33.9982 29.7234 37.293 29.2346 40.3393 27.8786"
                            stroke="white"
                            stroke-width="3.55556"
                            stroke-linecap="round"
                        />
                        <path
                            d="M30.1887 18.3907C29.9844 17.6531 29.3618 17.2495 28.7982 17.4891C28.2346 17.7287 27.9433 18.5209 28.1476 19.2584C28.3519 19.9959 28.9745 20.3996 29.5381 20.1599C30.1017 19.9203 30.393 19.1282 30.1887 18.3907Z"
                            fill="white"
                        />
                        <path
                            d="M40.1507 17.5191C39.9464 16.7816 39.3238 16.3779 38.7602 16.6175C38.1965 16.8571 37.9053 17.6493 38.1096 18.3868C38.3139 19.1243 38.9364 19.528 39.5001 19.2884C40.0637 19.0487 40.355 18.2566 40.1507 17.5191Z"
                            fill="white"
                        />
                    </g>
                </g>
                <defs>
                    <clipPath id="clip0_2_197">
                        <rect width="60" height="60" rx="30" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </button>
    </div>
</div>

<style>
    #control-bar {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        min-height: 800px;
        max-width: 90px;
        overflow: hidden;
        border-right: 4px solid rgba(31, 31, 31, 80%);
        padding: 0.8rem 0.4rem;

        & #bar-header {
            width: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-items: center;
            border-bottom: 4px solid rgba(31, 31, 31, 80%);
            padding-bottom: 0.6rem;

            & .add-server-btn {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background-color: var(--background-color--primary);
                border: 2px solid #1f1f1f;
                border-radius: 16px;
                padding: 0.2rem;
                cursor: pointer;

                & svg {
                    --size: 52px;
                    width: var(--size);
                    height: var(--size);
                }
            }
        }

        & #bar-content {
            height: 100%;
            max-height: 540px;
            display: flex;
            flex-grow: 1;
            flex-direction: column;
            padding: 0.6rem 0;
            overflow-y: scroll;
            overflow-x: hidden;
            gap: 1rem;
        }

        & #bar-footer {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            border-top: 4px solid rgba(31, 31, 31, 80%);
            padding-top: 0.6rem;
            width: 90%;
            & svg {
                --size: 52px;
                width: var(--size);
                height: var(--size);
            }

            & .plain-btn {
                background-color: var(--background-color--primary);
                border: 0;
                cursor: pointer;
            }
        }
    }
</style>
