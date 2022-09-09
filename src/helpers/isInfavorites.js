

export const isInfavorite = (created, favorites) => {
        return favorites.some(e => e.created === created)
}   