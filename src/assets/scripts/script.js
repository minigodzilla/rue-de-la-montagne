//----------------------------------------------------------------------------//
// ScrollMagic Animation incl. Lazy Load                                      //
//----------------------------------------------------------------------------//

$(function()
{

	function stickyNav() {

		new ScrollMagic.Scene
		({
			triggerElement: 'body', triggerHook: 0, offset: 60, addIndicators: true
		})
		.setClassToggle('.sc-navbar', 'sc-shown')
		.addTo(controller);

	}

	// Create an instance of the Scroll Magic Controller
	let controller = new ScrollMagic.Controller();
	stickyNav();

});

//----------------------------------------------------------------------------//
// Universal Forms                                                            //
//----------------------------------------------------------------------------//
$(function()
{

	function isEmail(email) {

		var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(!regex.test(email))
		{
			return false;
		}

		else
		{
			return true;
		}
	}

	function isPostal(postal) {

		// var regex = /([ABCEGHJKLMNPRSTVXY]\d)([ABCEGHJKLMNPRSTVWXYZ]\d){2}/i;

		var regex = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;


		if(!regex.test(postal.toString().trim()))
		{
			return false;
		}

		else
		{
			return true;
		}
	}

	$('.form-toggle-option').on('click', function () {

		var value = $(this).attr('data-value');

		$('.form-toggle-input').attr('value', value);

	})
	
	$('.form-group-select .sc-select').on('change', function() {

		var $parent = $(this).parent();
		var $input = $parent.find('.form-control');
		var $value = $(this).val();

		$input.attr('value', $value);

	});

	$('form').on('submit', function(e) {

		// prevent default submit behaviour
		e.preventDefault();

		///////////////////////////////////////////////////////////////////////

		var $form              = $(this);
		var $inputs            = $form.find ('.form-control, select');
		var $checkboxes        = $form.find ('.form-check-input');
		var $email             = $form.find ('.form-control[name=Email]');
		var $postal            = $form.find ('.form-control[name=PostalCode]');
		var $submit            = $form.find ('.btn-submit');
		var errorState         = false;

		///////////////////////////////////////////////////////////////////////


		// check for empty fields
		$inputs.each (function()
		{
			if (!$(this).val())
			{
				$(this).removeClass ('is-valid').addClass ('is-invalid');
				errorState = true;
			}

			else
			{
				$(this).removeClass ('is-invalid').addClass ('is-valid');
			}
		});

		// check whether email is valid
		if (!isEmail ($email.val()))
		{
			$email.removeClass ('is-valid').addClass ('is-invalid');
			errorState = true;
		}

		else
		{
			$email.removeClass ('is-invalid').addClass ('is-valid');
		}

		// check whether postal code is valid
		if ($postal.length) {
			if (!isPostal ($postal.val()))
			{
				$postal.removeClass ('is-valid').addClass ('is-invalid');
				errorState = true;
			}

			else
			{
				$email.removeClass ('is-invalid').addClass ('is-valid');
			}
		}

		// check for checked checkboxes
		$checkboxes.each (function()
		{
			if ($(this).prop("checked") == false)
			{
				$(this).removeClass ('is-valid').addClass ('is-invalid');
				errorState = true;
			}

			else
			{
				$(this).removeClass ('is-invalid').addClass ('is-valid');
			}
		});

		// if form has errors
		if (errorState)
			return false;

		// now we do ajax
		// get form
		var form = $form[0];

		// create an FormData object 
		var data = new FormData(form);

		// prevent duplicate submissions
		$submit.prop('disabled', true);

		// do a barrel roll

		$.ajax({
			type: "POST",
			enctype: 'multipart/form-data',
			url: "/register.php",
			data: data,
			processData: false,
			contentType: false,
			cache: false,
			timeout: 800000,
			success: function (data) {

				$form.addClass('success');

			},
			error: function (e) {

				console.log("ERROR : ", e);

				$form.addClass('error');

			}
		});

	});

});