$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4, 
                maxlenght:6
            },
            sname:{
                required:true,
                minlength:4
            },
            emailaddress:{
                required:true,
                email:true

            },
            password:{

            },
            day:{
                required:true,
            },
            gender:{
                required:true

            }
        },
        messages:{
            fname:{
            required:"Enter first name",
            minlength:"Enter atleast 4 characters"
            }
        }
    })
})