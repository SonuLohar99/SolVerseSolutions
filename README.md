# SolVerse Solutions website

Static, responsive HTML/CSS/JavaScript website ready for GitHub Pages.

## Publish

1. Create a GitHub repository and upload the contents of this folder (not the folder itself).
2. In **Settings → Pages**, select **Deploy from a branch**, then select `main` and `/ (root)`.
3. Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` in `robots.txt` and `sitemap.xml` with the live GitHub Pages address.

## Before launch

- Replace `assets/images/logo.svg` with the final supplied logo if desired.
- Update placeholder phone number, email address and office location across the HTML files.
- Connect forms to Formspree, Netlify Forms, EmailJS, or your own server. Forms currently show an on-page confirmation only.
- Review the sample privacy policy and terms with appropriate legal counsel.

## Structure

`assets/css/style.css` contains the entire visual system and responsive rules. `assets/js/script.js` handles navigation, reveal animations, number counters and the demo form state. Every page is plain HTML for simple editing and GitHub Pages compatibility.
