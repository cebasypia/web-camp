const HANDS = ["グー", "チョキ", "パー"]

const judgeElement = document.getElementById("judge")
const handElement = document.getElementById("hand")
const cancelElement = document.getElementById("cancel")

const makeHand = () => {
  const num = Math.floor(Math.random() * HANDS.length)
  return HANDS[num]
}

const judge = (hand) => {
  const jsHand = makeHand()

  if (hand === jsHand) {
    return "あいこ"
  }
  switch (hand) {
    case "グー":
      if (jsHand === "チョキ") return "勝ち！"
      if (jsHand === "パー") return "負け"
      break;
    case "チョキ":
      if (jsHand === "パー") return "勝ち！"
      if (jsHand === "グー") return "負け"
      break;
    case "パー":
      if (jsHand === "グー") return "勝ち！"
      if (jsHand === "チョキ") return "負け"
      break;

    default:
      return "グー・チョキ・パーのいずれかを入力してください"
  }
}

judgeElement.addEventListener("click", () => {
  const hand = handElement.value
  alert(judge(hand))
})

cancelElement.addEventListener("click", () => {
  alert("またチャレンジしてね")
})