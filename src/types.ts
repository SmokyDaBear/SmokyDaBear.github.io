export type TFaq = {
  question: string;
  answer: string;
};

export type project = {
  id: number;
  image: string;
  title: string;
  description: string;
  tags: string[];
  sourceUrl: string;
  pageUrl: string;
  featured?: boolean;
};

export interface Tservice {
  name: string;
  icon: string;
  description: string;
  descriptionLong?: string;
}
