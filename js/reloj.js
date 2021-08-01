var monthFormatter = new Intl.DateTimeFormat("en-us", { month: "long" });
var weekdayFormatter = new Intl.DateTimeFormat("en-us", { weekday: "long" });

var dates = [];
dates[0] = new Date(); 
dates[1] = addDays(dates[0], 31);

var currentDate = 0; 
var previousDate = 1;

var datesBoxes = $(".date-picker-date");
var displayBoxes = $(".date-picker-display");


var windowWidth = 300;
var colourPickerWidth = 300;


$(document).ready(function() {
  
  updateDatePicker();
 
  $(datesBoxes[0]).text(getDateString(dates[0]));
  $(datesBoxes[1]).text(getDateString(dates[1]));
  
  $(displayBoxes[0]).text(dates[0].getDate() + " " + monthFormatter.format(dates[0]).slice(0,3));
  $(displayBoxes[1]).text(dates[1].getDate() + " " + monthFormatter.format(dates[1]).slice(0,3));
});

$(document).ready(function() {
  
 
  applyDateEventListener();
  
  $(".date-picker-date").click(function(e) {
    
    
    var currentlyActive = $(this).hasClass("active");
    if (currentlyActive) {
      $(this).removeClass("active");
      hideDatePicker();
      return;
    }
    
    $(".date-picker-date").removeClass("active");
    $(this).addClass("active");
    
    
    previousDate = currentDate;
    if ($(this)[0].id == "date-picker-date-first") {
      currentDate = 0;
    } else {
      currentDate = 1;
    }
    
    
    showDatePicker(e);
    updateDatePicker();
  });
  
  $("#date-picker-next-month").click(function() {
    changeMonth("Next");
  });
  
  $("#date-picker-previous-month").click(function() {
    changeMonth("Previous");
  });
  
  $("#date-picker-exit").click(function() {
    hideDatePicker();
  });
  
  $(document).click(function(e) {
    var target = $(e.target);
    var clickedOnPicker = (target.closest("#date-picker-modal").length);
    var clickedOnDate = (target.closest(".date-picker-date").length);
    var isPreviousOrNext = target.hasClass("previous-month") || target.hasClass("next-month");
    
    if (!(clickedOnPicker || clickedOnDate || isPreviousOrNext)) {
      hideDatePicker();
    }
  });
  
});


function updateDatePicker(changeMonth = false) {
  
  var datePicker = $("#date-picker");
  var curDate = dates[currentDate]; 
  
  
  var differentMonth = checkChangedMonth();
  if (changeMonth === false && differentMonth === false) { return; }
  
  updatePickerMonth();
  
 
  var headerRow = `
    <tr id="date-picker-weekdays">
      <th>L</th>
      <th>M</th>
      <th>M</th>
      <th>J</th>
      <th>V</th>
      <th>S</th>
      <th>D</th>
    </tr>`;
 
  datePicker.contents().remove();
  datePicker.append(headerRow);
  
  var todayDate = curDate.getDate();
  var firstOfMonth = new Date(curDate.getFullYear(), curDate.getMonth(), 1);
  var firstWeekday = firstOfMonth.getDay(); 
  var lastMonthToInclude = firstWeekday; 
  var firstOfNextMonth = addMonths(firstOfMonth, 1);
  var lastOfMonth = addDays(firstOfNextMonth, -1).getDate();
  
  var openRow = "<tr class='date-picker-calendar-row'>";
  var closeRow = "</tr>";
  var currentRow = openRow;
  
  if (lastMonthToInclude > 0) {
    var lastMonthLastDay = addDays(firstOfMonth, -1);
    var lastMonthDays = lastMonthLastDay.getDate();
    var lastMonthStartAdding = lastMonthDays - lastMonthToInclude + 1;
    
  
    addToCalendar(lastMonthStartAdding, lastMonthDays, 0, "previous-month");
  }
  
  
  addToCalendar(1, 7 - lastMonthToInclude, lastMonthToInclude, true);
  
 
  currentRow = openRow;
  
  var counter = 7;
  var addedFromCurrentMonth = 7 - firstWeekday + 1;
  
  addToCalendar(addedFromCurrentMonth, lastOfMonth, counter, true);
  
  
  counter = lastMonthToInclude + lastOfMonth;
  var nextMonthToInclude = counter % 7 === 0 ? 0 : 7 - (counter % 7);
  
  addToCalendar(1, nextMonthToInclude, counter, "next-month");

  applyDateEventListener();
  
 
  updateDateShown();
  
  
  
  function checkChangedMonth() {
    
    var differentMonth = false;

    if (currentDate !== previousDate) {
   
      if (dates[0].getMonth() !== dates[1].getMonth() || dates[0].getYear() !== dates[1].getYear() ) {
        differentMonth = true;
      }
    }
    
    return differentMonth;
    
  }
  
  function addToCalendar(start, end, counter, cellClass) {
    
    var currentMonth = cellClass === true ? true : false;
    
    for (var i = start; i <= end; i++) {
      counter += 1;
      if (i === todayDate && currentMonth) {
        currentRow += `<td class="active">${i}</td>`;
      } else if (cellClass && !currentMonth) {
        currentRow += `<td class="${cellClass}">${i}</td>`;
      } else {
        currentRow += `<td>${i}</td>`;
      }
      if (counter % 7 === 0) {
        datePicker.append(currentRow + closeRow);
        currentRow = openRow;
      }
    }
  }
}

