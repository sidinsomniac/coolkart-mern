export const getPeripheralCategories = categories => {
    const categoryList = [];
    for (let category of categories) {
        if (category.children.length) {
            categoryList.push(...getPeripheralCategories(category.children));
        } else {
            categoryList.push(category);
        }
    }
    return categoryList;
};

export const parseDescription = description => {
    return description.split(". ");
};