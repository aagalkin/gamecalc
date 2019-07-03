var hero;
var masterytree = document.getElementById("masterytree");
var bg = document.getElementById("bg");
var spinner = document.getElementById("loading-spinner");
var classSelector = document.getElementById("class_selector");
var build = false;
classSelector.onchange = function () {
    masterytree.classList.add("blur");
    bg.classList.remove("hidden");
    spinner.classList.remove("hidden");
    classSelector.setAttribute("disabled", "");
    var req = new XMLHttpRequest();
    req.open("GET", "/hero/" + this.value, true);
    req.onreadystatechange = function () {
        if (this.readyState === 4){
            hero = JSON.parse(this.responseText);
            if(!build){
                cleanLvls();
                cleanCalc();

                if (lvlSelector.classList.contains("hidden")) switch_lvl_selector();
                switch (lvlSelector.value) {
                    case "8": points.innerText = "6"; break;
                    case "11": points.innerText = "16"; break;
                    case "14": points.innerText = "30"; break;
                    case "17": points.innerText = "48"; break;
                    case "20": points.innerText = "70"; break;
                    case "23": points.innerText = "96"; break;
                }
            }
            setCalc();
            build = false;
        }
        masterytree.classList.remove("blur");
        bg.classList.add("hidden");
        spinner.classList.add("hidden");
        classSelector.removeAttribute("disabled");
    };
    req.send();
};

var cleanButton = document.getElementById("clean_lvl");
cleanButton.setAttribute("onclick", "userClean();")

var base = document.getElementById("base");
base.setAttribute("onmouseover", "showSkillDetails(this);");
base.setAttribute("onmouseout", "hideSkillDetails();");
var baseLvl = document.getElementById("base_lvl");

var rightBase = document.getElementById("right_base");
rightBase.setAttribute("onmouseover", "showSkillDetails(this);");
rightBase.setAttribute("onmouseout", "hideSkillDetails();");
var rightBaseLvl = document.getElementById("right_base_lvl");

var right1 = document.getElementById("right1");
right1.setAttribute("onmouseover", "showSkillDetails(this);");
right1.setAttribute("onmouseout", "hideSkillDetails();");
var right1Lvl = document.getElementById("right1_lvl");
var right2 = document.getElementById("right2");
right2.setAttribute("onmouseover", "showSkillDetails(this);");
right2.setAttribute("onmouseout", "hideSkillDetails();");
var right2Lvl = document.getElementById("right2_lvl");
var right3 = document.getElementById("right3");
right3.setAttribute("onmouseover", "showSkillDetails(this);");
right3.setAttribute("onmouseout", "hideSkillDetails();");
var right3Lvl = document.getElementById("right3_lvl");
var right4 = document.getElementById("right4");
right4.setAttribute("onmouseover", "showSkillDetails(this);");
right4.setAttribute("onmouseout", "hideSkillDetails();");
var right4Lvl = document.getElementById("right4_lvl");
var right5 = document.getElementById("right5");
right5.setAttribute("onmouseover", "showSkillDetails(this);");
right5.setAttribute("onmouseout", "hideSkillDetails();");
var right5Lvl = document.getElementById("right5_lvl");
var right6 = document.getElementById("right6");
right6.setAttribute("onmouseover", "showSkillDetails(this);");
right6.setAttribute("onmouseout", "hideSkillDetails();");
var right6Lvl = document.getElementById("right6_lvl");

var leftBase = document.getElementById("left_base");
leftBase.setAttribute("onmouseover", "showSkillDetails(this);");
leftBase.setAttribute("onmouseout", "hideSkillDetails();");
var leftBaseLvl = document.getElementById("left_base_lvl");

var left1 = document.getElementById("left1");
left1.setAttribute("onmouseover", "showSkillDetails(this);");
left1.setAttribute("onmouseout", "hideSkillDetails();");
var left1Lvl = document.getElementById("left1_lvl");
var left2 = document.getElementById("left2");
left2.setAttribute("onmouseover", "showSkillDetails(this);");
left2.setAttribute("onmouseout", "hideSkillDetails();");
var left2Lvl = document.getElementById("left2_lvl");
var left3 = document.getElementById("left3");
left3.setAttribute("onmouseover", "showSkillDetails(this);");
left3.setAttribute("onmouseout", "hideSkillDetails();");
var left3Lvl = document.getElementById("left3_lvl");
var left4 = document.getElementById("left4");
left4.setAttribute("onmouseover", "showSkillDetails(this);");
left4.setAttribute("onmouseout", "hideSkillDetails();");
var left4Lvl = document.getElementById("left4_lvl");
var left5 = document.getElementById("left5");
left5.setAttribute("onmouseover", "showSkillDetails(this);");
left5.setAttribute("onmouseout", "hideSkillDetails();");
var left5Lvl = document.getElementById("left5_lvl");
var left6 = document.getElementById("left6");
left6.setAttribute("onmouseover", "showSkillDetails(this);");
left6.setAttribute("onmouseout", "hideSkillDetails();");
var left6Lvl = document.getElementById("left6_lvl");

