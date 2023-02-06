export const useCustomCursor = (innerCursor, outerCursor) => {
  document.addEventListener('mousemove', mousemoveHandler);

  function mousemoveHandler(e) {
    let x = e.clientX;
    let y = e.clientY;
    console.log(e.target, x, y);

    innerCursor.current.style.left = `${x}px`;
    outerCursor.current.style.top = `${y}px`;
  }
}