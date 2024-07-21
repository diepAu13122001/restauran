document.addEventListener('DOMContentLoaded', function() {
    // Bootstrap validation
    (function () {
        'use strict'

        var forms = document.querySelectorAll('.needs-validation')

        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
    })()

    // Handle form submission
    document.getElementById('reservationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        if (!this.checkValidity()) {
            event.stopPropagation();
            this.classList.add('was-validated');
            return;
        }

        // Validate phone number pattern
        const phoneInput = document.getElementById('phone');
        const phonePattern = /^0?\d{9}$/;
        if (!phonePattern.test(phoneInput.value)) {
            phoneInput.setCustomValidity('Vui lòng nhập số điện thoại với 9 chữ số sau +84 và tùy chọn có số 0 ở đầu.');
            this.classList.add('was-validated');
            return;
        } else {
            phoneInput.setCustomValidity('');
        }

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        let phone = phoneInput.value;
        if (phone.startsWith('0')) {
            phone = phone.substring(1);
        }
        phone = '+84' + phone;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;

        // Save data to Local Storage
        const reservationData = {
            name,
            email,
            phone,
            date,
            time,
            guests
        };
        localStorage.setItem('reservationData', JSON.stringify(reservationData));

        // Display confirmation message
        alert(`Cảm ơn ${name}! Đặt bàn của bạn cho ${guests} người vào lúc ${time} ngày ${date} đã được gửi. Chúng tôi sẽ liên hệ với bạn qua email: ${email} hoặc số điện thoại: ${phone}.`);
        
        // Optionally, reset the form
        this.reset();
        this.classList.remove('was-validated');

        // Send email using EmailJS
        sendEmail(reservationData);
    });

    function sendEmail(data) {
        if (typeof emailjs === 'undefined') {
            console.error('EmailJS SDK is not loaded');
            return;
        }

        emailjs.init('EjMBRbBQiAP596ju4'); 

        emailjs.send('service_4gr6oqj', 'template_aru170w', {
            name: data.name,
            email: data.email,
            phone: data.phone,
            date: data.date,
            time: data.time,
            guests: data.guests
        })
        .then(function(response) {
            console.log('Email sent successfully!', response.status, response.text);
        }, function(error) {
            console.error('Failed to send email:', error);
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Get user information from localStorage
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        // Populate the form fields with user information
        document.getElementById('name').value = loggedInUser.name || '';
        document.getElementById('email').value = loggedInUser.email || '';
        document.getElementById('phone').value = loggedInUser.phone || '';
    }
});
