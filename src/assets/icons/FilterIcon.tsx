
type Props = {
    size?:number;
    color?:string;
}

const FilterIcon = ({size=14, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.5H13M3.66667 5.5H10.3333M5.66667 9.5H8.33333" stroke={color?color:"#565148"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default FilterIcon