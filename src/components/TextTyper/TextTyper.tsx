import { useEffect, useRef, useState } from 'react';
import { classNames } from '../../helpers/classHelper';

type Props = {
  wordsToType: string[];
  typingSpeed?: number;
  erasingSpeed?: number;
  newTextDelay?: number;
  className?: string;
};

const TextTyper = ({
  typingSpeed = 200,
  erasingSpeed = 100,
  newTextDelay = 1000,
  wordsToType,
  className
}: Props) => {
  const [charIndex, setCharIndex] = useState<number>(wordsToType[0].length);
  const [typeStatus, setTypeStatus] = useState<boolean>(false);
  const [typeArrayIndex, setTypeArrayIndex] = useState<number>(0);
  const [typeValue, setTypeValue] = useState<string>(wordsToType[0]);

  const charIndexRef = useRef(charIndex);
  charIndexRef.current = charIndex;
  const typeArrayIndexRef = useRef(typeArrayIndex);
  typeArrayIndexRef.current = typeArrayIndex;
  const typeStatusRef = useRef(typeStatus);
  typeStatusRef.current = typeStatus;

  useEffect(() => {
    const timeout = setTimeout(typeText, newTextDelay + 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const typeText = () => {
    const typeArrayIndex = typeArrayIndexRef.current;
    const charIndex = charIndexRef.current;
    const typeStatus = typeStatusRef.current;
    if (charIndex < wordsToType?.[typeArrayIndex]?.length) {
      if (!typeStatus) {
        setTypeStatus(true);
      }
      setTypeValue((prevState) => prevState + wordsToType?.[typeArrayIndex].charAt(charIndex));
      setCharIndex((currentCharIndex) => currentCharIndex + 1);
      setTimeout(typeText, typingSpeed);
    } else {
      setTypeStatus(false);
      setTimeout(eraseText, newTextDelay);
    }
  };

  const eraseText = () => {
    const typeArrayIndex = typeArrayIndexRef.current;
    const charIndex = charIndexRef.current;
    const typeStatus = typeStatusRef.current;
    if (charIndex > 0) {
      if (!typeStatus) {
        setTypeStatus(true);
      }
      setTypeValue(wordsToType?.[typeArrayIndex].substring(0, charIndex - 1));
      setCharIndex((currentCharIndex) => currentCharIndex - 1);
      setTimeout(eraseText, erasingSpeed);
    } else {
      setTypeStatus(false);
      setTypeArrayIndex((currentTypeArrayIndex) => currentTypeArrayIndex + 1);
      if (typeArrayIndex >= wordsToType?.length) {
        setTypeArrayIndex(0);
      }
      setTimeout(typeText, typingSpeed + 1000);
    }
  };

  return (
    <h1
      className={classNames(
        className,
        'text-white flex flex-col text-2xl xs:text-4xl lg:text-5xl xs:min-w-[20rem] justify-center'
      )}>
      <span>Welcome,</span>
      <span>I'm Levi. </span>
      <span>
        I'm a <b>{typeValue}</b>
        <span
          className={classNames(
            typeStatus ? '' : 'animate-cursorBlinkAnimation',
            'inline-block w-0.5 ml-0.5 bg-white h-6 xs:h-8 align-middle'
          )}
        />
      </span>
    </h1>
  );
};

export default TextTyper;
