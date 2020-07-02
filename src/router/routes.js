import Vue from "vue";
import Router from "vue-router";
import Welcome from "@/welcome/Welcome";
import PackageList from "@/welcome/packages";
import PrivacyPolicy from "@/pages/others/PrivacyPolicy";

// sign up
import Signup1 from "@/pages/auth/signup/Signup1";
import Signup2 from "@/pages/auth/signup/Signup2";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "Welcome",
      component: Welcome
    },

    {
      path: "/price-list",
      name: "price_list",
      component: PackageList
    },
    {
      path: "/privacy-policy",
      name: "PrivacyPolicy",
      component: PrivacyPolicy
    },
    {
      path: "/signup-1",
      name: "Signup-1",
      component: Signup1
    },
    {
      path: "/signup-2",
      name: "Signup-2",
      component: Signup2
    },
  ]
});
