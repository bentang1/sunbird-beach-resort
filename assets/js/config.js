/* ==========================================================================
   SUNBIRD BEACH RESORT — Editable Site Data
   --------------------------------------------------------------------------
   This is the ONLY file you need to edit when a price or review number
   changes. Every price tag and review badge across the whole site reads
   its number from here automatically — save this file, refresh the page,
   and every page updates together. No need to hunt through HTML files.

   Rules:
   - Numbers only: write 250, not "$250" or "1,250".
   - To mark a rate as "not yet confirmed," set it to null (no quotes).
     The page keeps showing its placeholder text until you replace null
     with a real number.
   - Keep the commas between lines and the curly braces { } exactly as
     they are — only change the numbers themselves.
   ========================================================================== */

var SITE_CONFIG = {

  // The general "From $X/night" figure shown in the hero banner and in
  // the sticky price bar at the bottom of every page on mobile. This
  // should usually match your cheapest available room rate.
  fromPrice: 250,

  // Nightly rate for each room type, shown on the room cards on the home
  // page and on the Rooms & Suites page. Set a room to null to leave it
  // showing "Insert Rate" until you have a confirmed price for it.
  roomPrices: {
    studio:    null,   // Ocean View Studio
    oneBed:    250,    // Beachfront Apartment
    twoBed:    280,    // Family Apartment
    penthouse: null    // Three-Bedroom Penthouse
  },

  // Review scores shown in the hero trust row. These do NOT update
  // themselves — check each platform yourself and update the numbers
  // here every so often. See README_SBR.md, section 4, for why.
  reviews: {
    google:      { score: 4.4, count: 246 },
    tripadvisor: { score: 4.6, count: 265 },
    booking:     { score: 8.7, count: 776 }
  }

};
