let textEn = {
	introHeading1: 'ARRIVING SOON',
	introHeading2: 'THE NEW LANDMARK',
	introCopy: "SET TO COMPLEMENT AND ELEVATE MONTREAL'S GORGEOUS CITYSCAPE, CARTTERA AND CANDEREL INTRODUCE THEIR STUNNING NEW CONDOMINIUM, 1455 RUE DE LA MONTAGNE. UNCOVER A TRULY REFINED EXPLORATION OF BEAUTY, PASSION AND LUXURY, CRAFTED TO EXCITE THE SENSES AND EMBODY THE URBAN LIFESTYLE.",
	registerHeading: 'REGISTER YOUR INTEREST',
	registerFirstName: 'FIRST NAME *',
	registerFirstNameInvalid: 'Please enter your first name.',
	registerLastName: 'LAST NAME *',
	registerLastNameInvalid: 'Please enter your last name.',
	registerEmail: 'EMAIL *',
	registerEmailInvalid: 'Please enter your email address.',
	registerPhone: 'PHONE *',
	registerPhoneInvalid: 'Please enter your phone number.',
	registerIsBroker: 'ARE YOU A BROKER? *',
	registerIsBrokerOptNo: 'NO',
	registerIsBrokerOptYes: 'YES',
	registerIsBrokerInvalid: 'Please tell us whether you are a broker.',
	registerSuitePref: 'WHAT SUITE ARE YOU INTERESTED IN? *',
	registerSuitePrefOpt1: 'ONE BEDROOM',
	registerSuitePrefOpt2: 'One Bedroom + Den',
	registerSuitePrefOpt3: 'Two Bedroom',
	registerSuitePrefOpt4: 'Two Bedroom + Den',
	registerSuitePrefOpt5: 'Three Bedroom',
	registerSuitePrefInvalid: 'Please enter your suite preference.',
	registerBrokerCompany: 'BROKERAGE NAME',
	registerBrokerCompanyInvalid: 'Please give us your brokerage name',
	registermandatoryFields: '* MANDATORY FIELDS',
	registerSubmit: 'SUBMIT',
	registerConsent: 'I CONSENT TO RECEIVE FUTURE COMMUNICATION',
	copyright: '&copy; 2021 Carttera, Canderel & RAD Marketing. All Rights Reserved.',
};

let textFr = {
	introHeading1: 'ARRIVERA BIENTÔT',
	introHeading2: 'UNE NOUVELLE ADRESSE EMBLÉMATIQUE',
	introCopy: 'Pour compléter et rehausser le splendide paysage urbain de Montréal, Carttera et Canderel présentent leur nouveau projet de condominium de luxe – 1455, rue de la Montagne. Découvrez une exploration de la beauté, de la passion et du luxe raffiné, réalisée pour captiver les sens et représenter le style de vie urbain.',
	registerHeading: 'INSCRIVEZ-VOUS VOTRE INTÉRÊT',
	registerFirstName: 'PRÉNOM*',
	registerFirstNameInvalid: "S'il vous plaît entrez votre prénom",
	registerLastName: 'NOM DE FAMILLE*',
	registerLastNameInvalid: "S'il vous plaît entrez votre nom de famille",
	registerEmail: 'COURRIEL*',
	registerEmailInvalid: "S'il vous plaît entrez votre addresse courriel",
	registerPhone: 'NUMÉRO DE TÉLÉPHONE*',
	registerPhoneInvalid: "S'il vous plaît entrez votre numéro de téléphone ",
	registerIsBroker: 'ÊTES-VOUS UN COURTIER?*',
	registerIsBrokerOptNo: 'NON',
	registerIsBrokerOptYes: 'OUI',
	registerIsBrokerInvalid: "S'il vous plaît veuillez nous dire si vous êtes un courtier",
	registerSuitePref: 'QUELLE UNITÉ VOUS INTÉRESSE?',
	registerSuitePrefOpt1: 'UNE CHAMBRE',
	registerSuitePrefOpt2: 'UNE CHAMBRE + SÉJOUR',
	registerSuitePrefOpt3: 'DEUX CHAMBRES',
	registerSuitePrefOpt4: 'DEUX CHAMBRES + SÉJOUR',
	registerSuitePrefOpt5: 'TROIS CHAMBRES',
	registerSuitePrefInvalid: "S'il vous plaît dites-nous quelle unité vous préférez",
	registerBrokerCompany: 'NOM DE COURTAGE',
	registerBrokerCompanyInvalid: "S'il vous plaît entrez votre nom de courtage",
	registermandatoryFields: '* CHAMPS OBLIGATOIRES',
	registerSubmit: 'SOUMETTRE',
	registerConsent: 'JE CONSENS À RECEVOIR DES COMMUNICATIONS FUTURES',
	copyright: '&copy; 2021 Carttera, Canderel et RAD Marketing. Tous droits réservés.',
};

