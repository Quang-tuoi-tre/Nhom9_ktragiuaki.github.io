// Chức năng hiển thị email khi nhấn nút
document.getElementById('emailButton').addEventListener('click', function() {
    let email = document.getElementById('email');
    if (email.style.display === 'none') {
        email.style.display = 'inline';
    } else {
        email.style.display = 'none';
    }
});