var lvlSelector = document.getElementById("lvl_selector");
var maketLvlSelector = document.getElementById("maket_lvl_selector");

var points = document.getElementById("points");


var skillDetails = document.getElementById("skill_details");
var skillType = document.getElementById("skill_type");
var skillDesc = document.getElementById("skill_desc");
var skillCost = document.getElementById("skill_cost");
var skillReload = document.getElementById("skill_reload");
var skillDuration = document.getElementById("skill_duration");

function setCalc() {
    var baseImg = document.createElement("img");
    baseImg.setAttribute("src", hero.baseSkill.imgLink);
    baseImg.setAttribute("alt", hero.baseSkill.name);
    baseImg.setAttribute("title", hero.baseSkill.name);
    base.appendChild(baseImg);


    var rightBaseImg = document.createElement("img");
    rightBaseImg.setAttribute("src", hero.rightBase.imgLink);
    rightBaseImg.setAttribute("alt", hero.rightBase.name);
    rightBaseImg.setAttribute("title", hero.rightBase.name);
    rightBase.appendChild(rightBaseImg);

    var right1Img = document.createElement("img");
    right1Img.setAttribute("src", hero.right1.imgLink);
    right1Img.setAttribute("alt", hero.right1.name);
    right1Img.setAttribute("title", hero.right1.name);
    right1.appendChild(right1Img);

    var right2Img = document.createElement("img");
    right2Img.setAttribute("src", hero.right2.imgLink);
    right2Img.setAttribute("alt", hero.right2.name);
    right2Img.setAttribute("title", hero.right2.name);
    right2.appendChild(right2Img);

    var right3Img = document.createElement("img");
    right3Img.setAttribute("src", hero.right3.imgLink);
    right3Img.setAttribute("alt", hero.right3.name);
    right3Img.setAttribute("title", hero.right3.name);
    right3.appendChild(right3Img);

    var right4Img = document.createElement("img");
    right4Img.setAttribute("src", hero.right4.imgLink);
    right4Img.setAttribute("alt", hero.right4.name);
    right4Img.setAttribute("title", hero.right4.name);
    right4.appendChild(right4Img);

    var right5Img = document.createElement("img");
    right5Img.setAttribute("src", hero.right5.imgLink);
    right5Img.setAttribute("alt", hero.right5.name);
    right5Img.setAttribute("title", hero.right5.name);
    right5.appendChild(right5Img);

    var right6Img = document.createElement("img");
    right6Img.setAttribute("src", hero.right6.imgLink);
    right6Img.setAttribute("alt", hero.right6.name);
    right6Img.setAttribute("title", hero.right6.name);
    right6.appendChild(right6Img);


    var leftBaseImg = document.createElement("img");
    leftBaseImg.setAttribute("src", hero.leftBase.imgLink);
    leftBaseImg.setAttribute("alt", hero.leftBase.name);
    leftBaseImg.setAttribute("title", hero.leftBase.name);
    leftBase.appendChild(leftBaseImg);

    var left1Img = document.createElement("img");
    left1Img.setAttribute("src", hero.left1.imgLink);
    left1Img.setAttribute("alt", hero.left1.name);
    left1Img.setAttribute("title", hero.left1.name);
    left1.appendChild(left1Img);

    var left2Img = document.createElement("img");
    left2Img.setAttribute("src", hero.left2.imgLink);
    left2Img.setAttribute("alt", hero.left2.name);
    left2Img.setAttribute("title", hero.left2.name);
    left2.appendChild(left2Img);

    var left3Img = document.createElement("img");
    left3Img.setAttribute("src", hero.left3.imgLink);
    left3Img.setAttribute("alt", hero.left3.name);
    left3Img.setAttribute("title", hero.left3.name);
    left3.appendChild(left3Img);

    var left4Img = document.createElement("img");
    left4Img.setAttribute("src", hero.left4.imgLink);
    left4Img.setAttribute("alt", hero.left4.name);
    left4Img.setAttribute("title", hero.left4.name);
    left4.appendChild(left4Img);

    var left5Img = document.createElement("img");
    left5Img.setAttribute("src", hero.left5.imgLink);
    left5Img.setAttribute("alt", hero.left5.name);
    left5Img.setAttribute("title", hero.left5.name);
    left5.appendChild(left5Img);

    var left6Img = document.createElement("img");
    left6Img.setAttribute("src", hero.left6.imgLink);
    left6Img.setAttribute("alt", hero.left6.name);
    left6Img.setAttribute("title", hero.left6.name);
    left6.appendChild(left6Img);
}

