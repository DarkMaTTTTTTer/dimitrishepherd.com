import { defineStore } from "pinia";

export const useRouteStore = defineStore({
  id: "routeStore",
  state: () => ({
    currentRoutePath: "",
  }),

  actions: {},
});
