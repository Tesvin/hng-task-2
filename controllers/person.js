const Person = require('../model/personModel.js')


//Create a Person resource
exports.createPerson = async (req, res, next) => {    
const { name } = req.body;
    if (!name || typeof name !== "string") {
      const err = new Error("Invalid or missing 'name' field");
      res.status(400);
      next(err);
    } else {
      const person = new Person({ name });
      try {
        await person.save();
        res.status(201).json({ data: person });
      } catch (err) {
        res.status(500);
        err.message = "Failed to create new user.";
        next(err);
      }
    }
  };


// Fetch a Person resource
exports.getPerson = async (req, res, next) => {
    const { userId } = req.params;
    try {
      const result = await Person.findById(userId);
  
      if (!result) {
        const err = new Error("User not found");
        res.status(404);
        next(err);
      } else {
        res.json({ data: result });
      }
    } catch (err) {
      // Check if the error is a CastError (invalid ID)
      if (err.name === "CastError") {
        res.status(400);
        err.message = "Use a valid ID format";
        next(err);
      } else {
        res.status(500);
        err.message = "Server failed to fetch user. Try again...";
        next(err);
      }
    }
  };
  

// Update a Person resource
  exports.updatePerson = async (req, res, next) => {
    const { name } = req.body;
    if (!name || typeof name !== "string") {
      const err = new Error("Invalid input or missing 'name' field");
      res.status(400);
      next(err);
    }
  
    try {
      const updatedUser = await Person.findByIdAndUpdate(
        req.params.userId,
        { name },
        {
          new: true,
        }
      );
      if (!updatedUser) {
        const err = new Error("User not found");
        res.status(404);
        next(err);
      } else {
        res.status(200).json({ data: updatedUser });
      }
    } catch (err) {
      // Check if the error is a CastError (invalid ID)
      if (err.name === "CastError") {
        res.status(400);
        err.message = "Use a valid ID format";
        next(err);
      } else {
        res.status(500);
        err.message = "Failed to update user.";
        next(err);
      }
    }
  };

  
// Delete a Person resource
exports.deletePerson = async (req, res, next) => {
    const { userId } = req.params;
    try {
      const result = await Person.findByIdAndDelete(userId);
  
      if (!result) {
        const err = new Error("User not found");
        res.status(404);
        next(err);
      } else {
        res.json({ data: result });
      }
    } catch (err) {
      // Check if the error is a CastError (invalid ID)
      if (err.name === "CastError") {
        res.status(400);
        err.message = "Use a valid ID format";
        next(err);
      } else {
        res.status(500);
        err.message = "Failed to delete user";
        next(err);
      }
    }
  };

// const { name } = req.body;
// try {
//     if(!name || typeof name !== 'string'){
//         res.status(400).json({message: "Invalid or missing 'name' field"})
//     }
//     await Person.save();
//     res.status(200).json({message: 'name added'})
// } catch (error) {
//  res.status(500).json({message: 'Failed to create new user'})   
// }
// }
