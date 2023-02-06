

const CustomCursor = ({ innerCursorRef, outerCursorRef }) => {

  return (
    <>
      <div ref={innerCursorRef} className="inner-cursor"></div>
      <div ref={outerCursorRef} className="outer-cursor"></div>
    </>
  );
};

export default CustomCursor;