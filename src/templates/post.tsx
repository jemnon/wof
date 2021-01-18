import React, { FC } from 'react';
import styled from 'styled-components';
import { Post as PostType } from '../types/post';
import { generateFromAst } from '../utils/utils';
import Breadcrumbs from '../molecules/Breadcrumbs';
import Layout from '../organisms/Layout';
import SEO from '../molecules/SEO';
import Share from '../molecules/Share';

interface PostPageProps {
  pageContext: {
    page: PostType;
  };
  location: {
    pathname: string;
    href: string;
  };
}

const PostPageHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  [class^='breadcrumbs'] {
    margin-bottom: 0;
  }
`;

const capitalize = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const PostPage: FC<PostPageProps> = ({ location, pageContext }) => {
  const { page: post } = pageContext || {};
  const [{ fixed }] = post.images || [];
  const schemaJson = {
    '@context': 'http://schema.org',
    '@type': 'Recipe',
    author: 'Jeri Mobley',
    description: post.bodyPreview?.bodyPreview,
    datePublished: post.publishDate,
    image: `https:${fixed?.src}`,
    name: capitalize(post.title),
    recipeIngredient: generateFromAst(post.body?.childMarkdownRemark?.htmlAst),
    recipeInstructions: generateFromAst(
      post.body?.childMarkdownRemark?.htmlAst,
      'instructions',
      'ol',
    ),
  };
  return (
    <Layout>
      <SEO
        description={`${post.bodyPreview?.bodyPreview}`}
        title={`${capitalize(post.title)} | Whisper of Yum`}
        type="article"
        image={`https:${fixed?.src}`}
        pathname={location.pathname}
        script={JSON.stringify(schemaJson)}
      />
      <PostPageHeader>
        <Breadcrumbs title={post.title} />
        <Share
          description={post.bodyPreview?.bodyPreview}
          media={`https:${fixed?.src}`}
          title={post.title}
          url={location.href}
        />
      </PostPageHeader>
      {post && <>{JSON.stringify(post)}</>}
    </Layout>
  );
};

export default PostPage;
