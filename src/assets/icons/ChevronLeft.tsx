
type Props = {
    size?:number;
    color?:string;
}

const ChevronLeft = ({size=16, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0648 18.6293L1.93555 10.5L10.0648 2.37073" stroke={color?color:"black"} stroke-width="3.09687" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default ChevronLeft