function cleanCalc() {
    if (base.firstChild) base.removeChild(base.firstChild);

    if (rightBase.firstChild) rightBase.removeChild(rightBase.firstChild);
    if (right1.firstChild) right1.removeChild(right1.firstChild);
    if (right2.firstChild) right2.removeChild(right2.firstChild);
    if (right3.firstChild) right3.removeChild(right3.firstChild);
    if (right4.firstChild) right4.removeChild(right4.firstChild);
    if (right5.firstChild) right5.removeChild(right5.firstChild);
    if (right6.firstChild) right6.removeChild(right6.firstChild);

    if (leftBase.firstChild) leftBase.removeChild(leftBase.firstChild);
    if (left1.firstChild) left1.removeChild(left1.firstChild);
    if (left2.firstChild) left2.removeChild(left2.firstChild);
    if (left3.firstChild) left3.removeChild(left3.firstChild);
    if (left4.firstChild) left4.removeChild(left4.firstChild);
    if (left5.firstChild) left5.removeChild(left5.firstChild);
    if (left6.firstChild) left6.removeChild(left6.firstChild);
}

function userClean(){
    cleanLvls();
    switch (lvlSelector.value) {
        case "8": points.innerText = "6"; break;
        case "11": points.innerText = "16"; break;
        case "14": points.innerText = "30"; break;
        case "17": points.innerText = "48"; break;
        case "20": points.innerText = "70"; break;
        case "23": points.innerText = "96"; break;
    }
}

lvlSelector.onchange = function () {
    cleanLvls();
    switch (lvlSelector.value) {
        case "8": points.innerText = "6"; break;
        case "11": points.innerText = "16"; break;
        case "14": points.innerText = "30"; break;
        case "17": points.innerText = "48"; break;
        case "20": points.innerText = "70"; break;
        case "23": points.innerText = "96"; break;
    }
};

function cleanLvls() {
    baseLvl.innerHTML = "";
    
    rightBaseLvl.innerHTML = "";
    right1Lvl.innerHTML = "";
    right2Lvl.innerHTML = "";
    right3Lvl.innerHTML = "";
    right4Lvl.innerHTML = "";
    right5Lvl.innerHTML = "";
    right6Lvl.innerHTML = "";
    
    leftBaseLvl.innerHTML = "";
    left1Lvl.innerHTML = "";
    left2Lvl.innerHTML = "";
    left3Lvl.innerHTML = "";
    left4Lvl.innerHTML = "";
    left5Lvl.innerHTML = "";
    left6Lvl.innerHTML = "";
}

function switch_lvl_selector() {
    lvlSelector.classList.toggle("hidden");
    maketLvlSelector.classList.toggle("hidden");
}

