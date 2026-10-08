/**
 * Saves every booking-form request to a Google Sheet AND emails it to you.
 * Setup: see README.md, section "Make the booking form work".
 */
const NOTIFY_EMAIL = "mozubair1989@gmail.com";

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

  // Header row is created automatically from the first request, new fields are added as columns.
  const keys = Object.keys(data);
  let header = sheet.getLastColumn() ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0] : [];
  keys.forEach(function (k) { if (header.indexOf(k) === -1) header.push(k); });
  sheet.getRange(1, 1, 1, header.length).setValues([header]);
  sheet.appendRow(header.map(function (k) { return data[k] === undefined ? "" : data[k]; }));

  const body = keys.map(function (k) { return k + ": " + data[k]; }).join("\n");
  MailApp.sendEmail(NOTIFY_EMAIL, "New orthopedic home visit request", body);

  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
