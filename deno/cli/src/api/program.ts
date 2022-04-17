export interface Program {
  id: number;
  directory_name: string;
  display: boolean;
  show_contents_count: number;
  brand_new: boolean;
  brand_new_sp: boolean;
  title: string;
  image: Image;
  new: boolean;
  list: boolean;
  delivery_interval: string;
  delivery_day_of_week?: number[] | null;
  category_list?: string[] | null;
  copyright: string;
  sponsor_name: string;
  updated: string;
  performers?: Performer[] | null;
  related_links?: RelatedLinksEntity[] | null;
  related_infos?: RelatedInfosEntity[] | null;
  related_programs?: RelatedProgramsEntity[] | null;
  guest_in_new_content?: null[] | null;
  guests?: null[] | null;
  contents?: ContentsEntity[] | null;
}

export interface Image {
  url: string;
}

export interface Performer {
  id: number;
  name: string;
  allow_like: boolean;
}
export interface RelatedLinksEntity {
  link_url: string;
  image: string;
}
export interface RelatedInfosEntity {
  category: string;
  link_url: string;
  caption: string;
  image: string;
}
export interface RelatedProgramsEntity {
  title: string;
  directory_name: string;
  category: string;
  image: string;
  performers?: Performer[] | null;
}
export interface ContentsEntity {
  id: number;
  title: string;
  latest: boolean;
  media_type: string;
  program_id: number;
  new: boolean;
  event: boolean;
  block: boolean;
  ongen_id: number;
  premium: boolean;
  free: boolean;
  delivery_date: string;
  movie: boolean;
  poster_image_url: string;
  streaming_url?: string | null;
  tag_image: TagImage;
  guests?: null[] | null;
  expiring: boolean;
}
export interface TagImage {
  url?: null;
}

const BASE_URL = "https://www.onsen.ag/web_api";

export async function fetchPrograms() {
  const res = await fetch(`${BASE_URL}/programs`);
  const data: Program[] = await res.json();
  return data;
}