var urlString = window.location.href;
var url = new URL(urlString);

var copy;

if (url.searchParams.has('en')) {
	copy = textEn;
	$('.dm-lang').addClass('en');
	$('.dm-register #Language').val('en');

} else {
	copy = textFr;
	$('.dm-lang').addClass('fr');
	$('.dm-register #Language').val('fr');
}

$('.dm-intro .dm-heading-1').html(copy.introHeading1);
$('.dm-intro .dm-heading-2').html(copy.introHeading2);
$('.dm-intro .dm-copy').html(copy.introCopy);
$('.dm-register .dm-subheading').html(copy.registerHeading);
$('.dm-register #FirstName').attr('placeholder',copy.registerFirstName);
$('.dm-register #v-error-FirstName').html(copy.registerFirstNameInvalid);
$('.dm-register #LastName').attr('placeholder',copy.registerLastName);
$('.dm-register #v-error-LastName').html(copy.registerLastNameInvalid);
$('.dm-register #Email').attr('placeholder',copy.registerEmail);
$('.dm-register #v-error-Email').html(copy.registerEmailInvalid);
$('.dm-register #Phone').attr('placeholder',copy.registerPhone);
$('.dm-register #v-error-Phone').html(copy.registerPhoneInvalid);
$('.dm-register #IsBroker-select-opt').html(copy.registerIsBroker);
$('.dm-register #IsBroker-select-opt-no').html(copy.registerIsBrokerOptNo);
$('.dm-register #IsBroker-select-opt-yes').html(copy.registerIsBrokerOptYes);
$('.dm-register #v-error-IsBroker').html(copy.registerIsBrokerInvalid);
$('.dm-register #Bedrooms-select-opt').html(copy.registerSuitePref);
$('.dm-register #Bedrooms-select-opt-1').html(copy.registerSuitePrefOpt1);
$('.dm-register #Bedrooms-select-opt-2').html(copy.registerSuitePrefOpt2);
$('.dm-register #Bedrooms-select-opt-3').html(copy.registerSuitePrefOpt3);
$('.dm-register #Bedrooms-select-opt-4').html(copy.registerSuitePrefOpt4);
$('.dm-register #Bedrooms-select-opt-5').html(copy.registerSuitePrefOpt5);
$('.dm-register #v-error-Bedrooms').html(copy.registerSuitePrefInvalid);
$('.dm-register #BrokerCompany').attr('placeholder',copy.registerBrokerCompany);
$('.dm-register #v-error-BrokerCompany').html(copy.registerBrokerCompanyInvalid);
$('.dm-register .dm-mandatory').html(copy.registermandatoryFields);
$('.dm-register .dm-btn-submit').html(copy.registerSubmit);
$('.dm-register #Custom1-label').html(copy.registerConsent);
$('.dm-developers .dm-copyright').html(copy.copyright);

$('.dm-register #IsBroker').on('change', function() {
	if ($(this).val() == 'yes') {
		$('.dm-BrokerCompany').show();
	} else {
		$('.dm-BrokerCompany').hide();
	}
});

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
		var $inputs            = $form.find ('.form-control.mandatory, select');
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