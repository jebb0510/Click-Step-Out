const emotionalQuotes = [
  "곧 알게 될 거야.",
  "모든 건 지나가.",
  "잘하고 있어.",
  "아직 결정할 때가 아니야.",
  "잠시 멈춰도 괜찮아.",
  "이미 충분해.",
  "조금만 더 버텨보자.",
  "쉬어도 괜찮아.",
  "자책하지 마.",
  "지금의 너도 괜찮아."
];
function showAdvice() {
  const output = document.getElementById("advice-output");
  const random = Math.floor(Math.random() * emotionalQuotes.length);
  output.textContent = emotionalQuotes[random];
}