document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your feedback!');
    document.getElementById('feedbackForm').reset();
  });
  