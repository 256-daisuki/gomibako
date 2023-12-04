function btnClick() {
    const p_element = document.querySelector("#answer");
    const a_element = document.querySelector("#link");
    const body = document.querySelector("#body")
    const omikuji = ["凶", "吉", "末吉", "庄吉", "忠吉", "代吉"];
    const omikuji_answer = omikuji[Math.floor(Math.random() * omikuji.length)];
    p_element.textContent = omikuji_answer;

    if (omikuji_answer === "代吉") {
        a_element.style.display = "inline";
        body.style.backgroundColor = "#ff0000";
    } else {
        a_element.style.display = "none";
        body.style.backgroundColor  = "#fff";
    }
}