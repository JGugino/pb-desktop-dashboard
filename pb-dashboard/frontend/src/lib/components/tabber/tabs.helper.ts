import toast from "svelte-french-toast";
import { get, type Writable, writable } from "svelte/store";

export type Tab = {
  tabId: string;
  tabTitle: string;
  active: boolean;
  tabComponent: any;
};

export const activeTabs: Writable<Array<Tab>> = writable([]);
export const activeTab: Writable<Tab> = writable();

export function createNewTab(id: string, title: string, component: any): Tab {
  return {
    tabId: id,
    tabTitle: title,
    active: true,
    tabComponent: component,
  } as Tab;
}

export function addNewTabAndSetActive(
  id: string,
  title: string,
  component: any,
) {
  const newTab = createNewTab(id, title, component);
  let tabs: Array<Tab> = get(activeTabs);

  if (tabs.length < 7) {
    let tab: Tab = get(activeTab);
    tabs = [...tabs, newTab];
    if (tab != null) {
      tabs = tabs.map((t) => {
        if (t.tabId === tab.tabId) {
          t.active = false;
        }

        return t;
      });
      tab = newTab;
    } else {
      tab = newTab;
    }

    activeTabs.set(tabs);
    activeTab.set(tab);
  } else {
    toast.error("You've reached the max number of tabs!", {
      position: "bottom-right",
    });
  }
}

export function selectTab(event: CustomEvent) {
  const tabId = event.detail;

  if (tabId.length <= 0) return;

  let tabs = get(activeTabs);
  let tab = get(activeTab);
  let newTab: Tab;
  tabs = tabs.map((t) => {
    if (t.tabId === tab.tabId) {
      t.active = false;
    } else if (t.tabId === tabId) {
      newTab = t;
      t.active = true;
    }

    return t;
  });

  activeTabs.set(tabs);
  activeTab.set(newTab);
}

export function closeTab(event: CustomEvent) {
  const tabId = event.detail;

  if (tabId.length <= 0) return;

  let tabs: Array<Tab> = get(activeTabs);
  let tab: Tab = get(activeTab);

  let closingTabIndex: number = tabs.indexOf(tab);

  let filtered = tabs.filter((t) => t.tabId != tab.tabId);

  if (filtered.length > 0) {
    if (closingTabIndex - 1 >= 0) {
      filtered[closingTabIndex - 1].active = true;
      tab = filtered[closingTabIndex - 1];
    } else {
      filtered[0].active = true;
      tab = filtered[0];
    }
  } else {
    tab = null;
  }

  activeTabs.set(filtered);
  activeTab.set(tab);
}
