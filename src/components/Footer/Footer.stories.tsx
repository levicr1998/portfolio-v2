import FooterComponent from './Footer';
import LinkedInIcon from '../icons/LinkedInIcon';
import GithubIcon from '../icons/GithubIcon';
import InstagramIcon from '../icons/InstagramIcon';
import FacebookIcon from '../icons/FacebookIcon';

export default {
  component: FooterComponent,
  title: '1.Components/Footer'
};

export const Footer = () => (
  <div className="w-full h-screen flex items-center">
    <FooterComponent
      items={[
        {
          icon: LinkedInIcon,
          link: 'https://www.linkedin.com/in/levi-crietee-84ab74145/'
        },
        {
          icon: GithubIcon,
          link: 'https://github.com/levicr1998'
        },
        {
          icon: InstagramIcon,
          link: 'https://www.instagram.com/levicrietee/'
        },

        {
          icon: FacebookIcon,
          link: 'https://www.facebook.com/levi.crietee'
        }
      ]}></FooterComponent>
  </div>
);
