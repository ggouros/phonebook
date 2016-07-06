$(document).ready(function() {
	/**
 *	Display a form to add new contact
 */
	$('.js-insert').on('click', function(event) {
		event.preventDefault();
    $('.js-form').toggleClass('is-visible');
		$('.delete-row').removeClass('is-visible');
		$('.js-form-overlay').addClass('is-visible');
	});

	/**
	*	Display delete column
	*/
	$('.js-delete').on('click', function(event) {
		event.preventDefault();
		$('.delete-row').toggleClass('is-visible');
		$('.js-form').removeClass('is-visible');
	});

	/**
	*	Delete row
	*/
	$('.contact-list').on('click', '.delete-row', function(event) {
		event.preventDefault();
		$(this).closest('.contact').remove();
	});

	/**
	*	Form submit button event
	*/
	$('.js-form').submit(function(event) {
		event.preventDefault();
		$('.contact-list').prepend('<tr class="contact"><td class="delete-row"><span class="glyphicon glyphicon-remove"></span></td><td>' +
		$('.form-name').val()+'</td><td>' +
		$('.form-surname').val()+'</td><td>' +
		$('.form-phone').val()+'</td></tr>');
		$(this).closest('form').find("input, textarea").val("");
		$('.js-form').removeClass('is-visible');
		$('.js-form-overlay').removeClass('is-visible');
	});

	/**
	*	Form cancel button event
	*/
	$('.js-form').on('click', '.js-cancel', function(event) {
		$(this).closest('form').find("input, textarea").val("");
		$('.js-form').removeClass('is-visible');
		$('.js-form-overlay').removeClass('is-visible');
	});
});
