function getJokesCategory(data) {
    let allCategories = ['Uncategorized'];
    for (let i = 0; i < data.length; i++) {
        let categoryNames = []
        categoryNames = data[i].categories;
        if (categoryNames.length !== 0) {
            categoryNames.forEach(element => {
                allCategories.push(element)
            });
        }
    }
    let uniqueCategories = new Set(allCategories);
    return [...uniqueCategories];
}

function sortJokes(data) {
    let categories = getJokesCategory(data);
    let jokes = {};
    for (let i = 0; i < categories.length; i++) {
        jokes[categories[i]] = data.filter(ele => (ele.categories.includes(categories[i])));
    }
    jokes.Uncategorized = data.filter(ele => (ele.categories.length === 0));

    return jokes;
}

function limitJokes(data, max) {
    if (data.length > max){
        return data.slice(0, max);
    }
    return data;
}


export {getJokesCategory, sortJokes, limitJokes}
