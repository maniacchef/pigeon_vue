const options = {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
        "Content-Type": "application/json"
    },
    referrerPolicy: "no-referrer"
}

const getCategories = async () => {
    // カテゴリの取得
    try {
        //const response = await fetch("【ts-api-NNNN】/category", options)
        const response = await fetch("http://133.125.42.7:8080/htmlcategory", options)
        return response.json()
    } catch (error) {
        console.error(error)
        return ["カテゴリーを取得できませんでした"]
    }
}

const getAttrs = async () => {
    // 属性の取得
    try {
        //const response = await fetch("【ts-api-NNNN】/car", options)
        const response = await fetch("http://133.125.42.7:8080/htmlattr", options)
        return response.json()
    } catch (error) {
        console.error(error)
        return ["html属性を取得できませんでした"]
    }
}

const getTags = async () => {
    // タグの取得
    try {
        //const response = await fetch("【ts-api-NNNN】/car", options)
        const response = await fetch("http://133.125.42.7:8080/htmltag", options)
        return response.json()
    } catch (error) {
        console.error(error)
        return ["htmlタグを取得できませんでした"]
    }
}

export { getAttrs, getCategories, getTags }
