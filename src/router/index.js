import Vue from "vue";
import VueRouter from "vue-router";

import PageHome from "../views/PageHome.vue";
import PageCoc from "../views/PageCoc.vue";
import PageExtras from "../views/PageExtras.vue";
import PagePastEvents from "../views/PagePastEvents.vue";
import PagePress from "../views/PagePress.vue";
import PageSessions from "../views/PageSessions.vue";
import PageSessionSingle from "../views/PageSessionSingle.vue";
import PageSpeakers from "../views/PageSpeakers.vue";
import PageSpeakerSingle from "../views/PageSpeakerSingle.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "pagehome",
    component: PageHome,
    meta: {
      layout: "home"
    }
  },
  {
    path: "/code-of-conduct",
    name: "PageCoc",
    component: PageCoc,
    meta: {
      title: "Code Of Conduct"
    }
  },
  {
    path: "/extras",
    name: "PageExtras",
    component: PageExtras,
    meta: {
      title: "Extras"
    }
  },
  {
    path: "/past-events",
    name: "PagePastEvents",
    component: PagePastEvents,
    meta: {
      title: "Past Events"
    }
  },
  {
    path: "/press",
    name: "PagePress",
    component: PagePress,
    meta: {
      title: "Press Materials"
    }
  },
  {
    path: "/sessions",
    name: "PageSessions",
    component: PageSessions,
    meta: {
      layout: "full",
      title: "Sessions"
    }
  },
  {
    path: "/session/:id",
    name: "session",
    component: PageSessionSingle,
    meta: {
      title: "Session",
      layout: "full"
    }
  },
  {
    path: "/speakers",
    name: "PageSpeakers",
    component: PageSpeakers,
    meta: {
      layout: "full",
      title: "Speakers"
    }
  },
  {
    path: "/speaker/:id",
    name: "speaker",
    component: PageSpeakerSingle,
    meta: {
      title: "Speaker"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        offset: { x: 0, y: 10 }
      };
    }
  }
});

export default router;
