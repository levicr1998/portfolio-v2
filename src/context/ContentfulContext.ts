import { createContext } from 'react';
import { ContentfulClientApi } from 'contentful';

export const ContentfulContext = createContext<ContentfulClientApi<any> | undefined>(undefined);
