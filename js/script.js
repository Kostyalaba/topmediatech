jQuery.validator.addMethod("alphabetsAndSpacesOnly", function (value, element) {
    return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
});

$(function () {
    $('#register_area').validate({
        rules: {
            user_name: {
                required: true,
                minlength: 3,
                alphabetsAndSpacesOnly: true
            },
            phone_number: {
                required: true,
                number: true,
                minlength: 7
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            user_name: {
                required: "Please enter your name.",
                alphabetsAndSpacesOnly: "Please enter a valid name."
            },
            email: {
                required: "Please enter your email address."
            },
            phone_number: {
                required: "Please enter your Phone number."
            }
        },
    })
});