function btnClick(){
    const p_element = document.querySelector("#answer");
    const omikuji = ["凶", "吉", "末吉", "庄吉", "忠吉", "代吉"];
    const omikuji_answer = omikuji[Math.floor(Math.random() * omikuji.length)];
    p_element.textContent = omikuji_answer;
}