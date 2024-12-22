document.addEventListener("DOMContentLoaded", () => {
	initializeOnScrollAnimations();
	initializeVideoPlayer();
});

function initializeOnScrollAnimations() {
	const elements = document.querySelectorAll(".lazy-fade-in"); // Target elements to animate

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("fade-in-on-scroll");
					observer.unobserve(entry.target); // Stop observing once the animation is applied
				}
			});
		},
		{
			threshold: 0.3, // Trigger when 30% of the element is visible
		}
	);

	elements.forEach((el) => observer.observe(el));
}

function initializeVideoPlayer() {
	const playButton = document.querySelector(".hero__video-play-button");
	const videoContainer = document.querySelector(".hero__video");

	if (playButton && videoContainer) {
		playButton.addEventListener("click", () => {
			const iframe = document.createElement("iframe");
			iframe.width = "100%";
			iframe.height = videoContainer.clientHeight + 'px';
			iframe.src = "https://www.youtube.com/embed/mUGYPlAgJPw?autoplay=1&rel=0";
			iframe.title = "Form Pages Addon by WPForms";
			iframe.style.border = "0";
			iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
			iframe.allowFullscreen = true;

			videoContainer.classList.add("hero__video-player");
			videoContainer.innerHTML = "";
			videoContainer.appendChild(iframe);
		});
	}
}
