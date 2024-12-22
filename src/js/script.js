document.addEventListener("DOMContentLoaded", () => {
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

	const playButton = document.querySelector(".hero__video-play-button");
	const videoContainer = document.querySelector(".hero__video");

	if (playButton && videoContainer) {
		playButton.addEventListener("click", () => {
			const youtubeEmbed = `
        <iframe
          width="100%"
          height="`+videoContainer.clientHeight+`"
          src="https://www.youtube.com/embed/mUGYPlAgJPw?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `;

			videoContainer.classList.add("hero__video-player");
			videoContainer.innerHTML = youtubeEmbed;
		});
	}
});
