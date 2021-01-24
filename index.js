'use strict';

function getCandidate(candidate) {
    fetch(`https://api.github.com/users/${candidate}/repos`)
    .then(response => response.json())
    .then(responseJson => {
            displayResults(responseJson);
    })
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
    let templateStringList = "";
    for (let i = 0; i < responseJson.length; i++) {
        templateStringList += `<p class="result-name">${responseJson[i].name}"</p>
        <p class="result-url"><a href="${responseJson[i].html_url}">${responseJson[i].html_url}</a></p>`;
    }
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