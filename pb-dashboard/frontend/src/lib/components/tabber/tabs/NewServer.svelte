<script lang="ts">
    import Picker from "vanilla-picker";
    import toast, { type ToastOptions } from "svelte-french-toast";
    import { onMount } from "svelte";
    import { createNewServer } from "../../../scripts/servers.helper";

    let serverTitle: string = "";
    let iconColor: string = "#e21b14";

    let options: ToastOptions = { position: "bottom-right" };

    onMount(() => {
        const picker = new Picker({
            parent: document.getElementById(`color-picker`),
            popup: "bottom",
            alpha: false,
        });

        picker.setColor(iconColor, false);

        picker.onChange = (color) => {
            iconColor = color.hex;
        };
    });

    function addNewServer(event: SubmitEvent) {
        const data = new FormData(event.target as HTMLFormElement);

        const title: string = data.get("new-server-title") as string;
        const url: string = data.get("new-server-url") as string;
        const email: string = data.get("new-server-email") as string;
        const password: string = data.get("new-server-password") as string;

        if (title.length <= 0) {
            toast.error("You must enter a server name", options);
        }
        if (url.length <= 0) {
            toast.error("You must enter a valid server url", options);
        }
        if (email.length <= 0) {
            toast.error("You must enter an email", options);
        }
        if (password.length <= 0) {
            toast.error("You must enter a password", options);
        }

        const server = createNewServer(
            title,
            title,
            url,
            email,
            password,
            iconColor,
        );

        if (server) {
            toast.success(`Server (${title}) added`, {
                position: "bottom-right",
            });
        } else {
            toast.error(`Something went wrong, please try again.`, {
                position: "bottom-right",
            });
        }

        const target = event.target as HTMLFormElement;
        target.reset();
    }
</script>

<form on:submit|preventDefault={addNewServer}>
    <!--Server Icon -->
    <div class="server-icon" style="background-color: {iconColor};">
        <button type="button" id="color-picker"
            ><svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <mask
                    id="mask0_2_413"
                    style="mask-type:alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                >
                    <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_2_413)">
                    <path
                        d="M3 20V17.075C3 16.8083 3.05 16.5542 3.15 16.3125C3.25 16.0708 3.39167 15.8583 3.575 15.675L11.95 7.29999L10.5 5.89999L11.95 4.49999L13.85 6.39999L16.95 3.29999C17.0333 3.21666 17.1375 3.14999 17.2625 3.09999C17.3875 3.04999 17.5167 3.02499 17.65 3.02499C17.7833 3.02499 17.9083 3.04999 18.025 3.09999C18.1417 3.14999 18.25 3.21666 18.35 3.29999L20.7 5.64999C20.7833 5.74999 20.85 5.85833 20.9 5.97499C20.95 6.09166 20.975 6.21666 20.975 6.34999C20.975 6.48333 20.95 6.61249 20.9 6.73749C20.85 6.86249 20.7833 6.96666 20.7 7.04999L17.625 10.125L19.525 12.075L18.1 13.5L16.7 12.05L8.325 20.425C8.14167 20.6083 7.92917 20.75 7.6875 20.85C7.44583 20.95 7.19167 21 6.925 21H4C3.71667 21 3.47917 20.9042 3.2875 20.7125C3.09583 20.5208 3 20.2833 3 20ZM5 19H6.95L15.25 10.65L13.35 8.74999L5 17.05V19Z"
                        fill="#FCFCFC"
                    />
                </g>
            </svg>
        </button>
        <span>{(serverTitle.split("")[0] || "-").toUpperCase()}</span>
    </div>

    <div class="inputs">
        <div>
            <!--Server Title -->
            <div class="input">
                <label for="new-server-title">Server Title</label>
                <input
                    type="text"
                    id="new-server-title"
                    name="new-server-title"
                    bind:value={serverTitle}
                    required
                />
            </div>

            <!--Server URL -->
            <div class="input">
                <label for="new-server-title">Server URL</label>
                <input
                    type="url"
                    id="new-server-url"
                    name="new-server-url"
                    value="https://"
                    required
                />
            </div>
        </div>

        <div>
            <!--Admin Email -->
            <div class="input">
                <label for="new-server-title">Admin Email</label>
                <input
                    type="email"
                    id="new-server-email"
                    name="new-server-email"
                    required
                />
            </div>

            <!--Admin Password -->
            <div class="input">
                <label for="new-server-title">Admin Password</label>
                <input
                    type="password"
                    id="new-server-password"
                    name="new-server-password"
                    required
                />
            </div>
        </div>
    </div>

    <button class="add-server-btn" type="submit"
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
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
        height: 100%;
        margin: 10% auto;
        border: 4px solid rgba(31, 31, 31, 80%);
        border-radius: 16px;
        gap: 1.8rem;
        padding: 2rem 0;

        & .server-icon {
            --size: 80px;
            width: var(--size);
            height: var(--size);
            color: #1f1f1f;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 16px;
            font-size: 24pt;
            font-weight: bold;
            position: relative;

            & button {
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: -0.5rem;
                right: -0.5rem;
                background-color: #1f1f1f;
                border: 1px solid #1f1f1f;
                border-radius: 6px;
                padding: 0.1rem;
                cursor: pointer;
            }
        }

        & .inputs {
            width: 80%;
            display: flex;
            justify-content: center;
            align-items: center;

            & div {
                display: flex;
                flex-direction: column;
                width: 100%;
                gap: 1rem;
                & input {
                    width: 100%;
                    max-width: 400px;
                    font-size: 14pt;
                    padding: 1rem 0.2rem;
                    border-radius: 16px;
                    border: 2px solid #1f1f1f;
                }

                & input:focus,
                input:focus-within {
                    outline: none;
                    border-width: 4px;
                }

                & .input {
                    display: flex;
                    flex-direction: column;
                    gap: 0.2rem;
                    width: 100%;
                    max-width: 400px;
                    color: #1f1f1f;
                    text-align: start;
                    justify-content: center;
                    margin: 0 auto;
                }
            }
        }

        & .add-server-btn {
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
    }
</style>
