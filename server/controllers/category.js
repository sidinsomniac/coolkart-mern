const slugify = require("slugify");
const Category = require("../models/category");
const ExpressError = require("../utils/ExpressError");

module.exports.createCategory = async (req, res) => {
    const { body: { name, parentId } } = req;

    if (!name) throw new ExpressError("Category name cannot be left empty", 400);
    const foundCategory = await Category.findOne({ name });
    if (foundCategory) throw new ExpressError("Category already exists");

    const categoryObj = {
        name,
        slug: slugify(name)
    };

    if (req.file?.path) categoryObj.categoryImage = req.file.path;
    if (parentId) categoryObj.parentId = parentId;

    const newCategory = new Category(categoryObj);
    await newCategory.save();
    res.send(newCategory);
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
            ...(cate.categoryImage && { categoryImage: cate.categoryImage })
        });
    }

    return categoryList;
};