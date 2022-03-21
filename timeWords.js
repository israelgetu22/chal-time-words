function timeWord(time) {
  let timeArray = time.split(":");
  console.log(timeArray);
  let hours = [
    "Midnight",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Midnight",
  ];

  let minutes = [
    "",
    "Oh One",
    "Oh Two",
    "Oh Three",
    "Oh Four",
    "Oh Five",
    "Oh Six",
    "Oh Seven",
    "Oh Eight",
    "Oh Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Ninteen",
    "Twenty",
    "Twenty One",
    "Twenty Two",
    "Twenty Three",
    "Twenty Four",
    "Twenty Five",
    "Twenty Six",
    "Twenty Seven",
    "Twenty Eight",
    "Twenty Nine",
    "Thirty",
    "Thirty One",
    "Thirty Two",
    "Thirty Three",
    "Thirty Four",
    "Thirty Five",
    "Thirty Six",
    "Thirty Seven",
    "Thirty Eight",
    "Thirty Nine",
    "Forty",
    "Forty One",
    "Forty Two",
    "Forty Three",
    "Forty Four",
    "Forty Five",
    "Forty Six",
    "Forty Seven",
    "Forty Eight",
    "Forty Nine",
    "Fifty",
    "Fifty One",
    "Fifty Two",
    "Fifty Three",
    "Fifty Four",
    "Fifty Five",
    "Fifty Six",
    "Fifty Seven",
    "Fifty Eight",
    "Fifty Nine",
  ];

  let hour = Number(timeArray[0]);
  let minute = Number(timeArray[1]);

  let timeText = "";

  if (hour === 12 && minute === 0) {
    timeText = "Noon";
  } else if (hour === 0 && minute === 0) {
    timeText = "Midnight";
  } else if (hour > 00 && hour < 12) {
    timeText = hours[hour] + " " + minutes[minute] + " " + "AM";
  } else if (hour >= 12 && hour < 25) {
    timeText = hours[hour] + " " + minutes[minute] + " " + "PM";
  }
  console.log(timeText);
}

// function timeWord(h, m) {
//   let hours = ["Midnight", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Midnight"];

//   let minutes = ["", "Oh One", "Oh Two", "Oh Three", "Oh Four", "Oh Five", "Oh Six", "Oh Seven", "Oh Eight", "Oh Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Ninteen", "Twenty", "Twenty One", "Twenty Two", "Twenty Three", "Twenty Four", "Twenty Five", "Twenty Six", "Twenty Seven", "Twenty Eight", "Twenty Nine", "Thirty", "Thirty One", "Thirty Two", "Thirty Three", "Thirty Four", "Thirty Five", "Thirty Six", "Thirty Seven", "Thirty Eight", "Thirty Nine", "Forty", "Forty One", "Forty Two", "Forty Three", "Forty Four", "Forty Five", "Forty Six", "Forty Seven", "Forty Eight", "Forty Nine", "Fifty", "Fifty One", "Fifty Two", "Fifty Three", "Fifty Four", "Fifty Five", "Fifty Six", "Fifty Seven", "Fifty Eight", "Fifty Nine"];
//   if (h === 00 && m === 00) {
//     return "midnight";
//   } else if (h === 12 && m === 00) {
//     return "noon";
//   } else if (h === 00 && m === 12) {
//     return "twelve twelve am";
//   } else if (hour > 00 && hour < 12){
//     return count[h] + " o'clock";
//   } else if (h >= 0 && h <= 11 && m<0) {
//     return count[h] +
//   }else{"no time"}
// }

// console.log(timeWord(13, 0));
