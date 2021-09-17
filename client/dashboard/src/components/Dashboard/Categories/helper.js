export const renderCategoryList = categories => {
    let categoryList = [];
    for (let category of categories) {
        if (category.children.length) {
            categoryList.push(<li>{category.name}{renderCategoryList(category.children)}</li>);
        } else {
            categoryList.push(<li>{category.name}</li>);
        }
    }
    return <ul>{categoryList}</ul>;
};