import { get, type Writable, writable } from "svelte/store";

export type Server = {
  serverId: string;
  serverTitle: string;
  serverUrl: string;
  adminEmail: string;
  adminPassword: string;
  iconColor: string;
};

export const servers: Writable<Array<Server>> = writable([]);

export function createNewServer(
  serverId: string,
  serverTitle: string,
  serverUrl: string,
  adminEmail: string,
  adminPassword: string,
  iconColor: string,
): Server {
  const newServer: Server = {
    serverId,
    serverTitle,
    serverUrl,
    adminEmail,
    adminPassword,
    iconColor,
  };

  const serverStore = get(servers);
  let newServers = [...serverStore, newServer];

  servers.set(newServers);

  return newServer;
}
