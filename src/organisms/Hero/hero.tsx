import React, { forwardRef, ReactNode } from 'react';
import styled from 'styled-components';
import DownButton from '../../atoms/DownButton';
import HeroContent from '../../molecules/HeroContent';

interface HeroProps {
  title?: string;
  onDownScroll?: () => void;
  onView?: () => void;
  image?: ReactNode;
}

const HeroContainer = styled.section`
  position: relative;
  background-color: ${({ theme }): string => theme.colors.nearBlack};
  overflow: hidden;
  height: 100vh;
`;

const HeroImgWrapper = styled.div`
  position: relative;
  opacity: 0.4;
  height: 100%;
  z-index: ${({ theme }): string => theme.zIndex.z0};
  > * {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Hero = forwardRef<HTMLDivElement, HeroProps>(
  ({ image, title, onDownScroll, onView }, ref) => {
    return (
      <HeroContainer ref={ref}>
        {title && <HeroContent isCentered title={title} onClick={onView} />}
        {image && <HeroImgWrapper>{image}</HeroImgWrapper>}
        <DownButton isCentered onClick={onDownScroll} />
      </HeroContainer>
    );
  },
);

export default Hero;
