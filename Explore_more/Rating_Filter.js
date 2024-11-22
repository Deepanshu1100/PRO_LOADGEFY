function filterListings() {
// Here, I have fetched user input (Rating from dropdown).
const selectedRating = document.getElementById("ratingFilter").value;
const selectedLocation = document.getElementById("locationFilter").value;
const selectedRent = document.getElementById("rentFilter").value;

// Here, I have selected all our PG's by class for matching rating.
const PG_Rating = document.querySelectorAll(".listing");


// Here, Actual filtering is done by comparing userInput and our data.
   for(let i = 0; i < PG_Rating.length; i++){
      const Rating = PG_Rating[i].getAttribute("data-star");
      const Location = PG_Rating[i].getAttribute("data-Location");
      const Rent = PG_Rating[i].getAttribute("data-Rent");
      PG_Rating[i].style.display = (selectedRating === "" || (selectedRating === Rating && selectedLocation === Location && selectedRent == Rent))? "":"none";
   }
}