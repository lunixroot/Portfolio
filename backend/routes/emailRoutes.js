const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()

router.post('/send', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'Name, Your Email and Message is needed! 🤧'
            })
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS || process.env.EMAIL_PASSWORD
            }
        })


        // const mailOptions = {
        //     from: email,
        //     to: process.env.EMAIL_USER,
        //     subject: `Portfolio Contact from ${name}`,
        //     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        //     html: `<h3>New Contact Form Submission</h3>
        //            <p><strong>Name:</strong> ${name}</p>
        //            <p><strong>Email:</strong> ${email}</p>
        //            <p><strong>Message:</strong> ${message}</p>`
        // }

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

        // await transporter.sendMail(mailOptions)

         await transporter.sendMail(ownerMailOptions)
        await transporter.sendMail(userMailOptions)


        res.status(200).json({
            success: true,
            message: 'email successfully sent'
        })
    } catch (error) {
        console.error('error:', error)
        res.status(500).json({
            success: false,
            message: 'email error',
            error: error.message
        })
    }
})

module.exports = router