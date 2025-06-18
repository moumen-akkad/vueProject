import { createRouter, createWebHistory } from "vue-router";
import CompanyIdentification from "../views/CompanyIdentification.vue";
import NotFound from "../views/NotFound.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/company/id",
      name: "companyId",
      component: CompanyIdentification
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }

  ]
});
