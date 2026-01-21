const express = require('express')
const sgMail = require('@sendgrid/mail')
const router = express.Router()

router.post('/send', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Debug logging
        console.log('EMAIL_USER:', process.env.EMAIL_USER ? 'Set' : 'NOT SET');
        console.log('SENDGRID_API_KEY:', process.env.SENDGRID_API_KEY ? 'Set' : 'NOT SET');

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
            from: process.env.EMAIL_USER,
            subject: `New contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`
        };

        // Email to user
        const userMsg = {
            to: email,
            from: process.env.EMAIL_USER,
            subject: 'Thank you for contacting me!',
            text: `Hi ${name},\n\nThank you for your message! I'll get back to you soon.\n\nBest regards,\nAdarsh Thakur`
        };

        console.log('Sending emails via SendGrid...');
        await sgMail.send(ownerMsg);
        await sgMail.send(userMsg);
        console.log('Emails sent successfully!');

        res.status(200).json({
            success: true,
            message: 'Email successfully sent!'
        })
    } catch (error) {
        console.error('============ EMAIL ERROR ============');
        console.error('Error sending email:', error);
        console.error('Error message:', error.message);
        console.error('Error code:', error.code);
        console.error('Error command:', error.command);
        console.error('====================================');
        res.status(500).json({
            success: false,
            message: 'Failed to send email. Please try again.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        })
    }
})

module.exports = router