const Productmodel = require("../models/product.model");



// Create Product function


exports.createProduct = async (req, res) => {
  try {
    const file = req.file;
    // console.log(file);
    const { title, content, phone, userRating , categoryID, latitute, longitute } = req.body;
    

    if (!categoryID && !title && !content && !latitute  && !longitute && !phone && !userRating) {
      res.status(400).json({ message: "Product data can not be empty!", statusCode:400 });
    }

    const userProduct = new Productmodel({
      phone:phone,
      categoryID: categoryID.split(','),
      image: file.filename,
      title: title,
      content: content,
      userRating:userRating,
      latitute: latitute,
      longitute: longitute
    });
    
    const savedUser = await userProduct.save();

    res.status(201).json({ message: "Product data created successfully!", userProduct: savedUser, statusCode:201});
  } catch (err) {res.status(500).json({message: "An error occurred while creating Product data", statusCode:500});
  }
};


// Get a Product function


exports.getProduct = async (req, res) => {
  try {
    const userProduct = await Productmodel.findById(req.params.id);
    res.status(200).json({ message: "Get a Product data successfully", userProduct, statusCode:200});
  } catch (error) {
    res.status(404).json({message: "An error occurred while getting a Product data", statusCode:404});
  }
};


//  Get all Product function


exports.getAllProduct = async (req, res) => {
  
  try {
    // const userProduct = await Productmodel.aggregate([
    //   {
    //     $lookup: {
    //       from: "Category", // Replace with your actual collection name
    //       localField: "categoryID",
    //       foreignField: "_id",
    //       as: "catelist"
    //     }
    //   },
    //   {
    //     $project: {
    //       _id: 0, // Exclude the _id field
    //       image: 1,
    //       latitute: 1,
    //       longitute: 1,
    //       title: 1,
    //       phone: 1,
    //       content: 1,
    //       userRating: 1,
    //       created_at: 1,
    //       updated_at: 1,
    //       categoryID: 1, // Include the categoryID field
    //       "catelist.categoryName": 1
    //     }
    //   }
    // ]);
const userdata = await Productmodel.find().populate({'path': "categoryID", select:{ "isStatus": 0, "updated_at": 0, "created_at": 0, "__v": 0, }});

    res.status(200).json({ message: "Get all Product list successfully", userdata, statusCode: 200 });
  } catch (error) {
    res.status(500).json({ message: "An error occurred while getting all Product data", statusCode: 500 });
  }
};




// Update Product function


exports.updateProduct = async (req, res) => {
    const { id, title, content, phone, userRating, categoryID, latitude, longitude } = req.body;
    const file = req.file;
  
    try {
      const userProduct = await Productmodel.findOne({ _id: id });
  
      if (!userProduct) {
        return res.status(404).json({ message: "Product data not found.", statusCode: 404 });
      }
  
      const updateData = {
        title: title,
        content: content,
        categoryID: categoryID.split(','),
        phone: phone,
        userRating: userRating,
        longitude: longitude,
        latitude: latitude,
      };
  
      if (file) {
        updateData.image = file.filename;
      }
  
      const updatedProduct = await Productmodel.findByIdAndUpdate(id, updateData);
  
      if (!updatedProduct) {
        return res.status(404).json({ message: "Product data not found.", statusCode: 404 });
      }
  
      return res.status(200).json({ message: "Product data updated successfully.", statusCode: 200 });
    } catch (err) {
      console.error(err); // Log the error for debugging purposes
      return res.status(500).json({ message: "An error occurred while updating Product data", statusCode: 500 });
    }
  };
  

// Delete Product function


exports.destroyProduct = async (req, res) => {
  const { id } = req.body;
  await Productmodel.findByIdAndRemove(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).json({message: `Product data not found.`, statusCode:404});
      } else {
        res.status(200).json({ message: "Product data updated successfully.", statusCode:200});
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "An error occurred while deleting Product data", statusCode:500});
    });
};


