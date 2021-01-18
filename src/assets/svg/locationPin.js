import * as React from "react"

const SvgLocationPin = props => {
  return (
    <svg width={12} height={16} {...props}>
      <path
        d="M6 7.304a1.892 1.892 0 001.62-.927c.168-.282.252-.591.252-.927A1.87 1.87 0 006 3.578c-.336 0-.645.084-.927.252a1.892 1.892 0 00-.927 1.62c0 .516.18.954.54 1.314.36.36.798.54 1.314.54zM6 .212c.96 0 1.842.234 2.646.702a5.283 5.283 0 011.89 1.89c.468.804.702 1.686.702 2.646 0 .732-.18 1.572-.54 2.52-.312.804-.744 1.674-1.296 2.61a34.43 34.43 0 01-1.566 2.322c-.408.564-.84 1.116-1.296 1.656l-.54.63-.54-.63a28.036 28.036 0 01-1.296-1.656 34.43 34.43 0 01-1.566-2.322c-.552-.936-.984-1.806-1.296-2.61-.36-.948-.54-1.788-.54-2.52 0-.96.234-1.842.702-2.646a5.283 5.283 0 011.89-1.89A5.166 5.166 0 016 .212z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgLocationPin