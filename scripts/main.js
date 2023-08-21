// ----------------------------------------------------------------
// Trips array
// ----------------------------------------------------------------

const arrTrips = [
    {
      name: "Madagascar",
      price: 10000,
      description: "Take a luxurious, tropical trip to Madagascar, this packagage is an all inclusive 9 day trip, children under the age of 12 eat free.",
      image: "madagascar.jpg",
      origin: "Madagascar"
    },
    {
      name: "Cyprus",
      price: 16000,
      description: "Take a one of a kind trip to Cyprus using Saunset Sails, at the low price of R16 000 you and your loved ones can enjoy a 10 day trip with an included buffet breakfast every morning.",
      image: "cyprus.jpeg",
      origin: "Cyprus"
    },
    {
      name: "Lebanon",
      price: 13000,
      description: "Enjoy an 8 day all inclusive cruise. At the price of R13 000 per person, you get to experience top quality service while on a luxurious trip to Lebanon.",
      image: "lebanon.jpg",
      origin: "Lebanon"
    },
    {
      name: "Rome",
      price: 23000,
      description: "A 12 day trip to Rome is at your fingertips. This trip is not all inculsive, however, breakfast and dinner are included. There are various different restuarants onboard where you can purchase your lunch. Take this oppertunity to experience Rome, Italy in all of its glory.",
      image: "rome.jpeg",
      origin: "Rome"
    },
    {
      name: "Mauritius",
      price: 19000,
      description: "Mauritius is an amazing island to explore, at the price of R19 000, you are able to enjoy a luxurious trip to this amazing island. Breakfast is included every morning as well as unlimited soft serve throughout the day. There are multiple options for lunch and dinner.",
      image: "mauritius.jpg",
      origin: "Mauritius"
    },
    {
        name: "Seychelles",
        price: 25000,
        description: "Explore the island of Seychelles, this package includes all meals, you however will need to purchase your own drinks. Lucky for you we have many different bars and stalls for you to do so.",
        image: "seychelles.jpeg",
        origin: "Seychelles"
      },
      {
        name: "France",
        price: 21000,
        description: "Take the next 14 days to explore France and the ocean around it. This package includes all dinners, there are multiple places onboard as well as in France that offer amazing breakfast and lunch services.",
        image: "france.jpg",
        origin: "France"
      },
      {
        name: "Indonesia",
        price: 20000,
        description: "Indonesia is the place to be, join us this on this luxurious trip. This trip is all inclusive and is a 8 day all round trip.",
        image: "indonesia.jpeg",
        origin: "Indonesia"
      },
      {
        name: "Spain",
        price: 22000,
        description: "An all inclusive trip to Spain is at your fingertips! Take some time off and treat yourself on this amazing trip. Not only will you see Spain from the ground, you also get to expererience all its glory from the ocean. This trip will take 12 days to complete.",
        image: "spain.jpeg",
        origin: "Spain"
      },

      function loadTrips(tripsToShow){
    
        // Clear all elements inside the trips container
      
        $("#tripsContainer").empty();
      
        let appliedFilter = "";
        let appliedSort = "price added";
        },
        // ------------------------------------------------------------------------
        // When the document loads
        // ------------------------------------------------------------------------
        $(document).ready(function(){
         console.log("Hello");
        // ------------------------------------------------------------------
        // Home
        // When the document loads, animate the hero image upwards
        $("#hero-image").animate({top: '-=100px'});
        // ------------------------------------------------------------------
        // Browse
        filterSortTrips();
      }),
      // ------------------------------------------------------------------------
      function loadTrips(tripsToShow) {
      // Clear all elements inside the trips cards container

      $("#tripsContainer").empty();
      // Loop though the trips 

        console.log(trips.name);

        for (let i = 0; i < tripsToShow.length; i++) {
          const trips = tripsToShow[i];
          $.ajax({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + trip.origin + "&appid=9d1f3b7d117e68a958ea47a54d4f2e48",
            success: function (data) {
              tempData = data;
              console.log(tempData);
            },
          }).done(function (){
            $(currentChild).find("#nameText").text(tempData.main.temp);
            $(currentChild).find("#originTemp").text("Origin Temp: " + Math.round(tempData.main.temp- 273) + "°C");
          });
      
        }
      },

      $(document).ready(function(){
        $.ajax({
          type:"GET",
          url: "https://api.openweathermap.org/data/2.5/weather?q="+ trip.origin +"&appid=9d1f3b7d117e68a958ea47a54d4f2e48",
          success:function(data){
            temp = data
            console.log(data);
          }
        }).done(function () {
              // Set Temperature
              $newTemp.html(temp.main.temp + " &degC");
          
        });
      }),
]