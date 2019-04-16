/**Copyright 2019 GIOVANNI LARA

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */

/**
 * EMAIL VALIDATION: regular expression explain. 
 * Email has 4 parts:
 * ex: name@email.com or name@email.com.eu
 * 1. name lower/upper lower/upper and digits, bots and hyphen (max characters 64).
 * 2. domain name lower letters max characters 254
 * 3. top domain .dot between 2-8 characters
 * 4. optional top domain .dot between 2-8 charaters 
 */

function validateEmail(field) {
    const regex = /^([a-zA-Z0-9\.-]{1,64})+@([a-z]{1,254})+\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    if (field == "") {
        return false;
    } else if (regex.test(field)) {
        return true;
    } else {
        return false;
    }
}

let text = document.getElementById('email'),
    error = document.getElementById('email-error');

function checkValidity(evt) {
    evt.preventDefault();
    if (validateEmail(text.value)) {
        text.classList.remove('invalid');
        text.classList.add('valid');
        text.setAttribute("aria-invalid", false);
        text.setAttribute("aria-describedby", false);
        error.textContent = "";
        error.removeAttribute("role");
    } else {
        text.focus();
        text.setAttribute("aria-describedby", "email-error");
        text.setAttribute("aria-invalid", true);
        text.classList.remove('valid');
        text.classList.add('invalid');
        error.textContent = "Please provide a valid email address";
        error.setAttribute("role", "alert");
    }
}

document.getElementById('email-form').addEventListener('submit', checkValidity);
text.addEventListener('blur', checkValidity);