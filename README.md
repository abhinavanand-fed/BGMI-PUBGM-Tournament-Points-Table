# Points Table Web Page

This project consists of an HTML web page that displays a points table for a competition. The data is fetched from an external source (Google Sheets) using Google Apps Script.

## Files

1. **index.html:**
   - Defines the structure of the web page.
   - Displays the points table with the following columns:
     - Team Name
     - Finishes
     - Placement
     - Placement Points
     - Total Points
   - Utilizes JavaScript to fetch and populate data dynamically.

2. **code.gs:**
   - Google Apps Script file.
   - Contains a `doGet` function that fetches data from Google Sheets, sorts it, and returns a JSON response.

## Usage

1. **Google Sheets Setup:**
   - Create a Google Sheets spreadsheet with the relevant data (team names, finishes, placement, and points).
   - Ensure the data is in the range A2:E17 (adjust as needed).

2. **Google Apps Script:**
   - Open Google Sheets.
   - Go to Extensions > Apps Script.
   - Paste the contents of `code.gs` into the script editor.
   - Save the script.

3. **Deploy as Web App:**
   - In the script editor, click the deploy button (rocket icon).
   - Choose "New deployment."
   - Set the deployment type to "Web app."
   - Click "Deploy."
   - Copy the generated web app URL.

4. **Embed in HTML:**
   - Replace the URL in the `fetch` function within `index.html` with your deployed web app URL.

5. **Access the Web Page:**
   - Open `index.html` in a web browser.
   - The points table will be displayed, sorted by total points.

## Notes

- Customize the styling (CSS) in `index.html` as desired.
- Ensure that the Google Sheets data is up-to-date for accurate results.
- Adjust the data range and column indices in `code.gs` if needed.
