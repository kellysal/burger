$(function () {

    // Add a new burger
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };

        // POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("New Burger Added!");

            // Reload for new burger list
            location.reload();
        });
    });

    $(".eatburger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        // PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {
            console.log("Burger devoured!");
            // Reload for updated list
            location.reload();
        });
    });

    $(".trashburger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        //DELETE request
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });

});