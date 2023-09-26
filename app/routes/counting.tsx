import React from "react";

const Apple = ({
  width,
  height,
}: {
  width?: string | number;
  height?: string | number;
}) => {
  return (
    <svg
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <path
        fill="rgb(238, 62, 62)"
        d="M 0 288 C 0 211.7 35.7 128 112 128 C 139.3 128 171.7 138.3 194.7 147.3 C 213.5 154.6 234.6 154.6 253.4 147.3 C 276.3 138.4 308.8 128 336.1 128 C 412.4 128 448.1 211.7 448.1 288 C 448.1 416 368.1 512 288.1 512 C 271.6 512 250 505.4 236.6 500.7 C 228.5 497.9 219.7 497.9 211.6 500.7 C 198.2 505.4 176.6 512 160.1 512 C 80 512 0 416 0 288 Z"
      />
      <path
        fill="rgb(33, 167, 0)"
        d="M 223.268 114.694 C 214.468 114.694 207.268 107.494 207.268 98.694 L 207.268 82.694 C 207.268 38.494 243.068 2.694 287.268 2.694 L 303.268 2.694 C 312.068 2.694 319.268 9.894 319.268 18.694 L 319.268 34.694 C 319.268 78.894 283.468 114.694 239.268 114.694 L 223.268 114.694 Z"
      />
    </svg>
  );
};

const randNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function Counting() {
  const appleSize = "4rem";
  const maxRows = 4;
  const maxCols = 3;
  const [count, setCount] = React.useState(randNum(1, maxRows * maxCols));
  return (
    <main className="relative flex flex-col min-h-screen w-full bg-white justify-center items-center space-y-4">
      <div className="text-lg">How many apples are there?</div>
      <div className={`grid grid-cols-${maxCols} gap-4 justify-center`}>
        {[...new Array(count)].map((_, i) => (
          <Apple key={i} width={appleSize} height={appleSize} />
        ))}
      </div>
    </main>
  );
}
