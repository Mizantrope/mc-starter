export class Validation {
    check(form, params) {
        let rules = params.rules;
        let messages = params.messages;
        let _form = $(form);

        _form.validate({
            rules,
            messages,
            errorPlacement: function (error, element) {
                element.parent().append(error);
            },
            errorClass: 'form__error',
            submitHandler: function () {
                let data = _form.serialize();
                let url = _form.prop('action');

                // Отправляю запрос
                $.post(url, data, function (response) {
                    console.log(response);
                }, 'json');

                return false;
            },
        });
    }
}