const Listing = require("../models/listing");

// Helper: highlight matched search terms (escape regex safely)
function highlightMatch(text, searchTerm) {
  if (!text || !searchTerm) return text;
  const escaped = searchTerm.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'ig');
  return text.replace(regex, '<mark>$1</mark>');
}

module.exports.index = async (req, res) => {
  const { category, location } = req.query;
  let filter = {};

  if (category) {
    filter.category = category;
  }

  if (location) {
    filter.$or = [
      { title: new RegExp(location, 'i') },
      { location: new RegExp(location, 'i') },
      { country: new RegExp(location, 'i') }
    ];
  }

  let listings = await Listing.find(filter).lean();

  if (location) {
    listings = listings.map(l => ({
      ...l,
      title: highlightMatch(l.title, location),
      location: highlightMatch(l.location, location),
      country: highlightMatch(l.country, location)
    }));
  }

  res.render("listings/index.ejs", {
    allListings: listings,
    selectedCategory: category || "",
    searchLocation: location || ""
  });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id).populate({path: "reviews", populate: {path: "author"}}).populate("owner");
  if(!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;

  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = {url, filename};
  await newListing.save();
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if(!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
  }

  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250,h_300,c_fit");
  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  if(typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url, filename};
    await listing.save();
  }
  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};