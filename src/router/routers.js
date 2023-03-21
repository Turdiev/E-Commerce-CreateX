const DefaultLayout = import("@/layouts/DefaultLayout.vue");
const AccountLayout = import("@/layouts/AccountLayout.vue");

export const routes = [
    {
        path: '/',
        components: { LayoutView: () => DefaultLayout },
        children: [
            { path: '', components: { contentView: () => import('@/pages/HomePage.vue') } }
        ]
    },
    {
        path: '/account/',
        components: { LayoutView: () =>  AccountLayout},
        children: [
            { path: 'my-profile', components: { contentView: () => import('@/pages/AccountPages/AccountProfilePage.vue') } },
            { path: 'my-orders', components: { contentView: () => import('@/pages/AccountPages/AccountOrdersPage.vue') } },
            { path: 'my-wishlist', components: { contentView: () => import('@/pages/AccountPages/AccountWishlistPage.vue') } },
            { path: 'my-recently-viewed', components: { contentView: () => import('@/pages/AccountPages/AccountRecentlyPage.vue') } },
            { path: 'my-reviews', components: { contentView: () => import('@/pages/AccountPages/AccountReviewsPage.vue') } },
        ]
    },
]