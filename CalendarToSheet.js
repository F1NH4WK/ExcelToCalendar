function pullDataToSheet() {

  function addNextRow(lastRow, i){
    val = sheet.getRange(lastRow, 1)
    val.setValue(day[i].getTitle());
    console.log(day[i].getTitle())
  }

  function addNextCollumn(lastRow, i){
    val = sheet.getRange(lastRow, 2)
    val.setValue(day[i].getStartTime());
    val = sheet.getRange(lastRow, 3);
    val.setValue(day[i].getEndTime());
  }

  // SETTING VARIABLES TO SHEET
  const sheet = SpreadsheetApp.getActiveSheet();
  let lastRow = sheet.getLastRow() + 1;
  let val = sheet.getRange(lastRow, 1);

  // SETTING VARIABLES TO CALENDAR
  const helper = new Date();
  const yourChoice = 2 // IN HOURS - IF U WANT TO GET THE EVENTS THAT ARE OCURRING IN NEXT 2 HOURS.
  const now = new Date(helper.getTime() + 1200*1000* 2);
  const target = new Date(now.getTime() + 1200*1000 * yourChoice)
  const userCalendar = CalendarApp.getDefaultCalendar();
  const day = userCalendar.getEvents(now, target);

  // ADDING VALUES TO SHEET
  for (i = 0; i <= day.length-1; i++){
    addNextRow(lastRow, i)
    addNextCollumn(lastRow, i)
    lastRow++;
  };
}