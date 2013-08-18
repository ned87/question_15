/**
 * Created with JetBrains PhpStorm.
 * User: dsgrigoryev
 * Date: 18.08.13
 * Time: 19:36
 * To change this template use File | Settings | File Templates.
 */


$(document).ready(function(){
    $(".form.b").validate({
        rules: {
            someInput: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
/*            comments: {
                required: true,
                minlength: 5,
                nourl: true
            }*/
        },
        messages: {
            someInput: "Required Field",
            email: "Valid Email Required",
            comments: "Required Field + No URL's"
        }
    });
});