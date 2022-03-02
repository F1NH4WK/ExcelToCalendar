function pullDataToSheet() {

    function addNextRow(lastRow, i){
      val = sheet.getRange(lastRow, 1)
      val.setValue(day[i].getTitle());
    }
  
    function addNextCollumn(lastRow, i){
      val = sheet.getRange(lastRow, 2)
      val.setValue(day[i].getStartTime());
      val = sheet.getRange(lastRow, 3);
      val.setValue(day[i].getEndTime());
    }
  
    // SETTING VARIABLES TO SHEET
    let sheet = SpreadsheetApp.getActiveSheet();
    let lastRow = sheet.getLastRow() + 1;
    let val = sheet.getRange(lastRow, 1);
  
    // SETTING VARIABLES TO CALENDAR
    let helper = new Date();
    let now = new Date(helper.getTime() + (2*60*60*1000));
    let hoursNext = new Date(now.getTime() + (2*60*60*1000))
    let userCalendar = CalendarApp.getDefaultCalendar();
    let day = userCalendar.getEvents(now, hoursNext);
  
    // ADDING VALUES TO SHEET
    for (i = 0; i <= day.length-1; i++){
      addNextRow(lastRow, i)
      addNextCollumn(lastRow, i)
      lastRow++;
    };
}