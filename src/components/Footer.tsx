import styled from "styled-components";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import SubscribeInput from "./SubscribeInput";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <NewsletterSection>
          <h2>Join MindBlock</h2>
          <p>
            Get exclusive <span>blockchain puzzle</span> updates straight to
            your inbox.
          </p>
          <SubscribeInput />
        </NewsletterSection>

        <LinksSection>
          <LinkColumn>
            <h3>About</h3>
            <ul>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Players</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </LinkColumn>

          <LinkColumn>
            <h3>Game Features</h3>
            <ul>
              <li>
                <a href="#">Puzzles</a>
              </li>
              <li>
                <a href="#">Rewards</a>
              </li>
              <li>
                <a href="#">Leaderboard</a>
              </li>
            </ul>
          </LinkColumn>

          <LinkColumn>
            <h3>Contact Us</h3>
            <ContactItem>
              <Phone size={16} />
              <span>(123) 456 7890</span>
            </ContactItem>
            <ContactItem>
              <Mail size={16} />
              <span>hello@mindblock.com</span>
            </ContactItem>
            <ContactItem>
              <MapPin size={16} />
              <span>123 Blockchain Street, Crypto City</span>
            </ContactItem>
          </LinkColumn>
        </LinksSection>
      </FooterContent>

      <FooterBottom>
        <Copyright>
          © {new Date().getFullYear()} MindBlock. All Rights Reserved.
        </Copyright>
        <SocialIcons>
          <SocialIcon>
            <Facebook size={18} />
          </SocialIcon>
          <SocialIcon>
            <Linkedin size={18} />
          </SocialIcon>
          <SocialIcon>
            <Twitter size={18} />
          </SocialIcon>
          <SocialIcon>
            <Instagram size={18} />
          </SocialIcon>
          <SocialIcon>
            <Youtube size={18} />
          </SocialIcon>
        </SocialIcons>
        <FooterLinks>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </FooterLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 4rem 0 1rem;
  width: 100%;
  margin-top: 6rem; /* Add spacing between footer and game features */
  border-top: 1px solid rgba(0, 229, 255, 0.1);
  box-shadow: 0 -10px 30px rgba(0, 229, 255, 0.05);
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NewsletterSection = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 400px;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    font-family: var(--font-primary);
    background: linear-gradient(90deg, #00e5ff, #ff0080);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% auto;
  }

  p {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    color: #ccc;

    span {
      font-weight: 600;
      color: #00e5ff;
    }
  }
`;

const LinksSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const LinkColumn = styled.div`
  min-width: 150px;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #00e5ff;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        color: #ccc;
        text-decoration: none;
        font-size: 0.9rem;
        transition: color 0.3s;

        &:hover {
          color: #00e5ff;
        }
      }
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  color: #ccc;
  font-size: 0.9rem;

  svg {
    color: #00e5ff;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 2rem auto 0;
  padding: 1.5rem 2rem 0;
  border-top: 1px solid rgba(0, 229, 255, 0.1);
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.div`
  font-size: 0.8rem;
  color: #999;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(0, 229, 255, 0.1);
  color: #ccc;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to right, #00e5ff, #ff0080);
    color: white;
    transform: translateY(-3px);
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: #999;
    text-decoration: none;
    font-size: 0.8rem;
    transition: color 0.3s;

    &:hover {
      color: #00e5ff;
    }
  }
`;

export default Footer;
