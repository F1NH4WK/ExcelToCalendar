function pullDataToSheet() {

  const objectInfos = {
    nameCollumn: 2,
    dateStartCollumn: 5,
    dateEndCollumn: 7
  };

  /* THIS OBJECT IS THE ONLY THING YOU NEED TO CHANGE FOR YOUR OWN INFORMATIONS, HERE:

    const objectInfos = {
    nameCollumn: - here u put the collumn u want to show the event's name,
    dateStartCollumn: - here u put the collumn u want to show the event's start date,
    dateEndCollumn: - here u put the collumn u want to show the event's end date.
  };

*/

  const timeTarget = 2; // IN HOURS, LIKE, IF U WANT TO GET THE EVENTS THAT'RE OCURRING IN NEXT 3 HOURS, THEN timeTarge should be 3;

  function addNextRow(lastRow, i, ob){
    val = sheet.getRange(lastRow, ob.nameCollumn)
    val.setValue(day[i].getTitle());
  }

  function addNextCollumn(lastRow, i, ob){
    val = sheet.getRange(lastRow, ob.dateStartCollumn)
    val.setValue(day[i].getStartTime());
    val = sheet.getRange(lastRow, ob.dateEndCollumn);
    val.setValue(day[i].getEndTime());
  }

  // SETTING VARIABLES TO SHEET

  const sheet = SpreadsheetApp.getActiveSheet();
  let lastRow = sheet.getLastRow() + 1;
  let val = sheet.getRange(lastRow, objectInfos.nameCollumn);

  // SETTING VARIABLES TO CALENDAR

  const helper = new Date();
  const now = new Date(helper.getTime() + 3600*1000* 2);
  const target = new Date(now.getTime() + 3600*1000 * timeTarget)
  const day = CalendarApp.getDefaultCalendar().getEvents(now, target);

  // ADDING VALUES TO SHEET
  
  for (i = 0; i <= day.length-1; i++){
    addNextRow(lastRow, i, objectInfos)
    addNextCollumn(lastRow, i, objectInfos)
    lastRow++;
  };
};