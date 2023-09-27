export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            getThumbnail: (contents: any) => {
                const index = contents?.findIndex((item: any) => item.name === 'image')
                return contents[index]?.content
            },
            getCategoryName: (categoryType: number) => {
                switch (categoryType) {
                    case 1:
                        return 'Game Tech'
                    case 2:
                        return 'Brands'
                    default:
                        return 'Studios'
                }
            },
            limitPosts: (posts: any, limit: number)=>{
                return limit ? posts.slice(0, limit) : posts
            }
        }
    }
})