<?php
	/* site settings */
	define("DEBUG_MODE", "on");

	define("SITE_TITLE", "908 St.Clair");
	define("COMPANY", "Canderel");
	define("SITE_DESCRIPTION", "");
	
	/* database */
	define("DB_HOST", "localhost");



	// if (strpos($_SERVER["HTTP_HOST"], "kokomo-full.joeyai.cloud") !== false) { 
		// define("DB_USER", "joey");
		// define("DB_PWD", "xR?azV%c)6@j");

// 	 } else {
// 		define("DB_USER", "admin");
// 		define("DB_PWD", "6xfjybxk");

//    }


	define("DB_DB", "");
	
	/* email */
	define("EMAIL_FROM", "Canderel");
	define("EMAIL_FROM_ADDRESS", "hello@canderelbv.com");
	define("EMAIL_ADMIN", "hello@canderelbv.com");
	define("SENDER_FROM", "email@tbf.email"); # don't change this

	/* standard registration email */
	# THIS EMAIL MAY BE SENT WHEN A STANDARD REGISTRATION PAGE IS SUBMITTED (action=/do-register, requires cid to be set)
	define("SEND_THANKYOU", "no"); // send a thank you email (yes | no)? 
	define("THANKYOU_SUBJECT", ""); // default email subject
	define("THANKYOU_TEMPLATE", "thank-you"); // no .html needed

	/* simple thank you for contact us email */
	# THIS EMAIL MAY BE SENT WHEN A CONTAC PAGE IS SUBMITTED (action=/do-contact, INFO IS NOT SAVED IN THE DB)
	define("SEND_CONTACT_THANKYOU", "no"); // send a thank you email (yes | no)? 
	define("THANKYOU_CONTACT_SUBJECT", "Thank you for your inquiry"); // default email subject
	define("THANKYOU_CONTACT_TEMPLATE", "contact"); // no .html needed

?>