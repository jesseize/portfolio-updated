$(document).ready(function() {
  setTimeout(function() {
    $(".loader__container").velocity({
        opacity: 0
    }, {
        complete: function() {
          $(".loader__container").css("display","none");
        }
    });
  },100);
});



$(document).ready(function(){

  var width = window.innerWidth;
  var animating = false;

  window.onorientationchange=function()
  {
    width = window.innerWidth;
    if(width >= 530) {
      $('nav').css("width","110px");
    } else {
      $('nav').css("width","60px");
    }
  };

  setTimeout(function(){
      $('.wrapper').velocity(
      {
        opacity: '1',
        easing: 'easeInOutCubic'
      },
      {
        duration: 500,
        complete: function() {

        }
      });
  }, 500);


  $('.animsition-link').click(function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var url = $(this).attr("href");

    if(width <= 530) {
      if(animating == true) { } else {
        animating = true;
        $('#nav-icon').toggleClass('open');
        $('.logo').removeClass('open-logo');
        $('.nav-item').removeClass('open-nav');
        $('.logo').addClass('close-logo');
        $('.nav-item').addClass('close-nav');
        setTimeout(function(){
          $('nav').velocity(
          {
            width: '60px',
            easing: 'easeInOutCubic'
          },
          {
            duration: 500,
            complete: function() {
              $('.logo').removeClass('close-logo');
              $('.nav-item').removeClass('close-nav');
              setTimeout(function(){
                $('.animsition').animsition('out', $('.animsition'), url);
                animating = false;
              }, 300);
            }
          });
          $('.credits').velocity(
          {
            left: '18px',
            easing: 'easeInOutCubic'
          },
          {
            duration: 500
          });
        }, 500);
      }
    } else {
      if(animating == true) { } else {
        animating = true;
        $('#nav-icon').toggleClass('open');
        $('.logo').removeClass('open-logo');
        $('.nav-item').removeClass('open-nav');
        $('.logo').addClass('close-logo');
        $('.nav-item').addClass('close-nav');
        setTimeout(function(){
          $('nav').velocity(
          {
            width: '60px',
            easing: 'easeInOutCubic'
          },
          {
            duration: 500,
            complete: function() {
              $('.logo').removeClass('close-logo');
              $('.nav-item').removeClass('close-nav');
              setTimeout(function(){
                $('.animsition').animsition('out', $('.animsition'), url);
                animating = false;
              }, 300);

            }
          });
          $('.credits').velocity(
          {
            left: '43px',
            easing: 'easeInOutCubic'
          },
          {
            duration: 500
          });
        }, 500);
      }
     }
  });



  // <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
  var form_sent = false;
  var still_hovering = false;

  $("form").submit(function(e){
    e.preventDefault();
    $.ajax({
      url: "contact.php",
      type: "post",
      data: $(this).serialize(),
      success: function(result){
        console.log("Sent");
      }
    });
  });

  $('.container__topbar__navigation a').click(function() {
    $(".active").removeClass("active");
    $(this).addClass("active");
  });

  $("#submit").click(function(e) {
  if(form_sent == false) {
  if($("input[name='name']").val() != "" && $("input[name='email']").val() != "" && $("textarea[name='message']").val() != "")
  {
    form_sent = true;
    $("#submit").velocity(
    {
      backgroundColor: "#26A65B",
      easing: 'easeInOutCubic'
    },
    {
      duration: 200,
      complete: function() {
      }
    });
    $("#submit p").velocity(
    {
      opacity: 0,
      easing: 'easeInOutCubic'
    },
    {
      duration: 200,
      complete: function() {
        // SUBMIT FORM DATA
        $.ajax({url: "contact.php", type: 'POST', async: true, data: {name: $('input[name="name"]').val(),email: $('input[name="email"]').val(),message: $('textarea[name="message"]').val()}, success: function(result){
          console.log(result);
        }});
        // END SUBMIT FORM DATA
        $('form input,textarea').val("");
        $("#submit").css("cursor","default");
        $("#submit p").html('<i class="fa fa-check" aria-hidden="true"></i>');
        $("#submit p").velocity(
        {
          opacity: 1,
          easing: [0.600, 0.300, 0.000, 1.000]
        },
        {
          duration: 300
        });
        $("#submit").velocity(
        {
          width: "100%",
          easing: [0.600, 0.300, 0.000, 1.000]
        },
        {
          duration: 300
        });
      }
    });
  } else {
    $("#submit").velocity(
    {
      backgroundColor: "#D91E18",
      easing: 'easeInOutCubic'
    },
    {
      duration: 200,
      complete: function() {
      }
    });
    $("#submit").velocity(
    {
      backgroundColor: "#D91E18",
      easing: 'easeInOutCubic'
    },
    {
      duration: 200,
      complete: function() {
      }
    });
    $("#submit p").velocity(
    {
      opacity: 0,
      easing: 'easeInOutCubic'
    },
    {
      duration: 200,
      complete: function() {
        $("#submit p").html('<i class="fa fa-times" aria-hidden="true"></i>');
        $("#submit p").velocity(
        {
          opacity: 1,
          easing: 'easeInOutCubic'
        },
        {
          duration: 200
        });
      }
    });
  }
  }
  });

  $('a[data-rel=lightcase]').lightcase();

	$('#nav-icon').click(function() {
    if(width <= 530) {
      if(animating == true) { } else {
      if(!$(this).hasClass('open')) {
        animating = true;
        $(this).toggleClass('open');
        $('.credits').velocity(
        {
          left: '158px',
          easing: 'easeInOutCubic'
        },
        {
          duration: 500
        });
        $('nav').velocity(
        {
          width: '330px',
          easing: [0.600, 0.300, 0.000, 1.000]
        },
        {
          duration: 500,
          complete: function() {
            $('.logo').addClass('open-logo');
            $('.nav-item').addClass('open-nav');
            setTimeout(function(){
              animating = false;
            }, 300);
          }
        });
      } else {
        animating = true;
        $(this).toggleClass('open');
        $('.logo').removeClass('open-logo');
        $('.nav-item').removeClass('open-nav');
        $('.logo').addClass('close-logo');
        $('.nav-item').addClass('close-nav');
        setTimeout(function(){
          $('nav').velocity(
          {
            width: '60px',
            easing: 'easeInOutCubic'
          },
          {
            duration: 500,
            complete: function() {
              $('.logo').removeClass('close-logo');
              $('.nav-item').removeClass('close-nav');
              setTimeout(function(){
                animating = false;
              }, 300);
            }
          });
          $('.credits').velocity(
          {
            left: '18px',
            easing: 'easeInOutCubic'
          },
          {
            duration: 500
          });
        }, 500);
      }
     }
    } else {
      if(animating == true) { } else {
      if(!$(this).hasClass('open')) {
        animating = true;
        $(this).toggleClass('open');
        $('.credits').velocity(
        {
          left: '158px',
          easing: 'easeInOutCubic'
        },
        {
          duration: 500
        });
        $('nav').velocity(
        {
          width: '330px',
          easing: [0.600, 0.300, 0.000, 1.000]
        },
        {
          duration: 500,
          complete: function() {
            $('.logo').addClass('open-logo');
            $('.nav-item').addClass('open-nav');
            setTimeout(function(){
              animating = false;
            }, 300);
          }
        });
      } else {
        animating = true;
        $(this).toggleClass('open');
        $('.logo').removeClass('open-logo');
        $('.nav-item').removeClass('open-nav');
        $('.logo').addClass('close-logo');
        $('.nav-item').addClass('close-nav');
        setTimeout(function(){
          $('nav').velocity(
          {
            width: '60px',
            easing: 'easeInOutCubic'
          },
          {
            duration: 500,
            complete: function() {
              $('.logo').removeClass('close-logo');
              $('.nav-item').removeClass('close-nav');
              setTimeout(function(){
                animating = false;
              }, 300);
            }
          });
          $('.credits').velocity(
          {
            left: '43px',
            easing: 'easeInOutCubic'
          },
          {
            duration: 500
          });
        }, 500);
      }
     }
    }
	});

});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
