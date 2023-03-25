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
        name: 'Account',
        components: { LayoutView: () =>  AccountLayout},
        children: [
            { path: 'my-profile', name: 'My profile', components: { contentView: () => import('@/pages/AccountPages/AccountProfilePage.vue') } },
            { path: 'my-orders', name: 'My orders', components: { contentView: () => import('@/pages/AccountPages/AccountOrdersPage.vue') } },
            { path: 'wishlist', name: 'Wishlist', components: { contentView: () => import('@/pages/AccountPages/AccountWishlistPage.vue') } },
            { path: 'recently-viewed', name: 'Recently-viewed', components: { contentView: () => import('@/pages/AccountPages/AccountRecentlyPage.vue') } },
            { path: 'reviews', name: 'Reviews', components: { contentView: () => import('@/pages/AccountPages/AccountReviewsPage.vue') } },
        ]
    },
]