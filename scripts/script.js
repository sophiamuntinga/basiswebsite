// JavaScript Document
console.log("hi");

// Selecteer de button en nav-elementen
const menuButton = document.querySelector('nav button');
const nav = document.querySelector('nav');

// Voeg een click event toe om het menu te tonen of te verbergen
menuButton.addEventListener('click', function() {
    nav.classList.toggle('active'); // Toggle de 'active' class
});