import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Button } from '../../globalStyles';
import { 
  FooterContainer, 
  FooterSubscription, 
  FooterSubheading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLinksWrapper,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  Content
} from './FooterStyle';

const Footer = () => {
    return (
        <FooterContainer>
         <FooterSubscription>
           <FooterSubheading>
             Join our exclusive membershipt to 
             recieve the latest news and trends 
           </FooterSubheading>
             <FooterSubText>
              You can unsubscribe at any time.
             </FooterSubText>
              <Form>
                <FormInput name='email' type='email' placeholder='Your Email' />
                  <Button fontBig >Subscribe</Button>
              </Form>
         </FooterSubscription>
         <FooterLinksContainer>
           <FooterLinksWrapper>
             <FooterLinkItems>
               <FooterLinkTitle> About Us</FooterLinkTitle>
               <FooterLink to='/sign-up'>How it works</FooterLink>
               <FooterLink to='/'>Testimonials</FooterLink>
               <FooterLink to='/'>Careers</FooterLink>
               <FooterLink to='/'>Investors</FooterLink>
               <FooterLink to='/'>Terms of Services</FooterLink>
             </FooterLinkItems>
             <FooterLinkItems>
               <FooterLinkTitle> Contact Us</FooterLinkTitle>
               <FooterLink to='/sign-up'>How it works</FooterLink>
               <FooterLink to='/'>Testimonials</FooterLink>
               <FooterLink to='/'>Careers</FooterLink>
               <FooterLink to='/'>Investors</FooterLink>
               <FooterLink to='/'>Terms of Services</FooterLink>
             </FooterLinkItems>
             </FooterLinksWrapper>
             <FooterLinksWrapper>
             <FooterLinkItems>
               <FooterLinkTitle> Videos</FooterLinkTitle>
               <FooterLink to='/sign-up'>How it works</FooterLink>
               <FooterLink to='/'>Testimonials</FooterLink>
               <FooterLink to='/'>Careers</FooterLink>
               <FooterLink to='/'>Investors</FooterLink>
               <FooterLink to='/'>Terms of Services</FooterLink>
             </FooterLinkItems>
             <FooterLinkItems>
               <FooterLinkTitle> Social Media</FooterLinkTitle>
               <FooterLink to='/sign-up'>How it works</FooterLink>
               <FooterLink to='/'>Testimonials</FooterLink>
               <FooterLink to='/'>Careers</FooterLink>
               <FooterLink to='/'>Investors</FooterLink>
               <FooterLink to='/'>Terms of Services</FooterLink>
             </FooterLinkItems>
           </FooterLinksWrapper>
         </FooterLinksContainer>
         <SocialMedia>
           <SocialMediaWrap>
             <SocialLogo to='/'>
               <SocialIcon />
               <Content>FCT</Content> 
             </SocialLogo>
             <WebsiteRights>FCT © 2021</WebsiteRights>
             <SocialIcons>
               <SocialIconLink href='/' target="_blank" aria-label="Facebook" >
                 <FaFacebook />
               </SocialIconLink>
               <SocialIconLink href='/' target="_blank" aria-label="Instagram" >
                 <FaInstagram />
               </SocialIconLink>
               <SocialIconLink href='/' target="_blank" aria-label="Youtube" rel="noopener noreferrer" >
                 <FaYoutube />
               </SocialIconLink>
               <SocialIconLink href='/' target="_blank" aria-label="Twitter" >
                 <FaTwitter />
               </SocialIconLink>
               <SocialIconLink href='/' target="_blank" aria-label="Linkedin" >
                 <FaLinkedin />
               </SocialIconLink>
             </SocialIcons>
           </SocialMediaWrap>
         </SocialMedia>
        </FooterContainer>
    )
}

export default Footer;