function showSkillDetails(slot) {
    if (hero == null) return;
    var type;
    var cost;
    var reload;
    var duration;
    switch (slot.id) {
        case "base" : if (baseLvl.innerHTML !== "") {
            type = hero.baseSkill.type;
            if (type === "Пассивное умение") skillType.classList.add("greyText");
            else skillType.classList.add("greenText");

            skillType.innerHTML = type;
            skillDesc.innerHTML = hero.baseSkill.desc[+baseLvl.innerHTML - 1];
            cost = hero.baseSkill.cost[+baseLvl.innerHTML - 1];
            if (cost !== null) skillCost.innerHTML = "Стоимость: " + cost;
            reload = hero.baseSkill.reload[+baseLvl.innerHTML - 1];
            if (reload !== null) skillReload.innerHTML = "Перезарядка: " + reload;
            duration = hero.baseSkill.duration[+baseLvl.innerHTML - 1];
            if (duration !== null) skillDuration.innerHTML = "Длительность: " + duration;
        } break;
        case "right_base" : if (rightBaseLvl.innerHTML !== "") {
            type = hero.rightBase.type;
            if (type === "Пассивное умение") skillType.classList.add("greyText");
            else skillType.classList.add("greenText");

            skillType.innerHTML = type;
            skillDesc.innerHTML = hero.rightBase.desc[+rightBaseLvl.innerHTML - 1];
            cost = hero.rightBase.cost[+rightBaseLvl.innerHTML - 1];
            if (cost !== null) skillCost.innerHTML = "Стоимость: " + cost;
            reload = hero.rightBase.reload[+rightBaseLvl.innerHTML - 1];
            if (reload !== null) skillReload.innerHTML = "Перезарядка: " + reload;
            duration = hero.rightBase.duration[+rightBaseLvl.innerHTML - 1];
            if (duration !== null) skillDuration.innerHTML = "Длительность: " + duration;
        } break;
        case "left_base" : if (leftBaseLvl.innerHTML !== "") {
            type = hero.leftBase.type;
            if (type === "Пассивное умение") skillType.classList.add("greyText");
            else skillType.classList.add("greenText");

            skillType.innerHTML = type;
            skillDesc.innerHTML = hero.leftBase.desc[+leftBaseLvl.innerHTML - 1];
            cost = hero.leftBase.cost[+leftBaseLvl.innerHTML - 1];
            if (cost !== null) skillCost.innerHTML = "Стоимость: " + cost;
            reload = hero.leftBase.reload[+leftBaseLvl.innerHTML - 1];
            if (reload !== null) skillReload.innerHTML = "Перезарядка: " + reload;
            duration = hero.leftBase.duration[+leftBaseLvl.innerHTML - 1];
            if (duration !== null) skillDuration.innerHTML = "Длительность: " + duration;
        } break;
        case "left1" : if (left1Lvl.innerHTML !== "") {
            type = hero.left1.type;
            if (type === "Пассивное умение") skillType.classList.add("greyText");
            else skillType.classList.add("greenText");

            skillType.innerHTML = type;
            skillDesc.innerHTML = hero.left1.desc[+left1Lvl.innerHTML - 1];
            cost = hero.left1.cost[+left1Lvl.innerHTML - 1];
            if (cost !== null) skillCost.innerHTML = "Стоимость: " + cost;
            reload = hero.left1.reload[+left1Lvl.innerHTML - 1];
            if (reload !== null) skillReload.innerHTML = "Перезарядка: " + reload;
            duration = hero.left1.duration[+left1Lvl.innerHTML - 1];
            if (duration !== null) skillDuration.innerHTML = "Длительность: " + duration;
        } break;
        case "left2" : if (left2Lvl.innerHTML !== "") {
            type = hero.left2.type;
            if (type === "Пассивное умение") skillType.classList.add("greyText");
            else skillType.classList.add("greenText");

            skillType.innerHTML = type;
            skillDesc.innerHTML = hero.left2.desc[+left2Lvl.innerHTML - 1];
            cost = hero.left2.cost[+left2Lvl.innerHTML - 1];
            if (cost !== null) skillCost.innerHTML = "Стоимость: " + cost;
            reload = hero.left2.reload[+left2Lvl.innerHTML - 1];
            if (reload !== null) skillReload.innerHTML = "Перезарядка: " + reload;
            duration = hero.left2.duration[+left2Lvl.innerHTML - 1];
            if (duration !== null) skillDuration.innerHTML = "Длительность: " + duration;
        } break;
        case "left3" : if (left3Lvl.innerHTML !== "") {
            type = hero.left3.type;
            if (type === "Пассивное умение") skillType.classList.add("greyText");
            else skillType.classList.add("greenText");

            skillType.innerHTML = type;
            skillDesc.innerHTML = hero.left3.desc[+left3Lvl.innerHTML - 1];
            cost = hero.left3.cost[+left3Lvl.innerHTML - 1];
            if (cost !== null) skillCost.innerHTML = "Стоимость: " + cost;
            reload = hero.left3.reload[+left3Lvl.innerHTML - 1];
            if (reload !== null) skillReload.innerHTML = "Перезарядка: " + reload;
            duration = hero.left3.duration[+left3Lvl.innerHTML - 1];
            if (duration !== null) skillDuration.innerHTML = "Длительность: " + duration;
        } break;
        case "left4" : if (left4Lvl.innerHTML !== "") {
            type = hero.left4.type;
            if (type === "Пассивное умение") skillType.classList.add("greyText");
            else skillType.classList.add("greenText");

            skillType.innerHTML = type;
            skillDesc.innerHTML = hero.left4.desc[+left4Lvl.innerHTML - 1];
            cost = hero.left4.cost[+left4Lvl.innerHTML - 1];
            if (cost !== null) skillCost.innerHTML = "Стоимость: " + cost;
            reload = hero.left4.reload[+left4Lvl.innerHTML - 1];
            if (reload !== null) skillReload.innerHTML = "Перезарядка: " + reload;
            duration = hero.left4.duration[+left4Lvl.innerHTML - 1];
            if (duration !== null) skillDuration.innerHTML = "Длительность: " + duration;
        } break;
        case "left5" : if (left5Lvl.innerHTML !== "") {
            type = hero.left5.type;
            if (type === "Пассивное умение") skillType.classList.add("greyText");
            else skillType.classList.add("greenText");

            skillType.innerHTML = type;
            skillDesc.innerHTML = hero.left5.desc[+left5Lvl.innerHTML - 1];
            cost = hero.left5.cost[+left5Lvl.innerHTML - 1];
            if (cost !== null) skillCost.innerHTML = "Стоимость: " + cost;
            reload = hero.left5.reload[+left5Lvl.innerHTML - 1];
            if (reload !== null) skillReload.innerHTML = "Перезарядка: " + reload;
            duration = hero.left5.duration[+left5Lvl.innerHTML - 1];
            if (duration !== null) skillDuration.innerHTML = "Длительность: " + duration;
        } break;
        case "left6" : if (left6Lvl.innerHTML !== "") {
            type = hero.left6.type;
            if (type === "Пассивное умение") skillType.classList.add("greyText");
            else skillType.classList.add("greenText");

            skillType.innerHTML = type;
            skillDesc.innerHTML = hero.left6.desc[+left6Lvl.innerHTML - 1];
            cost = hero.left6.cost[+left6Lvl.innerHTML - 1];
            if (cost !== null) skillCost.innerHTML = "Стоимость: " + cost;
            reload = hero.left6.reload[+left6Lvl.innerHTML - 1];
            if (reload !== null) skillReload.innerHTML = "Перезарядка: " + reload;
            duration = hero.left6.duration[+left6Lvl.innerHTML - 1];
            if (duration !== null) skillDuration.innerHTML = "Длительность: " + duration;
        } break;
        case "right1" : if (right1Lvl.innerHTML !== "") {
            type = hero.right1.type;
            if (type === "Пассивное умение") skillType.classList.add("greyText");
            else skillType.classList.add("greenText");

            skillType.innerHTML = type;
            skillDesc.innerHTML = hero.right1.desc[+right1Lvl.innerHTML - 1];
            cost = hero.right1.cost[+right1Lvl.innerHTML - 1];
            if (cost !== null) skillCost.innerHTML = "Стоимость: " + cost;
            reload = hero.right1.reload[+right1Lvl.innerHTML - 1];
            if (reload !== null) skillReload.innerHTML = "Перезарядка: " + reload;
            duration = hero.right1.duration[+right1Lvl.innerHTML - 1];
            if (duration !== null) skillDuration.innerHTML = "Длительность: " + duration;
        } break;
        case "right2" : if (right2Lvl.innerHTML !== "") {
            type = hero.right2.type;
            if (type === "Пассивное умение") skillType.classList.add("greyText");
            else skillType.classList.add("greenText");

            skillType.innerHTML = type;
            skillDesc.innerHTML = hero.right2.desc[+right2Lvl.innerHTML - 1];
            cost = hero.right2.cost[+right2Lvl.innerHTML - 1];
            if (cost !== null) skillCost.innerHTML = "Стоимость: " + cost;
            reload = hero.right2.reload[+right2Lvl.innerHTML - 1];
            if (reload !== null) skillReload.innerHTML = "Перезарядка: " + reload;
            duration = hero.right2.duration[+right2Lvl.innerHTML - 1];
            if (duration !== null) skillDuration.innerHTML = "Длительность: " + duration;
        } break;
        case "right3" : if (right3Lvl.innerHTML !== "") {
            type = hero.right3.type;
            if (type === "Пассивное умение") skillType.classList.add("greyText");
            else skillType.classList.add("greenText");

            skillType.innerHTML = type;
            skillDesc.innerHTML = hero.right3.desc[+right3Lvl.innerHTML - 1];
            cost = hero.right3.cost[+right3Lvl.innerHTML - 1];
            if (cost !== null) skillCost.innerHTML = "Стоимость: " + cost;
            reload = hero.right3.reload[+right3Lvl.innerHTML - 1];
            if (reload !== null) skillReload.innerHTML = "Перезарядка: " + reload;
            duration = hero.right3.duration[+right3Lvl.innerHTML - 1];
            if (duration !== null) skillDuration.innerHTML = "Длительность: " + duration;
        } break;
        case "right4" : if (right4Lvl.innerHTML !== "") {
            type = hero.right4.type;
            if (type === "Пассивное умение") skillType.classList.add("greyText");
            else skillType.classList.add("greenText");

            skillType.innerHTML = type;
            skillDesc.innerHTML = hero.right4.desc[+right4Lvl.innerHTML - 1];
            cost = hero.right4.cost[+right4Lvl.innerHTML - 1];
            if (cost !== null) skillCost.innerHTML = "Стоимость: " + cost;
            reload = hero.right4.reload[+right4Lvl.innerHTML - 1];
            if (reload !== null) skillReload.innerHTML = "Перезарядка: " + reload;
            duration = hero.right4.duration[+right4Lvl.innerHTML - 1];
            if (duration !== null) skillDuration.innerHTML = "Длительность: " + duration;
        } break;
        case "right5" : if (right5Lvl.innerHTML !== "") {
            type = hero.right5.type;
            if (type === "Пассивное умение") skillType.classList.add("greyText");
            else skillType.classList.add("greenText");

            skillType.innerHTML = type;
            skillDesc.innerHTML = hero.right5.desc[+right5Lvl.innerHTML - 1];
            cost = hero.right5.cost[+right5Lvl.innerHTML - 1];
            if (cost !== null) skillCost.innerHTML = "Стоимость: " + cost;
            reload = hero.right5.reload[+right5Lvl.innerHTML - 1];
            if (reload !== null) skillReload.innerHTML = "Перезарядка: " + reload;
            duration = hero.right5.duration[+right5Lvl.innerHTML - 1];
            if (duration !== null) skillDuration.innerHTML = "Длительность: " + duration;
        } break;
        case "right6" : if (right6Lvl.innerHTML !== "") {
            type = hero.right6.type;
            if (type === "Пассивное умение") skillType.classList.add("greyText");
            else skillType.classList.add("greenText");

            skillType.innerHTML = type;
            skillDesc.innerHTML = hero.right6.desc[+right6Lvl.innerHTML - 1];
            cost = hero.right6.cost[+right6Lvl.innerHTML - 1];
            if (cost !== null) skillCost.innerHTML = "Стоимость: " + cost;
            reload = hero.right6.reload[+right6Lvl.innerHTML - 1];
            if (reload !== null) skillReload.innerHTML = "Перезарядка: " + reload;
            duration = hero.right6.duration[+right6Lvl.innerHTML - 1];
            if (duration !== null) skillDuration.innerHTML = "Длительность: " + duration;
        } break;
    }
}

