const express = require('express')
const sgMail = require('@sendgrid/mail')
const router = express.Router()

router.post('/send', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validation
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'Name, Your Email and Message is needed! 🤧'
            })
        }

        // Check if SendGrid API key is configured
        if (!process.env.SENDGRID_API_KEY) {
            console.error('SendGrid API key not configured!');
            return res.status(500).json({
                success: false,
                message: 'Email service not configured. Please contact administrator.'
            });
        }

        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        // Email to owner
        const ownerMsg = {
            to: process.env.EMAIL_USER,
            from: process.env.EMAIL_USER, // Must be verified sender in SendGrid
            subject: `New contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
            html: `<h3>New Contact Form Submission</h3>
                   <p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong></p>
                   <p>${message}</p>`
        };

        // Email to user
        const userMsg = {
            to: email,
            from: process.env.EMAIL_USER,
            subject: 'Thank you for contacting me!',
            text: `Hi ${name},\n\nThank you for your message! I'll get back to you soon.\n\nBest regards,\nAdarsh Thakur`,
            html: `<p>Hi ${name},</p>
                   <p>Thank you for your message! I'll get back to you soon.</p>
                   <p>Best regards,<br>Adarsh Thakur</p>`
        };

        console.log('Sending emails via SendGrid...');
        await sgMail.send(ownerMsg);
        await sgMail.send(userMsg);
        console.log('Emails sent successfully via SendGrid!');

        res.status(200).json({
            success: true,
            message: 'Email successfully sent!'
        })
    } catch (error) {
        console.error('SendGrid Error:', error.message || error);
        if (error.response) {
            console.error('SendGrid Error Body:', error.response.body);
        }
        res.status(500).json({
            success: false,
            message: 'Failed to send email. Please try again.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        })
    }
})

module.exports = router