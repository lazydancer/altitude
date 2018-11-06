export const Colors = {
  NEUTRAL: "#425A70",
  BLUE: "#1070CA",
  RED: "#EC4C47",
  ORANGE: "#D9822B",
  YELLOW: "#F7D154",
  GREEN: "#47B881",
  TEAL:"#14B5D0",
  PURPLE: "#735DD0",
}

export const isSameDay = (dateOne, dateTwo) => {
  return ( 
    dateOne.getDate() === dateTwo.getDate()
    && dateOne.getMonth() === dateTwo.getMonth()
    && dateOne.getFullYear() === dateTwo.getFullYear()
  )
}
