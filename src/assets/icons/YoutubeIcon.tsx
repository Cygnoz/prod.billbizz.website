
type Props = {
    size?:number;
    color?:string;
    bg?:string;
}

const YoutubeIcon = ({size=20, color, bg}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 22 16" fill={bg?bg:"none"} xmlns="http://www.w3.org/2000/svg">
<path d="M1.5005 13C0.801918 9.70327 0.801918 6.29673 1.5005 3C1.59228 2.66521 1.76963 2.36007 2.0151 2.11461C2.26057 1.86914 2.5657 1.69179 2.9005 1.6C8.26394 0.711459 13.737 0.711459 19.1005 1.6C19.4353 1.69179 19.7404 1.86914 19.9859 2.11461C20.2314 2.36007 20.4087 2.66521 20.5005 3C21.1991 6.29673 21.1991 9.70327 20.5005 13C20.4087 13.3348 20.2314 13.6399 19.9859 13.8854C19.7404 14.1309 19.4353 14.3082 19.1005 14.4C13.7371 15.2887 8.26393 15.2887 2.9005 14.4C2.5657 14.3082 2.26057 14.1309 2.0151 13.8854C1.76963 13.6399 1.59228 13.3348 1.5005 13Z" stroke={color?color:"white"} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.00049 11L14.0005 8L9.00049 5V11Z" stroke={color?color:"white"} stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default YoutubeIcon