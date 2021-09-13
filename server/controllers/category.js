const slugify = require("slugify");
const Category = require("../models/category");

module.exports.createCategory = async (req, res) => {
    const { body: { name, parentId } } = req;
    const categoryObj = {
        name,
        slug: slugify(name)
    };

    if (parentId) categoryObj.parentId = parentId;

    const newCategory = new Category(categoryObj);
    await newCategory.save();
    res.send("New category created");
};

module.exports.getCategories = async (req, res) => {
    const categories = await Category.find({});
    const categoryList = createCategories(categories);
    res.status(200).json(categoryList);
};

const createCategories = (categories, parentId) => {
    const categoryList = [];
    let category;
    if (parentId == null) {
        category = categories.filter(cat => !cat.parentId);
    } else {
        category = categories.filter(cat => cat.parentId == parentId);
    }

    for (let cate of category) {
        categoryList.push({
            id: cate.id,
            name: cate.name,
            slug: cate.slug,
            parentId: cate.parentId,
            type: cate.type,
            children: createCategories(categories, cate.id),
        });
    }

    return categoryList;
};