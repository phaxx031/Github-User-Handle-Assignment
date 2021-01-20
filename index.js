'use strict';

function getCandidate(candidate) {
    fetch(`https://api.github.com/users/USERNAME/repos` + candidate)
    .then(response => response.json())
    .then(responseJson => {
        if (responseJson.status == "success") {
            displayResults(responseJson);
        } else {
            alert('Something went wrong. Try again later.')
        }
    })
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
    let templateStringList = "";
    console.log(responseJson);
    templateStringList += `<img src="${responseJson.message}" class="results-img">`;
    //not grabbing image//
    $('.results').html(templateStringList);
    $('.results').removeClass('hidden');
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        let candidate = $("#textbox").val();
        console.log (candidate);
        getCandidate(candidate);
    });
}

$(function() {
    console.log('App loaded! Waiting for submit!')
    watchForm();
});