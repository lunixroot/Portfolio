const express = require('express')
const nodemailer = require('nodemailer')
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

        // Check if email credentials are configured
        if (!process.env.EMAIL_USER || (!process.env.EMAIL_PASS && !process.env.EMAIL_PASSWORD)) {
            console.error('Email credentials not configured!');
            return res.status(500).json({
                success: false,
                message: 'Server email configuration error. Please contact administrator.'
            });
        }

        console.log('Creating email transporter...');
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // use SSL
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS || process.env.EMAIL_PASSWORD
            },
            tls: {
                rejectUnauthorized: false
            },
            connectionTimeout: 15000,
            greetingTimeout: 15000,
            socketTimeout: 20000
        })

        console.log('Attempting to send emails...');

        const ownerMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `new contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`
        }

        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'thank you for contacting me!',
            text: `Hi ${name},\n\nThank you for your message!\n\nBest regards,\nAdarsh`
        }

        console.log('Sending emails...');
        await transporter.sendMail(ownerMailOptions)
        await transporter.sendMail(userMailOptions)
        console.log('Emails sent successfully');

        res.status(200).json({
            success: true,
            message: 'email successfully sent'
        })
    } catch (error) {
        console.error('Error sending email:', error.message || error)
        console.error('Error code:', error.code)
        console.error('Error command:', error.command)
        console.error('Full error:', JSON.stringify(error, null, 2))
        res.status(500).json({
            success: false,
            message: 'Failed to send email. Please try again.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        })
    }
})

module.exports = router