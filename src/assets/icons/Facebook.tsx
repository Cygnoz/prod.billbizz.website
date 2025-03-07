
type Props = {color?: string; size?: string};

const Facebook = ({ size,color }: Props) => {
  return (
    <div>
      <svg
        width={size?size:"6"}
        height={size?size:"10"}
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.77617 10H3.8917V5.4375H5.66065L5.9278 3.6625H3.8917V2.525C3.8917 2.0125 4.05776 1.6625 4.90975 1.6625H6V0.0687499C5.81227 0.0499999 5.16967 0 4.41877 0C2.84477 0 1.77617 0.83125 1.77617 2.35V3.6625H0V5.4375H1.77617V10Z"
          fill={color?color:"#999999"}
        />
      </svg>
    </div>
  );
};

export default Facebook;
