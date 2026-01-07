const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()

router.post('/send', async (req, res) => {
    try{
        const {name, email, message} = req.body;

        if(!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'to, subject and body is needed'
            })
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        })
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Portfolio Contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            html: `<h3>New Contact Form Submission</h3>
                   <p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong> ${message}</p>`
        }

        await transporter.sendMail(mailOptions)

        res.status(200).json({
            success: true,
            message: 'email successfully sent'
        })
    } catch(error){
        console.error('error:', error)
        res.status(500).json({
            success:false,
            message: 'email error',
            error: error.message
        })
    }
})

module.exports = router