function parseAttrs() {
	var calcAttr = window.location.search;
	if(calcAttr !== ""){
		calcAttr = calcAttr.replace("?", "").split("&");
		if(calcAttr.length !== 3) return;
		var cls = parseInt(calcAttr[0].split("=")[1]);
		if (cls < 1 || cls > 6) return;
		var lvl = parseInt(calcAttr[1].split("=")[1]);
		if (lvl !== 8 && lvl !== 11 && lvl !== 14 && lvl !== 17 && lvl !== 20 && lvl !== 23) return;
		var skillSet = calcAttr[2].split("=")[1].toString();
		if (skillSet.length !== 15) return;
		for (var i = 0; i < skillSet.length; i++) {
		 	if (skillSet[i].match("\\d") === null) return;
		}
		var primeTmp = parseInt(skillSet[0]);

		var leftPrimeTmp = parseInt(skillSet[1]);

		var left1Tmp = parseInt(skillSet[2]);
		var left2Tmp = parseInt(skillSet[3]);
		var left3Tmp = parseInt(skillSet[4]);
		var left4Tmp = parseInt(skillSet[5]);
		var left5Tmp = parseInt(skillSet[6]);
		var left6Tmp = parseInt(skillSet[7]);

		var rightPrimeTmp = parseInt(skillSet[8]);

		var right1Tmp = parseInt(skillSet[9]);
		var right2Tmp = parseInt(skillSet[10]);
		var right3Tmp = parseInt(skillSet[11]);
		var right4Tmp = parseInt(skillSet[12]);
		var right5Tmp = parseInt(skillSet[13]);
		var right6Tmp = parseInt(skillSet[14]);

		if (primeTmp < 0 || primeTmp > 5) return;
		if (leftPrimeTmp < 0 || leftPrimeTmp > 5 || leftPrimeTmp > primeTmp) return;
		if (left1Tmp < 0 || left1Tmp > 5 || left1Tmp > leftPrimeTmp) return;
		if (left2Tmp < 0 || left2Tmp > 5 || left2Tmp > leftPrimeTmp) return;
		if (left3Tmp < 0 || left3Tmp > 5 || left3Tmp > leftPrimeTmp) return;
		if (left4Tmp < 0 || left4Tmp > 5 || left4Tmp > left1Tmp) return;
		if (left5Tmp < 0 || left5Tmp > 5 || left5Tmp > left2Tmp) return;
		if (left6Tmp < 0 || left6Tmp > 5 || left6Tmp > left3Tmp) return;
		if (rightPrimeTmp < 0 || rightPrimeTmp > 5 || rightPrimeTmp > primeTmp) return;
		if (right1Tmp < 0 || right1Tmp > 5 || right1Tmp > rightPrimeTmp) return;
		if (right2Tmp < 0 || right2Tmp > 5 || right2Tmp > rightPrimeTmp) return;
		if (right3Tmp < 0 || right3Tmp > 5 || right3Tmp > rightPrimeTmp) return;
		if (right4Tmp < 0 || right4Tmp > 5 || right4Tmp > right1Tmp) return;
		if (right5Tmp < 0 || right5Tmp > 5 || right5Tmp > right2Tmp) return;
		if (right6Tmp < 0 || right6Tmp > 5 || right6Tmp > right3Tmp) return;
		var leftSet = false;
		var rightSet = false;
		if (leftPrimeTmp > 0 || left1Tmp > 0 || left2Tmp > 0 || left3Tmp > 0 || left4Tmp > 0 || left5Tmp > 0 || left6Tmp > 0) leftSet = true;
		if (rightPrimeTmp > 0 || right1Tmp > 0 || right2Tmp > 0 || right3Tmp > 0 || right4Tmp > 0 || right5Tmp > 0 || right6Tmp > 0) rightSet = true;
		if (leftSet && rightSet) return;

		
		var freePoints = 0;
		switch(lvl){
			case 8: lvl = 1; freePoints = 6; break;
			case 11: lvl = 2; freePoints = 16; break;
			case 14: lvl = 3; freePoints = 30; break;
			case 17: lvl = 4; freePoints = 48; break;
			case 20: lvl = 5; freePoints = 70; break;
			case 23: lvl = 6; freePoints = 96; break;
		}

		for (var i = 0; i < skillSet.length; i++) {
			switch(parseInt(skillSet[i])){
				case 1: freePoints -= 1; break;
				case 2: freePoints -= 3; break;
				case 3: freePoints -= 6; break;
				case 4: freePoints -= 10; break;
				case 5: freePoints -= 15; break;
			}
		}
		if (freePoints < 0) return;
		build = true;
		points.innerText = freePoints;
		baseLvl.innerHTML = primeTmp > 0 ? primeTmp : "";
	    
	    rightBaseLvl.innerHTML = rightPrimeTmp > 0 ? rightPrimeTmp : "";
	    right1Lvl.innerHTML = right1Tmp > 0 ? right1Tmp : "";
	    right2Lvl.innerHTML = right2Tmp > 0 ? right2Tmp : "";
	    right3Lvl.innerHTML = right3Tmp > 0 ? right3Tmp : "";
	    right4Lvl.innerHTML = right4Tmp > 0 ? right4Tmp : "";
	    right5Lvl.innerHTML = right5Tmp > 0 ? right5Tmp : "";
	    right6Lvl.innerHTML = right6Tmp > 0 ? right6Tmp : "";
	    
	    leftBaseLvl.innerHTML = leftPrimeTmp > 0 ? leftPrimeTmp : "";
	    left1Lvl.innerHTML = left1Tmp > 0 ? left1Tmp : "";
	    left2Lvl.innerHTML = left2Tmp > 0 ? left2Tmp : "";
	    left3Lvl.innerHTML = left3Tmp > 0 ? left3Tmp : "";
	    left4Lvl.innerHTML = left4Tmp > 0 ? left4Tmp : "";
	    left5Lvl.innerHTML = left5Tmp > 0 ? left5Tmp : "";
	    left6Lvl.innerHTML = left6Tmp > 0 ? left6Tmp : "";

		switch_lvl_selector();
		lvlSelector.options[0].removeAttribute("selected");
		lvlSelector.options[lvl].setAttribute("selected", "");
		classSelector.options[0].removeAttribute("selected");
		classSelector.options[cls].setAttribute("selected", "");
		classSelector.onchange();
	}
}
parseAttrs();

