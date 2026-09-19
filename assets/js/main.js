document.addEventListener("DOMContentLoaded", function () {
	const toggle = document.querySelector(".nav-toggle");
	const menu = document.querySelector(".nav-menu");

	if (!toggle || !menu) {
		return;
	}

	function closeMenu() {
		menu.classList.remove("is-open");
		toggle.classList.remove("is-open");
		toggle.setAttribute("aria-expanded", "false");
	}

	toggle.addEventListener("click", function () {
		const isOpen = menu.classList.toggle("is-open");

		toggle.classList.toggle("is-open", isOpen);
		toggle.setAttribute("aria-expanded", isOpen);
	});

	menu.querySelectorAll("a").forEach(function (link) {
		link.addEventListener("click", function () {
			closeMenu();
		});
	});
});