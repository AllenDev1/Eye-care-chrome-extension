console.log("popup.js");
chrome.alarms.create({ delayInMinutes: 1, periodInMinutes: 1 });

chrome.alarms.onAlarm.addListener((alarm) => {
	chrome.action.setBadgeText({ text: "!" });
});