function hideSkillDetails() {
    skillType.classList.remove("greyText");
    skillType.classList.remove("greenText");
    skillType.innerHTML = "";
    skillDesc.innerHTML = "";
    skillCost.innerHTML = "";
    skillReload.innerHTML = "";
    skillDuration.innerHTML = "";
}

base.onclick = function () {
    if (+baseLvl.innerHTML === 5) return;
    var price = +baseLvl.innerHTML + 1;
    if (+points.innerHTML >= price){
        baseLvl.innerHTML = price;
        points.innerText = +points.innerHTML - price;
        showSkillDetails(base);
    }
};

base.oncontextmenu = function () {
    if (+baseLvl < 1) return false;
    if (+rightBaseLvl.innerHTML === +baseLvl.innerHTML || +leftBaseLvl.innerHTML === +baseLvl.innerHTML) return false;
    points.innerHTML = +points.innerHTML + (+baseLvl.innerHTML);
    baseLvl.innerHTML = +baseLvl.innerHTML - 1;
    if (baseLvl.innerHTML === "0") {
        baseLvl.innerHTML = "";
        hideSkillDetails();
    } else {
        showSkillDetails(base);
    }
    return false;
};

rightBase.onclick = function () {
    if (+leftBaseLvl.innerHTML > 0) return;
    if (+rightBaseLvl.innerHTML === 5) return;
    var price = +rightBaseLvl.innerHTML + 1;
    if (+points.innerHTML >= price && +baseLvl.innerHTML >= price) {
        rightBaseLvl.innerHTML = price;
        points.innerText = +points.innerHTML - price;
        showSkillDetails(rightBase);
    }
};

