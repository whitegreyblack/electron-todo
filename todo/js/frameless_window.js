// function updateCheckbox() {
//   var top_checkbox = document.getElementById("top-box");
//   var bottom_checkbox = document.getElementById("bottom-box");
//   var left_checkbox = document.getElementById("left-box");
//   var right_checkbox = document.getElementById("right-box");
//   if (top_checkbox.checked || bottom_checkbox.checked) {
//     left_checkbox.disabled = true;
//     right_checkbox.disabled = true;
//   } else if (left_checkbox.checked || right_checkbox.checked) {
//     top_checkbox.disabled = true;
//     bottom_checkbox.disabled = true;
//   } else {
//     left_checkbox.disabled = false;
//     right_checkbox.disabled = false;
//     top_checkbox.disabled = false;
//     bottom_checkbox.disabled = false;
//   }
// }

// function initCheckbox(checkboxId, titlebar_name, titlebar_icon_url, titlebar_text) {
//   var elem = document.getElementById(checkboxId);
//   if (!elem)
//     return;
//   elem.onclick = function() {
//     if (document.getElementById(checkboxId).checked)
//       addTitlebar(titlebar_name, titlebar_icon_url, titlebar_text);
//     else
//       removeTitlebar(titlebar_name);
//     focusTitlebars(true);

//     updateContentStyle();
//     updateCheckbox();
//   }
// }

function initTitleBar(checkboxId, titlebar_name, titlebar_icon_url, titlebar_text) {
  var elem = document.getElementById(checkboxId);
  if (!elem)
    return
  // addTitlebar(titlebar_name, titlebar_icon_url, titlebar_text);
  focusTitlebars(true);
  updateContentStyle();
  // updateCheckbox();
}

window.onfocus = function() {
  console.log("focus");
  // focusTitlebars(true);
}

window.onblur = function() {
  console.log("blur");
  // focusTitlebars(false);
}

window.onresize = function(event) {
  console.log("resize");
  event.preventDefault();
  window.resizeTo(375, 675);
  // updateContentStyle();
}

window.onload = function() {
  const {remote} = require('electron');
  const {BrowserWindow} = remote;
  const win = BrowserWindow.getFocusedWindow();

  // document.getElementById("toggle-window-button").onclick = function() {
  //   win.setFullScreen(!(win.isFullScreen()));
  // }
  // document.getElementById("maxmin-window-button").onclick = function() {
  //   win.isMaximized() ? win.unmaximize() : win.maximize();
  // }
  // document.getElementById("max").onclick = function() {
  //   win.isMaximized() ? win.unmaximize() : win.maximize();
  // }

  document.getElementById("btn-minify").onclick = function() {
    win.minimize();
  }
  document.getElementById("btn-maxify").onclick = function() {
    console.log("maximized?: " + win.isMaximized() ? "true" : "false");
  }
  document.getElementById("btn-close").onclick = function() {
    win.close();
  }

  // exit app keypress
  // document.onkeydown = function(event) {
  //   var exitKey = false;
  //   event = event || window.event;
    
  //   if ("key" in event) {
  //     exitKey = (event.key == "Escape" || event.key == "Esc");
  //   } else {
  //     exitKey = (event.key == 27);
  //   }

  //   if (exitKey) {
  //     document.getElementById("btn-close").click();
  //   }
  // }

  document.getElementById("title-bar").addEventListener("dblclick", function(event) {
    console.log("double click");
    event.preventDefault();
  }, false);

  updateContentStyle();
  
}
