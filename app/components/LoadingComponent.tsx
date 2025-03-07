function Loading() {
  return (
    // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    //   <circle
    //     transform="rotate(0)"
    //     transform-origin="center"
    //     fill="none"
    //     stroke="#FF156D"
    //     stroke-width="15"
    //     stroke-linecap="round"
    //     stroke-dasharray="230 1000"
    //     stroke-dashoffset="0"
    //     cx="100"
    //     cy="100"
    //     r="70"
    //   >
    //     <animateTransform
    //       attributeName="transform"
    //       type="rotate"
    //       from="0"
    //       to="360"
    //       dur="2"
    //       repeatCount="indefinite"
    //     ></animateTransform>
    //   </circle>
    // </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="24"
      height="24"
    >
      <circle
        transform="rotate(0)"
        transform-origin="center"
        fill="none"
        stroke="#FFFFFF"
        stroke-width="20"
        stroke-linecap="round"
        stroke-dasharray="230 1000"
        stroke-dashoffset="0"
        cx="100"
        cy="100"
        r="70"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0"
          to="360"
          dur="2s"
          repeatCount="indefinite"
        ></animateTransform>
      </circle>
    </svg>
  );
}

export default Loading;