var buildBtn = document.getElementById("get_build");
buildBtn.onclick = function() {
    var site = location.origin + "/?";
    var cls = classSelector.options[classSelector.selectedIndex].index;
    var lvl = lvlSelector.options[lvlSelector.selectedIndex].value;
    if(cls === "0" || lvl === "Выберите уровень") return;
    var skillSet =
    (baseLvl.innerHTML !== "" ? baseLvl.innerHTML : "0") + (leftBaseLvl.innerHTML !== "" ? leftBaseLvl.innerHTML : "0") + (left1Lvl.innerHTML !== "" ? left1Lvl.innerHTML : "0") +
    (left2Lvl.innerHTML !== "" ? left2Lvl.innerHTML : "0") + (left3Lvl.innerHTML !== "" ? left3Lvl.innerHTML : "0") + (left4Lvl.innerHTML !== "" ? left4Lvl.innerHTML : "0") +
    (left5Lvl.innerHTML !== "" ? left5Lvl.innerHTML : "0") + (left6Lvl.innerHTML !== "" ? left6Lvl.innerHTML : "0") + (rightBaseLvl.innerHTML !== "" ? rightBaseLvl.innerHTML : "0") +
    (right1Lvl.innerHTML !== "" ? right1Lvl.innerHTML : "0") + (right2Lvl.innerHTML !== "" ? right2Lvl.innerHTML : "0") + (right3Lvl.innerHTML !== "" ? right3Lvl.innerHTML : "0") +
    (right4Lvl.innerHTML !== "" ? right4Lvl.innerHTML : "0") + (right5Lvl.innerHTML !== "" ? right5Lvl.innerHTML : "0") + (right6Lvl.innerHTML !== "" ? right6Lvl.innerHTML : "0");
    var link = site + "cls=" + cls + "&lvl=" + lvl + "&skillset=" + skillSet;
    var linkHolder = document.getElementById("link");
    linkHolder.innerHTML = link;
    linkHolder.classList.remove("hidden");
}