import React, { FC } from 'react';
import { graphql, navigate } from 'gatsby';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import Img from 'gatsby-image';
import { Images as Image } from '../types/images';
import Container from '../organisms/Container';
import Grid, { GridCell } from '../organisms/Grid';
import Header from '../organisms/Header';
import Layout, { PageHeader } from '../organisms/Layout';
import BreadCrumbs from '../molecules/BreadCrumbs';
import SEO from '../molecules/SEO';
import { H1 } from '../atoms/Headings';
import useBreakpoint from '../hooks/useBreakpoint';

interface AboutPageProps {
  data: {
    contentfulAbout: {
      description: {
        childMarkdownRemark: {
          html: string;
        };
      };
      image: Image;
    };
  };
  location: {
    pathname: string;
  };
}

const AboutPageContent = styled.article`
  ${up('md')} {
    position: relative;
    z-index: 1;

    padding: 2rem;
    margin-left: -4rem;
    margin-top: 4rem;

    background-color: ${({ theme }): string => theme.colors.white};
  }

  h2 {
    margin: 0;
    margin-bottom: 1rem;

    span {
      color: ${({ theme }): string => theme.colors.orange};
    }

    font-weight: bold;
    font-size: ${({ theme: { fontSizes } }): string => fontSizes.f3};
    ${up('md')} {
      font-size: ${({ theme: { fontSizes } }): string => fontSizes.f5};
    }
  }
`;

const AboutPage: FC<AboutPageProps> = ({
  data: { contentfulAbout },
  location,
}) => {
  const breakpoint = useBreakpoint();
  return (
    <Layout>
      <SEO
        description="Jeri Mobley creator of Whisper of Yum."
        title="About"
        type="article"
        image="https://images.ctfassets.net/lz7g6u6kccw7/5ZTQ6JUabdhzkYxGsOWwAN/38506c10912bb5fb03443efb790da33f/creamy_garlic_pork_chops.JPG?w=800&q=60"
        pathname={location.pathname}
      />
      <Header pathname="/about" />
      <Container>
        <PageHeader>
          <BreadCrumbs
            onClick={(): void => {
              navigate('/');
            }}
            title="about"
          />
        </PageHeader>
        <H1>About</H1>
        <Grid columns={breakpoint === 'desktop' ? 2 : 1}>
          <GridCell width={1}>
            {contentfulAbout.image?.fluid && (
              <Img
                alt="about jeri mobley"
                durationFadeIn={0}
                fluid={contentfulAbout.image?.fluid}
              />
            )}
          </GridCell>
          {contentfulAbout.description.childMarkdownRemark.html && (
            <GridCell width={1}>
              <>
                <AboutPageContent
                  dangerouslySetInnerHTML={{
                    __html:
                      contentfulAbout.description.childMarkdownRemark?.html,
                  }}
                />
              </>
            </GridCell>
          )}
        </Grid>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
    contentfulAbout {
      image {
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
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

export default AboutPage;
