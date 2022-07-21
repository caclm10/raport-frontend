export const generateSearchParam = (keyword, url) => {
    const queryParams = url.split('?')[1]

    let urlSearchParams = new URLSearchParams()

    if (queryParams) urlSearchParams = new URLSearchParams(queryParams)

    urlSearchParams.set('search', keyword)

    return urlSearchParams.toString()
}