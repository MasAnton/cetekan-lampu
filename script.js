saklar = (action, lamp) => {
  let toggle = document.getElementById("default-toggle");
  let toggle2 = document.getElementById("default-toggle2");
  let toggle3 = document.getElementById("default-toggle3");
  let lampu1 = document.getElementById("lampu1");
  let lampu2 = document.getElementById("lampu2");
  let lampu3 = document.getElementById("lampu3");

  if (toggle.checked) {
    console.log("dinyaalakan");
  } else {
    console.log("matikan");
  }
  if (toggle.checked) {
    lampu1.src = "asset/img/on.gif";
  } else {
    lampu1.src = "asset/img/off.gif";
  }
  // lampu 1 end
  if (toggle2.checked) {
    lampu2.src = "asset/img/on.gif";
  } else {
    lampu2.src = "asset/img/off.gif";
  }
  // lampu 2 end
  if (toggle3.checked) {
    lampu3.src = "asset/img/on.gif";
  } else {
    lampu3.src = "asset/img/off.gif";
  }
  // lampu 3 end
};
