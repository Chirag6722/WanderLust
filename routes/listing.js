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
      filter.location = { $regex: location, $options: "i" };
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