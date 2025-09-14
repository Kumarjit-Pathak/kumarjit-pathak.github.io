# GitHub Pages Deployment Guide

This guide will help you deploy your CV website to GitHub Pages.

## Quick Start

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `cv-website` or `kumarjit-pathak-cv`)
5. Make it **Public** (required for free GitHub Pages)
6. Don't initialize with README (we already have files)
7. Click "Create repository"

### Step 2: Upload Files

#### Option A: Using GitHub Web Interface
1. Click "uploading an existing file"
2. Drag and drop all your files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `Kumarjit Pathak Photo.jpg`
   - `README.md`
3. Add commit message: "Initial commit: CV website"
4. Click "Commit changes"

#### Option B: Using Git Command Line
```bash
# Navigate to your project folder
cd "E:\GEN AI\my website"

# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: CV website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

### Step 4: Access Your Website

- Your website will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`
- It may take a few minutes to deploy
- You'll see a green checkmark when deployment is complete

## Custom Domain (Optional)

If you want to use a custom domain:

1. In the Pages settings, add your custom domain
2. Update your domain's DNS settings to point to GitHub Pages
3. Add a `CNAME` file to your repository with your domain name

## Updating Your Website

To update your website:

1. Make changes to your local files
2. Commit and push changes to GitHub
3. GitHub Pages will automatically rebuild and deploy

```bash
git add .
git commit -m "Update website content"
git push origin main
```

## Troubleshooting

### Common Issues:

1. **404 Error**: Make sure your main file is named `index.html`
2. **Images not loading**: Check file paths and case sensitivity
3. **Styling not working**: Ensure `styles.css` is properly linked
4. **Repository not found**: Make sure the repository is public

### GitHub Pages Status:
- Check the "Actions" tab in your repository for deployment status
- Green checkmark = successful deployment
- Red X = deployment failed (check the logs)

## Tips for Success

1. **Keep it simple**: Start with the basic setup before adding custom domains
2. **Test locally**: Open `index.html` in your browser to test before deploying
3. **Use descriptive commit messages**: This helps track changes
4. **Regular updates**: Keep your content fresh and up-to-date

## Security Note

Since GitHub Pages is public, don't include:
- Personal phone numbers or addresses
- Sensitive information
- API keys or passwords

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Community Forum](https://github.community/)
- [GitHub Support](https://support.github.com/)

---

**Your CV website is now live and accessible to the world!** 🌟
