// Read and display the initial value for each input
$("#checkBoxValue").text($("#checkBox_1").prop("checked"));
$("#colorValue").text($("#color_1").val());
$("#dateValue").text($("#date_1").val());
$("#dateTimeLocalValue").text($("#dateTimeLocal_1").val());
$("#emailValue").text($("#email_1").val());
$("#monthValue").text($("#month_1").val());
$("#numberValue").text($("#number_1").val());
$("#passwordValue").text($("#password_1").val());
$("#radioValue").text($("input[name='orientation_1']:checked").val());
$("#rangeValue").text($("#range_1").val());
$("#searchValue").text($("#search_1").val());
$("#telValue").text($("#tel_1").val());
$("#textValue").text($("#text_1").val());
$("#timeValue").text($("#time_1").val());
$("#urlValue").text($("#url_1").val());
$("#weekValue").text($("#week_1").val());
$("#textAreaValue").text($("#textArea_1").val());
$("#selectValue").text($("#select_1").val());

// Handle the change event for the inputs by displaying the new value
// Mirror one input to another
$("#checkBox_1, #checkBox_2").on("change", toggleCheckBox);
$("#color_1, #color_2").on("change", changeColor);
$("#date_1, #date_2").on("change", changeDate);
$("#dateTimeLocal_1, #dateTimeLocal_2").on("change", changeDateTimeLocal);
$("#emailForm_1, #emailForm_2").submit(changeEmail);
$("#month_1, #month_2").on("change", changeMonth);
$("#number_1, #number_2").on("change", changeNumber);
$("#password_1, #password_2").on("change", changePassword);
$("input[name='orientation_1'], input[name='orientation_2']").on("change", changeRadio);
$("#range_1, #range_2").on("change", changeRange);
$("#search_1, #search_2").on("change", changeSearch);
$("#tel_1, #tel_2").on("change", changeTel);
$("#text_1, #text_2").on("change", changeText);
$("#time_1, #time_2").on("change", changeTime);
$("#urlForm_1, #urlForm_2").submit(changeUrl);
$("#week_1, #week_2").on("change", changeWeek);
$("#textArea_1, #textArea_2").on("change", changeTextArea);
$("#dataListForm_1, #dataListForm_2").submit(changeBrowser);
$("#select_1, #select_2").on("change", changeSelect);
$("#multiSelect_1, #multiSelect_2").on("change", changeMultiSelect);

function toggleCheckBox() {
  var myCheckBox = $(this).prop("checked");
  $("#checkBox_1").prop("checked", myCheckBox);
  $("#checkBox_2").prop("checked", myCheckBox);
  $("#checkBoxValue").text(myCheckBox);
}

function changeColor() {
  var myColor = $(this).val();
  $("#color_1").val(myColor);
  $("#color_2").val(myColor);
  $("#colorValue").text(myColor);
}

function changeDate() {
  var myDate = $(this).val();
  $("#date_1").val(myDate);
  $("#date_2").val(myDate);
  $("#dateValue").text(myDate);
}

function changeDateTimeLocal() {
  var myDateTimeLocal = $(this).val();
  $("#dateTimeLocal_1").val(myDateTimeLocal);
  $("#dateTimeLocal_2").val(myDateTimeLocal);
  $("#dateTimeLocalValue").text(myDateTimeLocal);
}

function changeEmail() {
  event.preventDefault();
  var myEmail = $(this).find("[type='email']").val();
  $("#email_1").val(myEmail);
  $("#email_2").val(myEmail);
  $("#emailValue").text(myEmail);
}

function changeMonth() {
  var myMonth = $(this).val();
  $("#month_1").val(myMonth);
  $("#month_2").val(myMonth);
  $("#monthValue").text(myMonth);
}

function changeNumber() {
  var myNumber = $(this).val();
  $("#number_1").val(myNumber);
  $("#number_2").val(myNumber);
  $("#numberValue").text(myNumber);
}

function changePassword() {
  var myPassword = $(this).val();
  $("#password_1").val(myPassword);
  $("#password_2").val(myPassword);
  $("#passwordValue").text(myPassword);
}

function changeRadio() {
  var myRadio = $(this).val();
  if (myRadio === "portrait") {
    $("#portrait_1, #portrait_2").prop("checked", true);
  } else {
    $("#landscape_1, #landscape_2").prop("checked", true);
  }
  $("#radioValue").text(myRadio);
}

function changeRange() {
  var myRange = $(this).val();
  $("#range_1").val(myRange);
  $("#range_2").val(myRange);
  $("#rangeValue").text(myRange);
}

function changeSearch() {
  var mySearch = $(this).val();
  $("#search_1").val(mySearch);
  $("#search_2").val(mySearch);
  $("#searchValue").text(mySearch);
}

function changeTel() {
  var myTel = $(this).val();
  $("#tel_1").val(myTel);
  $("#tel_2").val(myTel);
  $("#telValue").text(myTel);
}

function changeText() {
  var myText = $(this).val();
  $("#text_1").val(myText);
  $("#text_2").val(myText);
  $("#textValue").text(myText);
}

function changeTime() {
  var myTime = $(this).val();
  $("#time_1").val(myTime);
  $("#time_2").val(myTime);
  $("#timeValue").text(myTime);
}

function changeUrl() {
  event.preventDefault();
  var myUrl = $(this).find("[type='url']").val();
  $("#url_1").val(myUrl);
  $("#url_2").val(myUrl);
  $("#urlValue").text(myUrl);
}

function changeWeek() {
  var myWeek = $(this).val();
  $("#week_1").val(myWeek);
  $("#week_2").val(myWeek);
  $("#weekValue").text(myWeek);
}

function changeTextArea() {
  var myTextArea = $(this).val();
  $("#textArea_1").val(myTextArea);
  $("#textArea_2").val(myTextArea);
  $("#textAreaValue").text(myTextArea);
}

function changeBrowser() {
  event.preventDefault();
  var myBrowser;
  if (this.id === "dataListForm_1") {
    myBrowser = $("#dataListInput_1").val();
    $("#dataListInput_2").val(myBrowser);
  } else {
    myBrowser = $("#dataListInput_2").val();
    $("#dataListInput_1").val(myBrowser);
  }
  $("#dataListValue").text(myBrowser);
}

function changeSelect() {
  var mySelect = $(this).val();
  $("#select_1").val(mySelect);
  $("#select_2").val(mySelect);
  $("#selectValue").text(mySelect);
}

function changeMultiSelect() {
  var myMulitSelect = $(this).val();
  $("#multiSelect_1").val(myMulitSelect);
  $("#multiSelect_2").val(myMulitSelect);
  $("#multiSelectValue").text(myMulitSelect);
}
