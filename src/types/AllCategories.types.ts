export type AllCategoriesProps = {
    categoryDesc: string,
    categoryLongDesc: string,
    categoryName:string,
    boxColor: CategoryColor,
    id: string,
    createdAt: string,
    publishedAt:string,
    slug: string,
}

type CategoryColor = {
    hex:string
}