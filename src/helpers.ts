import * as contentful from 'contentful';
import { Params } from 'react-router-dom';

export const projectLoader = async ({ params }: { params: Params }) => {
  const client = contentful.createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
  });
  const project = await client.getEntry(params?.projectId ?? '');
  return project;
};
