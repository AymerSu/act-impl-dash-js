const modules = document.querySelectorAll('.metric-card, .panel');

modules.forEach((module) => {
	module.addEventListener('pointerdown', (event) => {
		if (event.pointerType === 'touch') {
			module.classList.add('is-pressed');
			module.style.setProperty('transform', 'scale(1.012)', 'important');
		}
	});

	['pointerup', 'pointercancel', 'pointerleave'].forEach((eventName) => {
		module.addEventListener(eventName, (event) => {
			if (event.pointerType === 'touch') {
				module.classList.remove('is-pressed');
				module.style.removeProperty('transform');
			}
		});
	});
});
