// util imports
import styled from 'styled-components';


export interface IImageProps {
    src: string,
    alt: string,
    styles?: any
}

export default function LogoWrapper (props: IImageProps) {
    return (
        <ImageWrapper src={props.src} alt={props.alt}/>
    )
}

export const ImageWrapper = styled.img`
  height: 38px
`;

