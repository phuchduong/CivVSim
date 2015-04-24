(function() { // module pattern.
    // Empire wide global fields.
    var empire = {
        'numberOfCities': 0
    }

    $( document ).ready(function(){
        AddCity();
        $("#allCities").accordion();
    });

    /****** Buttons and Controls ******/
	// Adds another hex grid of cities.
    $("#AddCityBtn").click(function() {
        AddCity();
        EnableCollapseCitiesBtn();
    });

    // Collapses all cities together into an accordion view.
    $("#CollapseCitiesBtn").click(function() {
        $("#allCities").accordion();
        DisableButton('CollapseCitiesBtn');
    });

    // Enables the collapse cities button once empire has more
    // than one city.
    var EnableCollapseCitiesBtn = function(){
        if(empire.numberOfCities>=2){
            $("#CollapseCitiesBtn").removeAttr('disabled');
        }
    };

    // Active event listener on all remove buttons.
    $(document).on("click", '.removeCityBtn', function(error){
    	var cityNumber = $(this).attr("city");
    	RemoveCity(cityNumber);
    });

    // Disable button
    var DisableButton = function(btnSelector){
        var btnSelector = '#' + btnSelector;
        $(btnSelector).attr('disabled', 'disabled');
    }

    /****** Empire Level Behavior ******/
    // Adds a city to the empire.
    var AddCity = function(){
        // Adding 1 city.
        empire.numberOfCities++;

        // Adds a city hex grid.
        var cityID = 'cityID' + empire.numberOfCities;
        $("#allCities").append(
            "<h3 id='cityLabel" + empire.numberOfCities + 
            "'>City " + empire.numberOfCities + "</h3>");
        $("#allCities").append(
            "<div id='" + cityID + "' class='CityWrapper'></div>"
        );

        // Fetches a hex grid template and inserts it into the new city div.
        var fetchHexGrid = $.ajax({
            url: "HexGrid.html",
            success:function(data) {
                $('#' + cityID).append(data);
            }
        });

        // Adding functions to the new buttons.
        fetchHexGrid.done(function(msg){
            $( ".removeCityBtn:last" ).attr("city",empire.numberOfCities);
            $( "#allCities" ).accordion( "refresh" );
            $("#accordion").accordion({active:"h3:last"})
        });
    }

    // Removes a city give a city number.
    var RemoveCity = function(cityNumber){
        // Removes city
    	var citySelector = "#cityID" + cityNumber;
    	$(citySelector).remove();

        // Removes city label
        var cityLabel = "#cityLabel" + cityNumber;
        $(cityLabel).remove();
    }


})(); // end of module pattern.