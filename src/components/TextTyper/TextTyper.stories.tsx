import TextTyperComponent from './TextTyper';

export default {
  component: TextTyperComponent,
  title: '1.Components/TextTyper'
};

export const TextTyper = () => (
  <div className="w-full h-[40rem]">
    <TextTyperComponent
      wordsToType={['Developer', 'Motivator', 'Teamplayer', 'Discoverer', 'Creator']}
    />
  </div>
);
