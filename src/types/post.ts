import { Element } from 'hast';
import { Categories } from './categories';
import { Images } from './images';

interface RelatedRecipes {
  images: Images[];
  slug: string;
  title: string;
  publishDate: string;
}

export interface Post {
  bodyPreview?: {
    bodyPreview?: string;
    childMarkdownRemark?: {
      html: string;
      htmlAst?: Element;
    };
  };
  bodyShort?: {
    bodyShort?: string;
    childMarkdownRemark?: {
      html: string;
    };
  };
  categories?: Categories[];
  contentful_id?: string;
  enableComments?: boolean;
  enableAmp?: boolean;
  id?: string;
  images: Images[];
  ingredients?: {
    childMarkdownRemark?: {
      html: string;
      htmlAst?: Element;
    };
  };
  instructions?: {
    childMarkdownRemark?: {
      html: string;
      htmlAst?: Element;
    };
  };
  optionalIngredients?: {
    childMarkdownRemark?: {
      html: string;
      htmlAst?: Element;
    };
  };
  next?: {
    images: Images[];
    title: string;
    slug: string;
  };
  previous?: {
    images: Images[];
    title: string;
    slug: string;
  };
  publishDate?: string;
  totalTime?: string;
  relatedRecipes?: RelatedRecipes[];
  servings?: string;
  slug?: string;
  title: string;
}
