# Portfolio Deployment Guide

यह guide आपको step-by-step बताएगी कि अपने portfolio को कैसे deploy करें।

## 📋 Prerequisites

1. GitHub account
2. Vercel account (GitHub se login करें)
3. Email के लिए Gmail App Password

---

## 🚀 Deployment Steps

### Step 1: GitHub पर Push करें

```bash
# अगर Git initialized नहीं है तो:
git init
git add .
git commit -m "Initial commit - Portfolio ready for deployment"

# GitHub पर new repository बनाएं (my-portfolio)
# फिर push करें:
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
git branch -M main
git push -u origin main
```

---

### Step 2: Backend Deploy करें (Vercel)

1. **Vercel पर जाएं**: https://vercel.com
2. **Import Project** click करें
3. GitHub repository select करें: `my-portfolio`
4. **Root Directory** में `backend` select करें
5. **Environment Variables** add करें:
   - `EMAIL_USER`: आपका Gmail address
   - `EMAIL_PASS`: Gmail App Password (नीचे देखें कैसे बनाएं)
   - `PORT`: 3000
   - `FRONTEND_URL`: `*` (temporarily, बाद में update करेंगे)

6. **Deploy** click करें

**आपको मिलेगा**: `https://your-backend-name.vercel.app`

#### Gmail App Password कैसे बनाएं:
1. Google Account → Security → 2-Step Verification ON करें
2. Security → App Passwords
3. App select करें: "Mail"
4. Device select करें: "Other" (type: Portfolio Backend)
5. Generate → Password copy करें
6. Vercel में `EMAIL_PASS` में paste करें

---

### Step 3: Frontend Deploy करें (Vercel)

1. **Vercel पर फिर से जाएं**
2. **New Project** click करें
3. Same GitHub repository select करें
4. **Root Directory** में `frontend` select करें
5. **Environment Variables** add करें:
   - `REACT_APP_BACKEND_URL`: `https://your-backend-name.vercel.app` (Step 2 से)

6. **Deploy** click करें

**आपको मिलेगा**: `https://your-portfolio-name.vercel.app`

---

### Step 4: CORS Update करें

Backend के Vercel dashboard में जाएं:
1. **Settings** → **Environment Variables**
2. `FRONTEND_URL` को update करें:
   - Value: `https://your-portfolio-name.vercel.app` (Step 3 से)
3. **Redeploy** करें

---

## 🎯 Alternative: Render पर Deploy करें

### Backend on Render (Free)

1. **Render पर जाएं**: https://render.com
2. **New Web Service** click करें
3. GitHub connect करें और repository select करें
4. Settings:
   - **Name**: `my-portfolio-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

5. **Environment Variables** add करें (same as Vercel)

6. Deploy होने के बाद URL मिलेगा: `https://my-portfolio-backend.onrender.com`

**Note**: Render free tier में service 15 minutes inactive रहने पर sleep mode में जाती है। पहली request पर 50 seconds लग सकते हैं।

---

## 📱 Testing

1. Frontend URL खोलें
2. Contact form fill करें
3. Submit करें
4. Email check करें

---

## 🔧 Troubleshooting

### Issue: CORS Error
- Backend में `FRONTEND_URL` environment variable check करें
- Redeploy करें

### Issue: Email Not Sending
- Gmail App Password correct है check करें
- 2-Step Verification ON है check करें
- Backend logs check करें

### Issue: 500 Error
- Backend logs में errors check करें
- Environment variables properly set हैं check करें

---

## 🎨 Custom Domain (Optional)

### Vercel पर:
1. Project Settings → Domains
2. Domain add करें
3. DNS records update करें (Vercel instructions के according)

---

## 📊 Monitoring

- **Vercel Dashboard**: Real-time logs और analytics
- **Render Dashboard**: Logs और metrics

---

## 🔄 Updates

Code में changes करने के बाद:

```bash
git add .
git commit -m "Update message"
git push
```

Vercel/Render automatically redeploy करेगा! ✨

---

## 💡 Tips

1. **Environment Variables** को safely store करें
2. `.env` files को `.gitignore` में रखें (already done)
3. Free tier limits track करें
4. Regular backups लें

---

## 🆘 Need Help?

- Vercel Docs: https://vercel.com/docs
- Render Docs: https://render.com/docs

---

**Happy Deploying! 🚀**
