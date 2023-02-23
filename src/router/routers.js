const DefaultLayout = import("@/layouts/DefaultLayout.vue");

export const routes = [
    {
        path: '/',
        components: { LayoutView: () => DefaultLayout },
        children: [
            { path: '', components: { contentView: () => import('@/pages/HomePage.vue') } }
        ]
    },
]