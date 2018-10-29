$(function () {
    $("#calculate").click(function () {
        var date = $("#birth_date").val().toString();
        var year = parseInt(date.substring(0, 4), 10);
        var month = parseInt(date.substring(5, 7), 10);
        var day = parseInt(date.substring(8, 10), 10);

        var birthday = new Date(year, month - 1, day);
        todaybday(today, birthday)
        checkBy(birthday)
    })
})
var today = new Date();

function todaybday(today, birthday) {
    if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
        alert("Happy B'day!!!");
    }

}
function checkBy(birthday) {
    var differenceInMilisecond = today.valueOf() - birthday.valueOf();

    var year_age = Math.floor(differenceInMilisecond / 31536000000);
    var day_age = (Math.floor((differenceInMilisecond % 31536000000) / 86400000)) % 30;
    var month_age = Math.floor(day_age / 30);

    //day_age = day_age % 30;

    if (isNaN(year_age) || isNaN(month_age) || isNaN(day_age)) {
        return $("#exact_age").text("Invalid birthday - Please try again!");
    }
    else {
        if (document.getElementById('exact_age')) {
            return $("#exact_age").html("You are <span id=\"age\">" + year_age + " years " + month_age + " months " + day_age + " days</span> old");
        }
        return "You are 21 years 9 months 17 days old"
    }
}
