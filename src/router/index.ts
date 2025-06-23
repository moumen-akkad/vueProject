import { createRouter, createWebHistory } from "vue-router";
import CompanyIdentification from "../views/CompanyIdentification.vue";
import BankAccounts from "../views/BankAccounts.vue";
import DigitalInterfaces from "../views/DigitalInterfaces.vue";
import BusinessReportFigures from "../views/BusinessReportFigures.vue";
import CompanyGovernance from "../views/CompanyGovernance.vue";
import NotFound from "../views/NotFound.vue";
import HomeView from "../views/HomeView.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: 'home',
      component: HomeView
    },
    {
      path: "/company/id",
      name: "companyId",
      component: CompanyIdentification
    },
    
    {
      path: "/company/banks",
      name: "bank",
      component: BankAccounts
    },
    {
      path: "/company/digital",
      name: "digital",
      component: DigitalInterfaces
    },
    {
      path: "/company/reports",
      name: "reports",
      component: BusinessReportFigures
    },
    {
      path: "/company/gov",
      name: "gov",
      component: CompanyGovernance
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
});
