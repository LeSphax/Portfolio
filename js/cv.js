$(document).ready(function () {
    var seen = false;
    var seenBis = false;
    $('.cv-img-container').bind('inview', function (event, isInView, visiblePartX, visiblePartY) {
        if (isInView && !seen) {
            $(".cv-img-container").removeClass("hdn");
            $(".cv-img-container").addClass("vsb");
            seen = true;
        }
    });

    $('.comp').bind('inview', function (event, isInView, visiblePartX, visiblePartY) {
        if (isInView && !seenBis) {
            var options = {
                segmentShowStroke : false,
                percentageInnerCutout : 80,
                animationSteps : 100,
                animationEasing : "easeInOutQuart",
                animateRotate : true,
                animateScale : false
            };
            var ctx = document.getElementById("java").getContext("2d");
            var data = [
                {
                    value: 90,
                    color: "#f3bc37",
                    highlight: "#ffd265"
                },
                {
                    value: 10,
                    color: "#ffffff",
                    highlight: "#ffffff"
                }
            ];
            new Chart(ctx).Doughnut(data, options);
            ctx = document.getElementById("c").getContext("2d");
            data = [
                {
                    value: 80,
                    color: "#f3bc37",
                    highlight: "#ffd265"
                },
                {
                    value: 20,
                    color: "#ffffff",
                    highlight: "#ffffff"
                }
            ];
            new Chart(ctx).Doughnut(data, options);
            ctx = document.getElementById("c++csharp").getContext("2d");
            data = [
                {
                    value: 70,
                    color: "#f3bc37",
                    highlight: "#ffd265"
                },
                {
                    value: 30,
                    color: "#ffffff",
                    highlight: "#ffffff"
                }
            ];
            new Chart(ctx).Doughnut(data, options);
            ctx = document.getElementById("caml").getContext("2d");
            data = [
                {
                    value: 70,
                    color: "#f3bc37",
                    highlight: "#ffd265"
                },
                {
                    value: 30,
                    color: "#ffffff",
                    highlight: "#ffffff"
                }
            ];
            new Chart(ctx).Doughnut(data, options);
            ctx = document.getElementById("sql").getContext("2d");
            data = [
                {
                    value: 60,
                    color: "#f3bc37",
                    highlight: "#ffd265"
                },
                {
                    value: 40,
                    color: "#ffffff",
                    highlight: "#ffffff"
                }
            ];
            new Chart(ctx).Doughnut(data, options);
            ctx = document.getElementById("htmlcssjs").getContext("2d");
            data = [
                {
                    value: 60,
                    color: "#f3bc37",
                    highlight: "#ffd265"
                },
                {
                    value: 40,
                    color: "#ffffff",
                    highlight: "#ffffff"
                }
            ];
            new Chart(ctx).Doughnut(data, options);
            seenBis = true;
        }
    });

});