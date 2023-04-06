let arr = [
    {
        q: "Q.1 what is full form of HTML ?",
        ans1: "Hyper Text Marcup Language",
        ans2: "Hyper Text Machine Language",
        ans3: "Hyper Text Machanic Language",
        ans4: "Hyper Text Mobile Language",
        ans: "ans1"
    },

    {
        q: "Q.2 what is full form of Css?",
        ans1: "Cascading Style Sheet",
        ans2: "Cascad Style Sheet",
        ans3: "Cascade Style Sheet",
        ans4: "Casca Style Sheet",
        ans: "ans1"
    },

    {
        q: "Q.3 what is full form of RJ ?",
        ans1: "React js",
        ans2: "React java ",
        ans3: "React json",
        ans4: "React java se",
        ans: "ans1"
    },

    {
        q: "Q.4 what is full form of JS",
        ans1: "Java Script",
        ans2: "Java ScriptText ",
        ans3: "Java Script Language",
        ans4: "Js ",
        ans: "ans1"
    }
]
////////////////variable/////
let submit = document.querySelector(".submit");
let q = document.querySelector(".ques");
let answer = document.querySelectorAll("input");
let Ques = 0;
////////////////////////////////////
const deleteAll = () => {
    answer.forEach(E => {
        E.checked = false;
    })
}

const fillQues = () => {
    console.log("fill" + Ques)
    q.firstElementChild.innerHTML = arr[Ques].q;
    for (let i = 1; i <= 4; i++) {

        answer[i - 1].nextSibling.remove();
        let op = arr[Ques][`ans${i}`]
        answer[i - 1].insertAdjacentText
            ("afterend", op);
    }
}
fillQues();
///////function///////
let ans = "";
let score = 0;
let clr = 0;
let userAns = "";
let click = 0;
/////questions given////

answer.forEach((e, i) => {
    e.addEventListener("click", (event, i) => {
        if (click == 0) {
            if (e.checked) {
                userAns = event.target.id;
                document.querySelector(".chance").style.display = "none";
            }
            click = 1;
        }
        else {
            document.querySelector(".chance").style.display = "block";
            document.querySelector(".chance").innerHTML = "Only One Time One Chance";
        }
        colorChange()

    })

})

let chance = document.querySelector(".chance");
submit.addEventListener("click", (e) => {
    deleteAll();

    click = 0;

    if (userAns != "") {
        chance.style.display = "none";
        clr.parentElement.style.color = "blue";
        if (Ques < arr.length) {
            setQues();
            userAns = "";
        }
        Ques++;
        if(Ques<arr.length){
          fillQues();

        }
        else {
            showResult();
        }
       
        document.querySelector(".chance").style.display = "none";
    }
    else {
        chance.innerHTML = "Please Fill Answer";
        chance.style.display = "block";

    }
})

function showResult() {


    document.querySelector(".win").style.display = "block";
    document.querySelector(".win > p").textContent = `Your score ${score}/4`


}



document.querySelector(".win>button").addEventListener("click", () => {
    window.location.reload();
})

function setQues(e) {
    ans = arr[Ques].ans;

    if (ans == userAns) {
        score++;
        console.log("ans" + ans, "user" + userAns);
        
    }



}

function colorChange() {
    ans = arr[Ques].ans;
    answer.forEach(e => {
        if (e.id == ans) {
            clr = e;
            e.parentElement.style.color = "red";
            e.innerHTML="Ans";
        }
    })
    return clr;


}




