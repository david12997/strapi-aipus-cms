module.exports = ({ env }) => ({
    // ...
    seo: {
        enabled: true,
    },
    "rest-cache": {
        config: {
          provider: {
            name: "memory",
            getTimeout:500,
            options: {
              max: 32767,
              maxAge: 3600,
            },
          },
          strategy: {
            contentTypes: [
                // list of Content-Types UID to cache
                "api::service.service",
                "api::product.product",
                "api::store.store",
                "api::tourism.tourism",
                "api::post.post",
                "api::category.category",
                "api::subcategory.subcategory",
                "api::page.page",
                "api::component.component",
                "api::place.place",
                "api::route.route",
                "api::point.point",
            ],
          },
        },
      },
    // ...
});