module.exports = [
  "strapi::errors",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "frame-src": ["'self'", `https://www.youtube.com`],
          "img-src": ["'self'", "data:", "blob:", `https://i.ytimg.com`],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
