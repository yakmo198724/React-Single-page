import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Button} from '../../globalStyles'
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './InfoSectionStyle';

const InfoSection = ({ 
    lightBg, 
    imgStart, 
    lightTopLine, 
    lightTextDesc, 
    description, 
    topline, 
    lighText,
    headline,
    buttonLabel,
    primary,
    start,
    img,
    alt
    }) => {
    return (
        <>
           <InfoSec lightBg={lightBg}>
           <Container>
               <InfoRow imgStart={imgStart}>
                <InfoColumn>
                    <TextWrapper>
                      <TopLine lightTopLine={lightTopLine} >{topline}</TopLine>
                       <Heading lightText={lighText}>{headline}</Heading>
                       <Subtitle lightTextDesc={lightTextDesc} >{description}</Subtitle>
                       <Link to='/sign-up' >
                         <Button big fontBig primary={primary} >
                           {buttonLabel}
                         </Button>
                       </Link>
                    </TextWrapper>
                  </InfoColumn>
                <InfoColumn>
              <ImgWrapper start={start}>
             <Img src={img} alt={alt} />
            </ImgWrapper>
        </InfoColumn>
      </InfoRow>
    </Container>
 </InfoSec> 
        </>
    )
}

export default InfoSection;
