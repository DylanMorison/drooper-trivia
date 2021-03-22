import sgMail from "@sendgrid/mail";
import config from "config";

sgMail.setApiKey(config.get("SENDGRID_API_KEY"));

const url = config.get("url");

export const verifyEmail = async (email, emailToken) => {
	const message = {
		from: "dylan@g.morison.org",
		to: email,
		subject: "Email Verification for Drooper Trivia",
		text: `Hi there! Thanks for registering at Drooper Trivia.  
           Please copy the number below to verify your account
           ${url}/verify-email?token=${emailToken}
           `,
		html: `<h1>Greetings Recruit!</h1>
           <p>Please click the link below to verify your account. </p>
           <a href="${url}/verify-email?token=${emailToken}">Verify your account</a>
          `
	};

	try {
		await sgMail.send(message);
	} catch (err) {
		console.log(err);
	}
};

export const passwordReset = async (email, code) => {
	const message = {
		from: "dylan@g.morison.org",
		to: email,
		subject: "Password Reset for Drooper Trivia",
		text: `<h1>${code}</h1>
           `,
		html: `<h1>${code}</h1>
					 <a href="${url}/new-password">Click here to reset your password!</a>`
	};

	try {
		await sgMail.send(message);
	} catch (err) {
		console.log(err);
	}
};

export const portfolioEmail = async (email, subject, body) => {
	const message = {
		from: "dylan@g.morison.org",
		to: "dylan@rmdashrf.net",
		subject,
		html: `<p>Hey Dylan this is Dylan! ${email} has sent you a message:</p>
					 <p>${body}</p>`
	};

	try {
		const res = await sgMail.send(message);
		return res;
	} catch (err) {
		console.log(err);
	}
};
