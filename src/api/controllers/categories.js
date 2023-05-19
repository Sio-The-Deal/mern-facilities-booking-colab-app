import Categories from "../models/Categories.js";
import Room from "../models/Room.js";

export const createCategories = async (req, res, next) => {
  const newCategories = new Categories(req.body);

  try {
    const savedCategories = await newCategories.save();
    res.status(200).json(savedCategories);
  } catch (err) {
    next(err);
  }
};
export const updateCategories = async (req, res, next) => {
  try {
    const updatedCategories = await Categories.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCategories);
  } catch (err) {
    next(err);
  }
};
export const deleteCategories = async (req, res, next) => {
  try {
    await Categories.findByIdAndDelete(req.params.id);
    res.status(200).json("Categories has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getCategories = async (req, res, next) => {
  try {
    const categories = await Categories.findById(req.params.id);
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
};

export const countByBuilding = async (req, res, next) => {
  const buildings = req.query.buildings.split(",");
    try {
    const list = await Promise.all(
      buildings.map((building) => {
        return Categories.countDocuments({ building: building });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
export const countByType = async (req, res, next) => {
  try {
    // const categoriesCount = await Categories.countDocuments({ type: "categories" });
    const computerLabCount = await Categories.countDocuments({ type: "Computer-Labs" });
    const lectureRoomCount = await Categories.countDocuments({ type: "Lecture-Rooms" });
    const functionRoomCount = await Categories.countDocuments({ type: "Function-Rooms" });
    const quietPodCount = await Categories.countDocuments({ type: "Quiet-Pods" });
    
    res.status(200).json([
      // { type: "categories", count: categoriesCount },
      { type: "Computer-Labs", count: computerLabCount },
      { type: "Lecture-Rooms", count: lectureRoomCount },
      { type: "Function-Rooms", count: functionRoomCount },
      { type: "Quiet-Pods", count: quietPodCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getCategoriesRooms = async (req, res, next) => {
  try {
    const categories = await Categories.findById(req.params.id);
    const list = await Promise.all(
      categories.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};

export const getAllCategories = async (req, res, next) => {
  const { building, ...others } = req.query;

  try{
      const allcategories = await Categories.find(
          req.params.id);
         
      res.status(200).json(allcategories);

  }catch(err){
      res.status(500).json(err)
  }
};

// export const getAllCategories = async (req, res, next) => {
//   const { min, max, ...others } = req.query;
//   try {
//     const categoriess = await Categories.find({
//       ...others,
//       cheapestPrice: { $gt: min | 1, $lt: max || 999 },
//     }).limit(req.query.limit);
//     res.status(200).json(categoriess);
//   } catch (err) {
//     next(err);
//   }
