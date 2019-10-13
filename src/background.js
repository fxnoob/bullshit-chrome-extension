import "@babel/polyfill";

class Main {
  constructor() {
    this.onIconClick();
  }

  inject = () => {

  }

  eject = () => {

  }

  onIconClick() {
    chrome.browserAction.onClicked.addListener(tab => {
      chrome.tabs.executeScript(tab.id, {file: "bullshit.bundle.js"});
    });
  }
}

const main = new Main();
