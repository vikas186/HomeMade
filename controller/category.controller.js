const Categorymodel = require("../models/category.model");

// Create Category function

exports.createCategory = async (req, res) => {
  try {
    const { categoryName, isStatus } = req.body;

    if (!categoryName && !isStatus) {
      res.status(400).json({ message: "Category data can not be empty!", statusCode:400 });
    }

    const userCategory = new Categorymodel({
      categoryName: categoryName,
      isStatus: isStatus
    });

    const savedUser = await userCategory.save();

    res.status(201).json({ message: "Category data created successfully!", user: savedUser, statusCode:201});
  } catch (err) {
    res.status(500).json({message: "An error occurred while creating category data", statusCode:500});
  }
};

// Find a Category function

exports.getCategory = async (req, res) => {
  try {
    const userCategory = await Categorymodel.findById(req.params.id);
    res.status(200).json({ message: "get a category successfully",statusCode:200, userCategory });
  } catch (error) {
     res.status(404).json({message: "An error occurred while get a category data", statusCode:404});
  }
};

// Findall Category function

exports.getAllCategory = async (req, res) => {
    try {
      const userCategory = await Categorymodel.find();
      res.status(200).json({ message: "get all category list successfully", userCategory, statusCode:200 });
    } catch (error) {
      res.status(404).json({ message: "An error occurred while getall category data", statusCode:404});
    }
  };

// Update Category function

exports.updateCategory = async (req, res) => {
  if (!req.body) {
    res.status(400).json({ message: "category Data to update can not be empty!", statusCode:404});
  }

  const { id, categoryName, isStatus } = req.body;

  await Categorymodel.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        res.status(404).json({message: `Category data not found.`, statusCode:404});
      } else {
        res.status(200).json({ message: "Category data updated successfully.", statusCode:200});
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "An error occurred while updating Category data", statusCode:500});
    });
};

// Delete Category function

exports.destroyCategory = async (req, res) => {
  const { id } = req.body;
  await Categorymodel.findByIdAndRemove(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: `Category data not found.`, statusCode:(404) });
      } else {
        res.status(200).json({ message: "Category data deleted successfully!", statusCode:(200) });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "An error occurred while deleting Category data", statusCode:(500)});
    });
};
