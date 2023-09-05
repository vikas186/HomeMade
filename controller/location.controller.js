const Locationmodel = require("../models/location.model");

// Create location function

exports.createLocation = async (req, res) => {
  try {
    const { cityName , isStatus, latitute, longitute, } = req.body;

    if (!cityName  && !isStatus && !latitute && !longitute) {
      res.status(400).json({ message: "location data can not be empty!", statusCode:400 });
    }

    const userLocation = new Locationmodel({
      cityName:cityName,
      isStatus:isStatus,
      latitute:latitute,
      longitute:longitute
    });

    const savedUser = await userLocation.save();

    res.status(201).json({ message: "Location data created successfully!", user: savedUser, statusCode:201});
  } catch (err) {
    res.status(500).json({message: "An error occurred while creating Location data", statusCode:500});
  }
};

// get a location function

exports.getLocation = async (req, res) => {
  try {
    const userLocation = await Locationmodel.findById(req.params.id);
    res.status(200).json({ message: "get a Location successfully", userLocation, statusCode:200});
  } catch (error) {
     res.status(404).json({message: "An error occurred while finding a location data", statusCode:404});
  }
};

// getall Location function

exports.getAllLocation = async (req, res) => {
    try {
      const userLocation = await Locationmodel.find();
      res.status(200).json({ message: "get all location list successfully", userLocation, statusCode:200 });
    } catch (error) {
      res.status(404).json({ message: "An error occurred while get all location data", statusCode:404});
    }
  };

// Update location function

exports.updateLocation = async (req, res) => {
    if (!req.body) {
      res.status(400).json({ message: "Location Data to update can not be empty!", statusCode:404});
    }
  
    const { id, cityName , isStatus, latitute, longitute, } = req.body;
  
    await Locationmodel.findByIdAndUpdate(id, req.body, {
      useFindAndModify: false,
    })
      .then((data) => {
        if (!data) {
          res.status(404).json({message: `Location data not found.`, statusCode:404});
        } else {
          res.status(200).json({ message: "location data updated successfully.", statusCode:200});
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "An error occurred while updating location data", statusCode:500});
      });
  };

// Delete Location function

exports.destroyLocation = async (req, res) => {
  const { id } = req.body;
  await Locationmodel.findByIdAndRemove(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: `Location data not found.`, statusCode:(404) });
      } else {
        res.status(200).json({ message: "Location data deleted successfully!", statusCode:(200) });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "An error occurred while deleting Location data", statusCode:(500)});
    });
};
