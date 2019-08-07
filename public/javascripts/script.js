$(document).ready(function () {
    $('#input').keyup(function (e) {
        if (e.keyCode == 13) {
            post()
        }
    });
    $('#btn').on('click', post);

    function post() {

        // let loader = $("#loader");
        // show(loader)
        let input = $("#input");
        let inputValue = input.val()
        let videoID = inputValue.split('v=')[1];
        let andPosition = videoID.indexOf('&');
        if (andPosition != -1) {
            videoID = videoID.substring(0, andPosition);
        }
        $("#row").append(`
<div class="col-3 p-2" id="${videoID}">
<div class="card">
<div class="d-flex pt-3 justify-content-center">
<div class="spinner-border" role="status">
<span class="sr-only">Loading...</span>
</div>
</div>
<div class="card-body text-center">
<p class="card-text">${videoID}</p>
</div>
</div>
</div>
        `)
        input.val("")
        $.ajax({
            method: 'get',
            url: "http://localhost:8001/download/" + videoID
        }).fail(function (fail) {
            console.log(fail);
        }).always(function () {
            $("#" + videoID).remove();
            // hide(loader)
        })
    }

    function show(object) {
        object.removeClass("d-none")
        object.addClass("d-flex")
    }

    function hide(object) {
        object.removeClass("d-flex")
        object.addClass("d-none")
    }
});