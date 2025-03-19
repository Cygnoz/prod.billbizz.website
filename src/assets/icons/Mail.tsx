
type Props = {
    size?:number;
    color?:string;
    bg?:string;
}

const Mail = ({size=16, color, bg}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 24 25" fill={bg?bg:"none"} xmlns="http://www.w3.org/2000/svg">
<path d="M22 7.6377L13.03 13.3377C12.7213 13.5311 12.3643 13.6337 12 13.6337C11.6357 13.6337 11.2787 13.5311 10.97 13.3377L2 7.6377M4 4.6377H20C21.1046 4.6377 22 5.53313 22 6.6377V18.6377C22 19.7423 21.1046 20.6377 20 20.6377H4C2.89543 20.6377 2 19.7423 2 18.6377V6.6377C2 5.53313 2.89543 4.6377 4 4.6377Z" stroke={color?color:"#BEBEBE"} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  )
}

export default Mail