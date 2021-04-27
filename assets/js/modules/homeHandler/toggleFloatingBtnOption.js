/*     Floating button option
  ============================== */

const toggleFloatingBtnOption = () => {
	const floatingAddBtn = document.querySelector('.floating-add_btn');
	const modal = document.querySelector('.modal_add');
	const modalOptions = document.querySelectorAll('.modal_option');

	const tileTypes = [
		'<a href="/pages/main/edittile.html?id=new&type=toggle" class="col-2 modal_option">Toggle</a>'
	];

	floatingAddBtn.addEventListener('click', e => {
		modal.classList.toggle('is-hidden');
	});

	modalOptions.forEach(each => {
		each.addEventListener('click', e => {
			const clickedOption = e.target.getAttribute('this-option');

			modal.classList.add('is-hidden');

			if (clickedOption === 'tile') {
				document
					.querySelector('.modal_tile_types')
					.classList.remove('is-hidden');
			} else {
				window.location.href = '/pages/main/editbroker.html?id=new';
			}
		});
	});
};

export default toggleFloatingBtnOption;
