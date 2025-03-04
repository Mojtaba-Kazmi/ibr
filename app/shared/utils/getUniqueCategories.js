export function getUniqueCategories(allPosts) {
    return ["All", ...new Set(allPosts.map((post) => post.category))];
}