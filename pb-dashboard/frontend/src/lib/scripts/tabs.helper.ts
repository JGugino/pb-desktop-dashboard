import { Writable, writable } from "svelte/store";

export type Tab = {
  tabId: string;
  tabTitle: string;
  active: boolean;
  tabComponent: any;
};

export const activeTabs: Writable<Array<Tab>> = writable([]);

export function createNewTab(id: string, title: string, component: any): Tab {
  return {
    tabId: id,
    tabTitle: title,
    active: true,
    tabComponent: component,
  } as Tab;
}
