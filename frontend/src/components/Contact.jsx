import { contact } from '../data/contact.js';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../data/emailConfig.js';

export default function Contact() {
	const [status, setStatus] = useState('idle');
	const sendingRef = useRef(false);

	async function handleSubmit(event) {
		event.preventDefault();

		if (sendingRef.current) return;

		const form = event.currentTarget;
		const formData = new FormData(form);

		const templateParams = {
			user_name: String(formData.get('name') ?? '').trim(),
			user_email: String(formData.get('email') ?? '').trim(),
			subject: String(formData.get('subject') ?? '').trim(),
			message: String(formData.get('message') ?? '').trim(),
		};

		if (Object.values(templateParams).some((value) => !value)) {
			setStatus('invalid');
			return;
		}

		sendingRef.current = true;
		setStatus('sending');

		try {
			await emailjs.send(
				emailConfig.serviceId,
				emailConfig.templateId,
				templateParams,
				{ publicKey: emailConfig.publicKey },
			);

			form.reset();
			setStatus('success');
		} catch (error) {
            console.error('EmailJS send failed:', {
                status: error.status,
                text: error.text,
            });
			setStatus('error');
		} finally {
			sendingRef.current = false;
		}
	}
	return (
		<section
			className="contact-section"
			id="contact"
			tabIndex={-1}
			aria-labelledby="contact-title"
		>
			<div className="contact-section__information">
				<p className="eyebrow">Get in touch</p>

				<h2 id="contact-title">{contact.heading}</h2>

				<p className="contact-section__introduction">{contact.introduction}</p>

				<a href={`mailto:${contact.email}`}>{contact.email}</a>

				<a href={contact.phone.href}>{contact.phone.label}</a>

				<p className="contact-section__location">{contact.location}</p>

				<div className="contact-section__socials">
					{contact.socialLinks.map((link) => (
						<a
							key={link.label}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							{link.label}
							<span aria-hidden="true"> ↗</span>
						</a>
					))}
				</div>
			</div>

			<form
				className="contact-form"
				onSubmit={handleSubmit}
                aria-busy={status === 'sending'}
			>
				<div className="contact-form__row">
					<div className="contact-form__field">
						<label htmlFor="contact-name">Name</label>
						<input
							id="contact-name"
							name="name"
							type="text"
							autoComplete="name"
							required
							maxLength={120}
						/>
					</div>

					<div className="contact-form__field">
						<label htmlFor="contact-email">Email</label>
						<input
							id="contact-email"
							name="email"
							type="email"
							autoComplete="email"
							required
							maxLength={254}
						/>
					</div>
				</div>

				<div className="contact-form__field">
					<label htmlFor="contact-subject">Subject</label>
					<input
						id="contact-subject"
						name="subject"
						type="text"
						required
						maxLength={200}
					/>
				</div>

				<div className="contact-form__field">
					<label htmlFor="contact-message">Message</label>
					<textarea
						id="contact-message"
						name="message"
						rows={6}
						required
						maxLength={6000}
					/>
				</div>

                <button
                className="button"
                type="submit"
                disabled={status === 'sending'}
                >
                {status === 'sending'
                    ? 'Sending…'
                    : status === 'error'
                    ? 'Try again'
                    : 'Send message'}

                {status !== 'sending' && (
                    <span aria-hidden="true">↗</span>
                )}
                </button>

                <div
                className="contact-form__status"
                role="status"
                aria-atomic="true"
                >
                {status === 'invalid' && (
                    <p>Please complete every field using more than spaces.</p>
                )}

                {status === 'success' && (
                    <p className="contact-form__feedback contact-form__feedback--success">
                    Thanks! Your message has been sent.
                    </p>
                )}

                {status === 'error' && (
                    <p className="contact-form__feedback contact-form__feedback--error">
                    Your message could not be sent. Please try again or{' '}
                    <a href={`mailto:${contact.email}`}>email me directly</a>.
                    </p>
                )}
                </div>
			</form>
		</section>
	);
}
