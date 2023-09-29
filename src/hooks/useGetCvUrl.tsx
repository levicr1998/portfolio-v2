import { useContext, useEffect, useState } from 'react';
import { ContentfulContext } from '../context/ContentfulContext';

export function useGetCvUrl() {
  const [isLoading, setIsLoading] = useState(true);
  const [cvFileUrl, setCvFileUrl] = useState<string>('');
  const client = useContext(ContentfulContext);

  useEffect(() => {
    client?.getAsset('7zEmsjIqJNIybUP6gB8RXG').then((file) => {
      setCvFileUrl(file?.fields?.file?.url ? `https:${file?.fields?.file?.url}` : '');
      setIsLoading(false);
    });
  }, [client, setCvFileUrl, setIsLoading]);

  return [cvFileUrl, isLoading] as const;
}
