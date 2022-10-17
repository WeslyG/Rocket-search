import { goAction } from "./engine.js";

 chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "rocketSearchContext",
    title: "Rocket it!",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(
  (info) => {
		goAction(info.selectionText)
  }
);