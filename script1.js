document.querySelector('.button').addEventListener('click', function() {
    const comment = document.querySelector('input[name="user"]').value;
    console.log('Comment:', comment);
    // Add code here to send the comment and rating to Google Review API or your backend server
    window.location.href = 'thank-you.html';
});
