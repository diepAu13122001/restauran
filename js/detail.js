document.addEventListener('DOMContentLoaded', function() {
    const foodDetail = JSON.parse(localStorage.getItem('foodDetail'));

    if (foodDetail) {
        document.getElementById('food-name').textContent = foodDetail.name;
        document.getElementById('food-image').src = foodDetail.thumbnail_url;
        document.getElementById('food-description').textContent = foodDetail.description;
  

        const commentsList = document.getElementById('comments-list');
        let storedComments = JSON.parse(localStorage.getItem('comments')) || [];

        storedComments.forEach(comment => {
            const commentItem = document.createElement('li');
            commentItem.className = 'comment-item';
            commentItem.textContent = comment;
            commentsList.appendChild(commentItem);
        });

        document.getElementById('add-comment-btn').addEventListener('click', function() {
            const newComment = document.getElementById('new-comment').value;
            if (newComment.trim()) {
                const commentItem = document.createElement('li');
                commentItem.className = 'comment-item';
                commentItem.textContent = newComment;
                commentsList.appendChild(commentItem);
                document.getElementById('new-comment').value = '';

                storedComments.push(newComment);
                localStorage.setItem('comments', JSON.stringify(storedComments));
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const foodDetail = JSON.parse(localStorage.getItem('foodDetail'));

    if (foodDetail) {
        document.getElementById('food-name').textContent = foodDetail.name;
        document.getElementById('food-image').src = foodDetail.thumbnail_url;
        document.getElementById('food-description').textContent = foodDetail.description;
        document.getElementById('food-rating').textContent = `Rating: ${foodDetail.rating || 'N/A'}`;

        const commentsList = document.getElementById('comments-list');
        let storedComments = JSON.parse(localStorage.getItem('comments')) || [];

        storedComments.forEach(comment => {
            const commentItem = document.createElement('li');
            commentItem.className = 'comment-item';
            commentItem.textContent = comment;
            commentsList.appendChild(commentItem);
        });

        document.getElementById('add-comment-btn').addEventListener('click', function() {
            const newComment = document.getElementById('new-comment').value;
            if (newComment.trim()) { // Kiểm tra bình luận không chỉ là khoảng trắng
                const commentItem = document.createElement('li');
                commentItem.className = 'comment-item';
                commentItem.textContent = newComment;
                commentsList.appendChild(commentItem);
                document.getElementById('new-comment').value = '';

                // Lưu bình luận vào localStorage
                storedComments.push(newComment);
                localStorage.setItem('comments', JSON.stringify(storedComments));
            }
        });
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.avatar) {
        document.getElementById('navAvatar').src = user.avatar;
    }
});
