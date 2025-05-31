const rationalQuotes = [
  "좋아, 이제 결정해.",
  "그래, 그냥 해.",
  "더는 핑계 대지 마.",
  "끝날 땐 제대로 끝내.",
  "너무 오래 끌었어.",
  "기다릴 이유는 충분했어.",
  "지금이 마지막 기회야.",
  "말로 끝내, 마음 말고.",
  "이미 답은 알고 있잖아.",
  "움직여, 생각은 충분했어."
];
function showAdvice() {
  const output = document.getElementById("advice-output");
  const random = Math.floor(Math.random() * rationalQuotes.length);
  output.textContent = rationalQuotes[random];
}