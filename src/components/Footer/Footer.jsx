import { FooterContainer, NavLink, FooterLinks, ContactInfo, InfoContainer } from "./styles"

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <span>@2023 Web Development Practice | Powered by Jacqui</span>
      </div>
      <InfoContainer>
        <FooterLinks>
          <NavLink to="/About" data-cy="about-link">About Us</NavLink>
          <button>Terms & Conditions</button>
          <button>Privacy Policy</button>
        </FooterLinks>
        <ContactInfo>
          <span>📱 1-800-123-4567</span>
          <span>📧 info@dogstore.com</span>
        </ContactInfo>
      </InfoContainer>
    </FooterContainer>
  )
}

export default Footer