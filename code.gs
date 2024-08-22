function doGet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  var data = sheet.getRange("A2:E17").getValues();  // Adjust range according to your data size

  // Sort data by the Final Points column (column 5, zero-indexed as 4) in descending order
  data.sort(function(a, b) {
    return b[4] - a[4];
  });

  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
