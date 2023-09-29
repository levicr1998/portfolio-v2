import { useContext, useEffect, useState } from 'react';
import { ContentfulContext } from '../context/ContentfulContext';

export function useGetContentfulProjects(limit = 10) {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<any[]>([]);
  const client = useContext(ContentfulContext);

  useEffect(() => {
    client
      ?.getEntries({
        skip: 0,
        limit: limit,
        content_type: 'project',
        order: ['-fields.id']
      })
      .then((entries) => {
        setProjects(entries?.items?.map((item) => item));
        setIsLoading(false);
      });
  }, [client, setProjects, limit]);

  return [projects, isLoading] as const;
}
