const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validatelisting} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

router.route("/")
.get(wrapAsync(async (req, res) => {
  const { category, location } = req.query;
  let filter = {};

  if (category) {
    filter.category = category;
  }

  if (location) {
    const searchTerm = location.trim();

    // Check for exact match with country first
    const exactCountryMatch = await Listing.find({ country: { $regex: `^${searchTerm}$`, $options: 'i' } });

    if (exactCountryMatch.length > 0) {
      // If exact country matches found, return only those
      return res.render("listings/index.ejs", {
        allListings: exactCountryMatch,
        selectedCategory: category || "",
        searchLocation: location || ""
      });
    }

    // Otherwise, do a general search on multiple fields
    const regex = new RegExp(searchTerm.split(',')[0].trim(), 'i');
    filter.$or = [
      { location: regex },
      { title: regex },
      { description: regex }
    ];
  }

  const listings = await Listing.find(filter);

  res.render("listings/index.ejs", {
    allListings: listings,
    selectedCategory: category || "",
    searchLocation: location || ""
  });
}))
.post(isLoggedIn, upload.single('listing[image]'), validatelisting, wrapAsync(listingController.createListing));

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn, isOwner, upload.single('listing[image]'), validatelisting, wrapAsync(listingController.updateListing))
.delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

module.exports = router;