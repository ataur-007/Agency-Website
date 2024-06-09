function clickItem(buttonId, showId, hideId1, hideId2) {
    document.getElementById(buttonId).addEventListener('click', function() {
        document.getElementById(showId).style.display = 'block';
        document.getElementById(hideId1).style.display = 'none';
        document.getElementById(hideId2).style.display = 'none';
    });
}

// Adding event listeners for buttons
clickItem('mobileApp', 'mobileServices', 'webDevelopment', 'gameDevelopment');
clickItem('webDev', 'webDevelopment', 'mobileServices', 'gameDevelopment');
clickItem('gameDev', 'gameDevelopment', 'mobileServices', 'webDevelopment');