rightBase.oncontextmenu = function () {
    if (+rightBaseLvl.innerHTML < 1) return false;
    if (+rightBaseLvl.innerHTML === +right1Lvl.innerHTML ||
        +rightBaseLvl.innerHTML === +right2Lvl.innerHTML ||
        +rightBaseLvl.innerHTML === +right3Lvl.innerHTML) return false;
    points.innerHTML = +points.innerHTML + (+rightBaseLvl.innerHTML);
    rightBaseLvl.innerHTML = +rightBaseLvl.innerHTML - 1;
    if (rightBaseLvl.innerHTML === "0") {
        rightBaseLvl.innerHTML = "";
        hideSkillDetails();
    } else {
        showSkillDetails(rightBase);
    }
    return false;
};

leftBase.onclick = function () {
    if (+rightBaseLvl.innerHTML > 0) return;
    if (+leftBaseLvl.innerHTML === 5) return;
    var price = +leftBaseLvl.innerHTML + 1;
    if (+points.innerHTML >= price && +baseLvl.innerHTML >= price) {
        leftBaseLvl.innerHTML = price;
        points.innerText = +points.innerHTML - price;
        showSkillDetails(leftBase);
    }
};

leftBase.oncontextmenu = function () {
    if (+leftBaseLvl.innerHTML < 1) return false;
    if (+leftBaseLvl.innerHTML === +left1Lvl.innerHTML ||
        +leftBaseLvl.innerHTML === +left2Lvl.innerHTML ||
        +leftBaseLvl.innerHTML === +left3Lvl.innerHTML) return false;
    points.innerHTML = +points.innerHTML + (+leftBaseLvl.innerHTML);
    leftBaseLvl.innerHTML = +leftBaseLvl.innerHTML - 1;
    if (leftBaseLvl.innerHTML === "0") {
        leftBaseLvl.innerHTML = "";
        hideSkillDetails();
    } else {
        showSkillDetails(leftBase);
    }
    return false;
};

right1.onclick = function () {
    if (+right1Lvl.innerHTML === 5) return;
    var price = +right1Lvl.innerHTML + 1;
    if (+points.innerHTML >= price && +rightBaseLvl.innerHTML >= price){
        right1Lvl.innerHTML = price;
        points.innerText = +points.innerHTML - price;
        showSkillDetails(right1);
    }
};

