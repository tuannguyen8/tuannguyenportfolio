import { useEffect, useRef, useState } from 'react';

export default function ImageViewer({
	images,
	initialIndex = 0,
	projectTitle,
	onClose,
}) {
	const dialogRef = useRef(null);
	const touchStartRef = useRef(null);
	const [activeIndex, setActiveIndex] = useState(initialIndex);

	function showPrevious() {
		setActiveIndex((current) => (current - 1 + images.length) % images.length);
	}

	function showNext() {
		setActiveIndex((current) => (current + 1) % images.length);
	}

	useEffect(() => {
		const dialog = dialogRef.current;
		const previousFocus = document.activeElement;
		const previousOverflow = document.body.style.overflow;

		dialog.showModal();
		document.body.style.overflow = 'hidden';

		return () => {
			dialog.close();
			document.body.style.overflow = previousOverflow;

			if (previousFocus instanceof HTMLElement) {
				previousFocus.focus();
			}
		};
	}, []);

	function handleKeyDown(event) {
		if (event.key === 'ArrowLeft') {
			event.preventDefault();
			showPrevious();
		}

		if (event.key === 'ArrowRight') {
			event.preventDefault();
			showNext();
		}
	}

	function handleTouchStart(event) {
		if (event.touches.length !== 1) {
			touchStartRef.current = null;
			return;
		}

		const touch = event.touches[0];

		touchStartRef.current = {
			x: touch.clientX,
			y: touch.clientY,
		};
	}

	function handleTouchEnd(event) {
		const start = touchStartRef.current;
		touchStartRef.current = null;

		if (!start || images.length < 2 || event.touches.length > 0) {
			return;
		}

		const touch = event.changedTouches[0];
		if (!touch) return;

		const deltaX = touch.clientX - start.x;
		const deltaY = touch.clientY - start.y;

		// Ignore short gestures and mostly vertical movement.
		if (Math.abs(deltaX) < 50 || Math.abs(deltaX) <= Math.abs(deltaY)) {
			return;
		}

		if (deltaX < 0) {
			showNext();
		} else {
			showPrevious();
		}
	}

	return (
		<dialog
			ref={dialogRef}
			className="image-viewer"
			aria-label={`${projectTitle} screenshots`}
			onKeyDown={handleKeyDown}
			onCancel={(event) => {
				event.preventDefault();
				onClose();
			}}
		>
			<div className="image-viewer__content">
				<button
					className="image-viewer__close"
					type="button"
					aria-label="Close screenshot viewer"
					onClick={onClose}
					autoFocus
				>
					<span aria-hidden="true">×</span>
				</button>

                <figure
                className="image-viewer__figure"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={() => {
                    touchStartRef.current = null;
                }}
                >
					<img
						src={images[activeIndex]}
						alt={`${projectTitle} — screenshot ${activeIndex + 1}`}
					/>

					<figcaption aria-live="polite" aria-atomic="true">
						Screenshot {activeIndex + 1} of {images.length}
					</figcaption>
				</figure>

				{images.length > 1 && (
					<div className="image-viewer__controls">
						<button
							type="button"
							aria-label="Previous screenshot"
							onClick={showPrevious}
						>
							<span aria-hidden="true">←</span>
						</button>

						<button
							type="button"
							aria-label="Next screenshot"
							onClick={showNext}
						>
							<span aria-hidden="true">→</span>
						</button>
					</div>
				)}
			</div>
		</dialog>
	);
}
