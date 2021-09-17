export const renderCategoryList = (categories, cb) => {
    let categoryList = [];
    for (let category of categories) {
        if (category.children.length) {
            categoryList.push(<li key={category.id}><div className="category-badge" onClick={() => cb(category)}>{category.name}</div>{renderCategoryList(category.children, cb)}</li>);
        } else {
            categoryList.push(<li key={category.id}><div className="category-badge" onClick={() => cb(category)}>{category.name}</div></li>);
        }
    }
    return <ul>{categoryList}</ul>;
};