right1.oncontextmenu = function () {
    if (+right1Lvl.innerHTML < 1) return false;
    if (+right4Lvl.innerHTML === +right1Lvl.innerHTML) return false;
    points.innerHTML = +points.innerHTML + (+right1Lvl.innerHTML);
    right1Lvl.innerHTML = +right1Lvl.innerHTML - 1;
    if (right1Lvl.innerHTML === "0") {
        right1Lvl.innerHTML = "";
        hideSkillDetails();
    } else {
        showSkillDetails(right1);
    }
    return false;
};

right2.onclick = function () {
    if (+right2Lvl.innerHTML === 5) return;
    var price = +right2Lvl.innerHTML + 1;
    if (+points.innerHTML >= price && +rightBaseLvl.innerHTML >= price){
        right2Lvl.innerHTML = price;
        points.innerText = +points.innerHTML - price;
        showSkillDetails(right2);
    }
};

right2.oncontextmenu = function () {
    if (+right2Lvl.innerHTML < 1) return false;
    if (+right5Lvl.innerHTML === +right2Lvl.innerHTML) return false;
    points.innerHTML = +points.innerHTML + (+right2Lvl.innerHTML);
    right2Lvl.innerHTML = +right2Lvl.innerHTML - 1;
    if (right2Lvl.innerHTML === "0") {
        right2Lvl.innerHTML = "";
        hideSkillDetails();
    } else {
        showSkillDetails(right2);
    }
    return false;
};

right3.onclick = function () {
    if (+right3Lvl.innerHTML === 5) return;
    var price = +right3Lvl.innerHTML + 1;
    if (+points.innerHTML >= price && +rightBaseLvl.innerHTML >= price){
        right3Lvl.innerHTML = price;
        points.innerText = +points.innerHTML - price;
        showSkillDetails(right3);
    }
};

right3.oncontextmenu = function () {
    if (+right3Lvl.innerHTML < 1) return false;
    if (+right6Lvl.innerHTML === +right3Lvl.innerHTML) return false;
    points.innerHTML = +points.innerHTML + (+right3Lvl.innerHTML);
    right3Lvl.innerHTML = +right3Lvl.innerHTML - 1;
    if (right3Lvl.innerHTML === "0") {
        right3Lvl.innerHTML = "";
        hideSkillDetails();
    } else {
        showSkillDetails(right3);
    }
    return false;
};

left1.onclick = function () {
    if (+left1Lvl.innerHTML === 5) return;
    var price = +left1Lvl.innerHTML + 1;
    if (+points.innerHTML >= price && +leftBaseLvl.innerHTML >= price){
        left1Lvl.innerHTML = price;
        points.innerText = +points.innerHTML - price;
        showSkillDetails(left1);
    }
};

left1.oncontextmenu = function () {
    if (+left1Lvl.innerHTML < 1) return false;
    if (+left4Lvl.innerHTML === +left1Lvl.innerHTML) return false;
    points.innerHTML = +points.innerHTML + (+left1Lvl.innerHTML);
    left1Lvl.innerHTML = +left1Lvl.innerHTML - 1;
    if (left1Lvl.innerHTML === "0") {
        left1Lvl.innerHTML = "";
        hideSkillDetails();
    } else {
        showSkillDetails(left1);
    }
    return false;
};

left2.onclick = function () {
    if (+left2Lvl.innerHTML === 5) return;
    var price = +left2Lvl.innerHTML + 1;
    if (+points.innerHTML >= price && +leftBaseLvl.innerHTML >= price){
        left2Lvl.innerHTML = price;
        points.innerText = +points.innerHTML - price;
        showSkillDetails(left2);
    }
};

left2.oncontextmenu = function () {
    if (+left2Lvl.innerHTML < 1) return false;
    if (+left5Lvl.innerHTML === +left2Lvl.innerHTML) return false;
    points.innerHTML = +points.innerHTML + (+left2Lvl.innerHTML);
    left2Lvl.innerHTML = +left2Lvl.innerHTML - 1;
    if (left2Lvl.innerHTML === "0") {
        left2Lvl.innerHTML = "";
        hideSkillDetails();
    } else {
        showSkillDetails(left2);
    }
    return false;
};

left3.onclick = function () {
    if (+left3Lvl.innerHTML === 5) return;
    var price = +left3Lvl.innerHTML + 1;
    if (+points.innerHTML >= price && +leftBaseLvl.innerHTML >= price){
        left3Lvl.innerHTML = price;
        points.innerText = +points.innerHTML - price;
        showSkillDetails(left3);
    }
};

left3.oncontextmenu = function () {
    if (+left3Lvl.innerHTML < 1) return false;
    if (+left6Lvl.innerHTML === +left3Lvl.innerHTML) return false;
    points.innerHTML = +points.innerHTML + (+left3Lvl.innerHTML);
    left3Lvl.innerHTML = +left3Lvl.innerHTML - 1;
    if (left3Lvl.innerHTML === "0") {
        left3Lvl.innerHTML = "";
        hideSkillDetails();
    } else {
        showSkillDetails(left3);
    }
    return false;
};

