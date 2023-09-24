import type { Asset, EntryFields, EntrySkeletonType } from 'contentful';

export interface TypeProjectFields {
  id?: EntryFields.Integer;
  title?: EntryFields.Symbol;
  details?: EntryFields.Symbol[];
  company?: EntryFields.Symbol;
  description?: EntryFields.Text;
  skills?: EntryFields.Symbol[];
  videoId?: EntryFields.Symbol;
  demoVideoEnabled?: EntryFields.Boolean;
  links?: EntryFields.Object;
  thumbnail?: Asset;
  isMobileThumbnail?: EntryFields.Boolean;
  video?: Asset;
  themeColor?:
    | 'theme-black'
    | 'theme-blue'
    | 'theme-light-green'
    | 'theme-orange'
    | 'theme-purple'
    | 'theme-red';
}

export type TypeProject = EntrySkeletonType<TypeProjectFields>;
