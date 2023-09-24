import BackButtonComponent from './BackButton';
import { ReactRouterDecorator } from '../../decorators/ReactRouterDecorator';

export default {
  component: BackButtonComponent,
  title: '1.Components/BackButton',
  decorators: [ReactRouterDecorator]
};

export const BackButton = () => (
  <div className="w-full h-screen flex items-center">
    <BackButtonComponent></BackButtonComponent>
  </div>
);
