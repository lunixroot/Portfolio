#!/bin/bash

echo "🚀 Starting Deployment Setup..."
echo ""

# Check if Git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit - Portfolio ready for deployment"
    echo "✅ Git initialized"
else
    echo "✅ Git already initialized"
fi

echo ""
echo "📝 Next Steps:"
echo ""
echo "1. Create a new repository on GitHub: https://github.com/new"
echo "   Repository name: my-portfolio"
echo ""
echo "2. Run these commands:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Deploy Backend on Vercel:"
echo "   - Visit: https://vercel.com"
echo "   - Import your GitHub repository"
echo "   - Set Root Directory: backend"
echo "   - Add Environment Variables:"
echo "     • EMAIL_USER=your-email@gmail.com"
echo "     • EMAIL_PASS=your-gmail-app-password"
echo "     • PORT=3000"
echo "     • FRONTEND_URL=*"
echo ""
echo "4. Deploy Frontend on Vercel:"
echo "   - Import same repository again"
echo "   - Set Root Directory: frontend"
echo "   - Add Environment Variables:"
echo "     • REACT_APP_BACKEND_URL=https://your-backend-url.vercel.app"
echo ""
echo "5. Update Backend CORS:"
echo "   - Go to Backend Vercel dashboard"
echo "   - Update FRONTEND_URL to your frontend URL"
echo "   - Redeploy"
echo ""
echo "📖 Full guide available in DEPLOYMENT.md"
echo ""
echo "🎉 Setup complete! Follow the steps above to deploy."
