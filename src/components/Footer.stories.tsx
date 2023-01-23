import FooterComponent from './Footer';

export default {
  component: FooterComponent,
  title: '1.Components/Footer'
};

export const Footer = () => (
  <FooterComponent
    items={[
      {
        src: '../assets/img/icons/linkedin-icon.svg',
        alt: 'Linkedin Icon',
        link: 'https://www.linkedin.com/in/levi-crietee-84ab74145/'
      },
      {
        src: '../assets/img/icons/github-icon.svg',
        alt: 'Github Icon',
        link: 'https://github.com/levicr1998'
      },
      {
        src: '../assets/img/icons/instagram-icon.svg',
        alt: 'Instagram Icon',
        link: 'https://www.instagram.com/levicrietee/'
      },

      {
        src: '../assets/img/icons/facebook-icon.svg',
        alt: 'Facebook Icon',
        link: 'https://www.facebook.com/levi.crietee'
      }
    ]}
  />
);
