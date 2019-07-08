$(".testform").simpleform({
    speed: 500,
    transition: 'fade',
    progressBar: true,
    showProgressText: true,
    validate: true
});

function validateForm(formID, Obj) {

    switch (formID) {
        case 'testform':
            Obj.validate({
                rules: {
                    username: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true
                    },
                    password_confirmation: {
                        required: true
                    },
                    name: {
                        required: true
                    },
                    street: {
                        required: true
                    }
                },
                messages: {
                    username: {
                        required: "Please choose a new Username",
                        username: "This username's already taken"
                    },
                    email: {
                        required: "Please enter an email address",
                        email: "Not a valid email address"
                    },
                    password: {
                        required: "Are you serious !?"
                    },
                    password_confirmation: {
                        required: "Are you serious !?"
                    },
                    name: {
                        required: "Please enter your name"
                    },
                    street: {
                        required: "Please enter street name"
                    }
                }
            });
            return Obj.valid();
            break;
    }
}

// Conditions

var input = $(`input#user_condition`);
var c = false;
var sb = $(`input[value=Submit]:first`);
input.change(function() {
    if (c) {
        c = false;
        sb.hide();
    } else {
        c = true;
        sb.show();
    }
});