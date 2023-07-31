import HeaderComponent from './Header';

export default {
  component: HeaderComponent,
  title: '1.Components/Header'
};

export const Header = () => (
  <div className="bg-primary-blue w-full h-screen">
    <HeaderComponent />
  </div>
);