right4.onclick = function () {
    if (+right4Lvl.innerHTML === 5) return;
    var price = +right4Lvl.innerHTML + 1;
    if (+points.innerHTML >= price && +right1Lvl.innerHTML >= price){
        right4Lvl.innerHTML = price;
        points.innerText = +points.innerHTML - price;
        showSkillDetails(right4);
    }
};

right4.oncontextmenu = function () {
    if (+right4Lvl.innerHTML < 1) return false;
    points.innerHTML = +points.innerHTML + (+right4Lvl.innerHTML);
    right4Lvl.innerHTML = +right4Lvl.innerHTML - 1;
    if (right4Lvl.innerHTML === "0") {
        right4Lvl.innerHTML = "";
        hideSkillDetails();
    } else {
        showSkillDetails(right4);
    }
    return false;
};

right5.onclick = function () {
    if (+right5Lvl.innerHTML === 5) return;
    var price = +right5Lvl.innerHTML + 1;
    if (+points.innerHTML >= price && +right2Lvl.innerHTML >= price){
        right5Lvl.innerHTML = price;
        points.innerText = +points.innerHTML - price;
        showSkillDetails(right5);
    }
};

right5.oncontextmenu = function () {
    if (+right5Lvl.innerHTML < 1) return false;
    points.innerHTML = +points.innerHTML + (+right5Lvl.innerHTML);
    right5Lvl.innerHTML = +right5Lvl.innerHTML - 1;
    if (right5Lvl.innerHTML === "0") {
        right5Lvl.innerHTML = "";
        hideSkillDetails();
    } else {
        showSkillDetails(right5);
    }
    return false;
};

right6.onclick = function () {
    if (+right6Lvl.innerHTML === 5) return;
    var price = +right6Lvl.innerHTML + 1;
    if (+points.innerHTML >= price && +right3Lvl.innerHTML >= price){
        right6Lvl.innerHTML = price;
        points.innerText = +points.innerHTML - price;
        showSkillDetails(right6);
    }
};

right6.oncontextmenu = function () {
    if (+right6Lvl.innerHTML < 1) return false;
    points.innerHTML = +points.innerHTML + (+right6Lvl.innerHTML);
    right6Lvl.innerHTML = +right6Lvl.innerHTML - 1;
    if (right6Lvl.innerHTML === "0") {
        right6Lvl.innerHTML = "";
        hideSkillDetails();
    } else {
        showSkillDetails(right6);
    }
    return false;
};

left4.onclick = function () {
    if (+left4Lvl.innerHTML === 5) return;
    var price = +left4Lvl.innerHTML + 1;
    if (+points.innerHTML >= price && +left1Lvl.innerHTML >= price){
        left4Lvl.innerHTML = price;
        points.innerText = +points.innerHTML - price;
        showSkillDetails(left4);
    }
};

left4.oncontextmenu = function () {
    if (+left4Lvl.innerHTML < 1) return false;
    points.innerHTML = +points.innerHTML + (+left4Lvl.innerHTML);
    left4Lvl.innerHTML = +left4Lvl.innerHTML - 1;
    if (left4Lvl.innerHTML === "0") {
        left4Lvl.innerHTML = "";
        hideSkillDetails();
    } else {
        showSkillDetails(left4);
    }
    return false;
};

left5.onclick = function () {
    if (+left5Lvl.innerHTML === 5) return;
    var price = +left5Lvl.innerHTML + 1;
    if (+points.innerHTML >= price && +left2Lvl.innerHTML >= price){
        left5Lvl.innerHTML = price;
        points.innerText = +points.innerHTML - price;
        showSkillDetails(left5);
    }
};

left5.oncontextmenu = function () {
    if (+left5Lvl.innerHTML < 1) return false;
    points.innerHTML = +points.innerHTML + (+left5Lvl.innerHTML);
    left5Lvl.innerHTML = +left5Lvl.innerHTML - 1;
    if (left5Lvl.innerHTML === "0") {
        left5Lvl.innerHTML = "";
        hideSkillDetails();
    } else {
        showSkillDetails(left5);
    }
    return false;
};

left6.onclick = function () {
    if (+left6Lvl.innerHTML === 5) return;
    var price = +left6Lvl.innerHTML + 1;
    if (+points.innerHTML >= price && +left3Lvl.innerHTML >= price){
        left6Lvl.innerHTML = price;
        points.innerText = +points.innerHTML - price;
        showSkillDetails(left6);
    }
};

left6.oncontextmenu = function () {
    if (+left6Lvl.innerHTML < 1) return false;
    points.innerHTML = +points.innerHTML + (+left6Lvl.innerHTML);
    left6Lvl.innerHTML = +left6Lvl.innerHTML - 1;
    if (left6Lvl.innerHTML === "0") {
        left6Lvl.innerHTML = "";
        hideSkillDetails();
    } else {
        showSkillDetails(left6);
    }
    return false;
};