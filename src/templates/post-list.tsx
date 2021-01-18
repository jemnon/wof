import React, { FC, useState, useEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import { useNavigate } from '@reach/router';
import { HeroType } from '../types/hero';
import { Post as PostType } from '../types/post';
import Grid from '../organisms/grid-styled';
import Layout from '../organisms/Layout';
import Pagination from '../molecules/Pagingation';
import SEO from '../molecules/SEO';
import useShowHero from '../hooks/useShowHero';

interface PostNode {
  node: PostType;
}

interface HeroNode {
  node: HeroType;
}

interface PostListProps {
  data?: {
    allContentfulPosts?: {
      edges?: PostNode[];
    };
    allContentfulHeroes?: {
      edges?: HeroNode[];
    };
  };

  location: {
    pathname: string;
    state: {
      page?: number;
    };
  };

  pageContext?: {
    currentPage: number;
    limit: number;
    totalPages: number;
  };
}

const metaDesc =
  `Just like you (or not), I love food. So much so, ` +
  `my partner and I decided to create this repository of my go-to, ` +
  `flavor-bomb dishes, with simple-ish prep. I get down making all sorts ` +
  `of eats, especially Filipino dishes from my childhood. ` +
  `I keep it simple and straight to the point; brief-ish description, ingredients, and steps.` +
  `I figure, if it looks good and you feel so inclined to making it, ` +
  `I'll spare you the endless scrolling through the details of why I ` +
  `chose a specific ingredient over another and get straight to what ` +
  `you want. Enjoy the content.`;

const PostList: FC<PostListProps> = ({ data, location, pageContext }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(false);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const showHero = useShowHero(location);
  const navigate = useNavigate();

  const { edges: posts } = data?.allContentfulPosts || {};
  const { edges: hero } = data?.allContentfulHeroes || {};
  const [{ node: heroNode }] = hero || [];

  const handlePaginationClick = (page: number): void => {
    navigate(`/${page === 1 ? '' : page}`, {
      state: {
        page,
      },
    });
  };

  useEffect(() => {
    const heroHeight = heroRef.current?.clientHeight || 0;
    const handleScroll = (): void => {
      if (!showHero) return;
      const windowY = window.pageYOffset;
      const waypoint = heroHeight / 2;
      if (waypoint >= windowY) {
        setIsHeaderVisible(false);
      }
      if (waypoint <= windowY) {
        setIsHeaderVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHeaderVisible, setIsHeaderVisible, showHero]);
  useEffect(() => {
    if (!showHero) {
      setIsHeaderVisible(true);
    }
    if (showHero) {
      setIsHeaderVisible(false);
    }
  }, [showHero]);
  return (
    <Layout>
      <SEO
        description={metaDesc}
        image="https://res.cloudinary.com/dd8c1nipl/image/upload/c_scale,w_880/v1586932061/woy/pork-chop.jpg"
        title="Whisper of Yum | Recipes, Cooking and Los Angeles"
        type="article"
      />
      <div>
        {posts && (
          <>
            <Grid columns={3}>
              {posts.map((post, idx) => {
                return <>{JSON.stringify(post)}</>;
              })}
            </Grid>
            {pageContext?.currentPage && pageContext.totalPages && (
              <Pagination
                currentPage={pageContext?.currentPage}
                onClick={handlePaginationClick}
                totalPages={pageContext?.totalPages}
              />
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query homePageQuery($skip: Int!, $limit: Int!) {
    allContentfulPosts(
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: publishDate }
    ) {
      edges {
        node {
          id
          slug
          publishDate
          categories {
            name
            posts {
              slug
            }
          }
          title
          images {
            fixed(width: 400) {
              src
            }
            fluid {
              aspectRatio
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
          bodyPreview {
            bodyPreview
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulHeroes {
      edges {
        node {
          images {
            fluid(maxWidth: 1920) {
              aspectRatio
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
        }
      }
    }
  }
`;

export default PostList;
