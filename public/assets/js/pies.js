// $(window).load(function(){        
//     $('#myModal').modal('show');
//      });

$(document).ready(function () {

    var pieFruits = [{
        fruit: "apple",
        image: "/assets/img/apple.png",
    }, {
        fruit: "apricot",
        image: "/assets/img/apricot.png"
    }, {
        fruit: "blueberry",
        image: "/assets/img/blueberry.png"
    }, {
        fruit: "lemon",
        image: "/assets/img/lemon.png"
    }, {
        fruit: "lime",
        image: "/assets/img/lime.png"
    }, {
        fruit: "peach",
        image: "/assets/img/peach.png"
    }, {
        fruit: "pear",
        image: "/assets/img/pear.png"
    }, {
        fruit: "raspberry",
        image: "/assets/img/raspberry.png"
    }, {
        fruit: "strawbery",
        image: "/assets/img/strawberry.png"
    }];

    function makePieIngredients() {
        for (var i = 0; i < pieFruits.length; i++) {
            var fruitBasket = $("<div>");
            fruitBasket.addClass("fruit-button");

            var fruit = $("<img>");
            fruit.attr("src", pieFruits[i].image);

            fruitBasket.append(fruit);
            $("#pie-fruit").append(fruitBasket);
        };
    };

    // Event Listeners
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newPie = {
            pie_name: $("#pie-name").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/pies", {
            type: "POST",
            data: newPie
        }).then(
            function () {
                console.log("Invented a new pie!");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-pie").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/pies/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted pie", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    makePieIngredients();

});