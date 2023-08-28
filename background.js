chrome.alarms.create({ delayInMinutes: 30, periodInMinutes: 30 });

chrome.alarms.onAlarm.addListener(alarm => {
  chrome.action.setBadgeText({ text: "!" });
});