function updatePickerMonth() {
  var monthName = monthFormatter.format(dates[currentDate]);
  var year = dates[currentDate].getFullYear();
  var dateText = monthName + " " + year;
  $("#date-picker-month").text(dateText);
}

function dateSelected(currentDay) {
  

  var activeDate = $( $(".date-picker-date.active")[0] );
  

  dates[currentDate].setDate(currentDay);
  updateDateShown();
}


function changeMonth(direction) {
  
  var increment = direction === "Next" ? 1 : -1;

  dates[currentDate] = addMonths(dates[currentDate], increment);
  
 
  updatePickerMonth();
  

  updateDatePicker(true);
}

function showDatePicker(e) {
  
  var pxFromTop = $(".date-picker-date").offset().top;
  var datePicker = $("#date-picker-modal");
  datePicker.css("top", pxFromTop + 40);

  var rightEdge = e.pageX + colourPickerWidth;
  var overflowWidth = rightEdge - windowWidth;
  if (overflowWidth > 0) {
    datePicker.css("left", e.pageX - overflowWidth);
  } else {
    datePicker.css("left", e.pageX);
  }
  
  $("#date-picker-modal").removeClass("hidden-2");
}

function hideDatePicker() {
  $(".date-picker-date").removeClass("active");
  $("#date-picker-modal").addClass("hidden-2");
}

function applyDateEventListener() {
  
  $("#date-picker td").click(function() {
    
 
    $("#date-picker td").removeClass("active");
    $(this).addClass("active");
    
 
    currentDay = $(this).text();
    

    dateSelected(currentDay);


    if ($(this).hasClass("previous-month")) {
      changeMonth("Previous");
    } else if ($(this).hasClass("next-month")) {
      changeMonth("Next");
    } else {

      hideDatePicker();
    }
  });
  
}


$(document).ready(function() {
  updateWidths();
});

$(window).resize(function() {
  updateWidths();
});

function updateWidths() {
  windowWidth = $(window).width();
}


function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function addMonths(date, months) {
  var result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}


function getDateString(date) {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;

  return day + '/' + month + '/' + year;
}

function updateDateShown() {
  var formattedDate = getDateString(dates[currentDate]);
  var updateDateBox = $(datesBoxes[currentDate]);
  
  var updateDisplayBox = $(displayBoxes[currentDate]);
  var dayAndMonth = dates[currentDate].getDate() + " " + monthFormatter.format(dates[currentDate]).slice(0,3);
  
  updateDateBox.text(formattedDate);
  updateDisplayBox.text(dayAndMonth);
}