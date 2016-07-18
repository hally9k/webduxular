
function changeColor(newColor) {
  return {
    type: 'CHANGE_COLOR',
    payload: {
      color: newColor
    }
  }
}

export default {
  changeColor
}
