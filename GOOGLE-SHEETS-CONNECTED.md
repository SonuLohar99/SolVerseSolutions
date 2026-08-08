# SolVerse Solutions — Google Sheets Connected Website

This copy is connected to your Google Apps Script Web App endpoint:

`https://script.google.com/macros/s/AKfycbwiQNanZy24Bl-iAnFkKJ91yQhap9vq-44LCnMoPKdeyuZv2s9pJqOqnh_WZAn9gnoE/exec`

## Forms connected
- `contact.html` → **Contact Enquiries**
- `internship.html` → **Internship Applications**

## Important
- Keep the Google Sheet itself private. Website visitors do not need access to it.
- The Apps Script Web App must remain deployed with access for anyone to submit.
- If you edit the Apps Script code later, create/update the deployment so the `/exec` deployment uses the latest version.

## Test
1. Open the deployed website.
2. Go to Contact and submit a test enquiry.
3. Open the **Contact Enquiries** tab and look for a new row.
4. Go to Internship and submit a test application.
5. Open **Internship Applications** and look for a new row.

The browser uses a simple `text/plain` POST to avoid a CORS preflight; the Apps Script `doPost(e)` parses the JSON body and writes it to the appropriate sheet. Google Apps Script web apps support `doPost` requests and ContentService responses.
