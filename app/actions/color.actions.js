

function changeColor(aColor) {
  return {
    type: 'CHANGE_COLOR',
    payload: {
      color: aColor
    }
  }
}

export default {
  changeColor
}
