// Для работы с данными, с подсчётами
export const getPageCount = (totalCount, limit) =>{
    return Math.floor(totalCount / limit)
}