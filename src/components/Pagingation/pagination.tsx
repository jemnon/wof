import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 3rem 0;
  margin: 0 -0.5rem;
`;

interface PaginationButtonsProps {
  isCurrentPage?: boolean;
}

const PaginationButton = styled.button<PaginationButtonsProps>`
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-left: 0.25rem;
  margin-right: 0.25rem;

  font-weight: bold;

  background-color: ${({ isCurrentPage, theme }): string =>
    isCurrentPage ? theme.colors.orange : theme.colors.nearWhite};
  color: ${({ isCurrentPage, theme }): string =>
    isCurrentPage ? theme.colors.white : theme.colors.nearBlack};

  cursor: pointer;
  border: none;
  outline: none;
  transition: ${({ theme }): string => theme.transition};
`;

interface PaginationProps {
  currentPage: number;
  onClick: (page: number) => void;
  pages: number;
  pageSize: number;
}

const getPages = (
  currentPage: number,
  pages: number,
  pageSize: number,
): number[] => {
  // remaining pages
  const remaining = pages - currentPage;
  // range of pages to be shown
  const diff = Math.floor(pageSize / 2);
  // pages array to be returned
  const pagesList: number[] = [];
  // generate pages from total
  Array.from(Array(pages), (_, idx): number => {
    return idx + 1;
  }).forEach(page => {
    console.log('remaining: ', remaining);
    console.log('diff: ', diff);
    console.log('page: ', page);
    if (page >= currentPage - diff && page < currentPage) {
      // check if page is within the lower range ( -diff ) of the current page
      pagesList.push(page);
    } else if (page === currentPage) {
      // check if page is current page
      pagesList.push(page);
    } else if (page <= currentPage + diff && page > currentPage) {
      // check if page is within the upper range ( +diff ) of the current page
      pagesList.push(page);
    }
  });
  return pagesList;
};

const Pagination: FC<PaginationProps> = ({
  currentPage,
  onClick,
  pages,
  pageSize,
}) => {
  const [currentPageIdx, setCurrentPageIdx] = useState<number>(currentPage);
  const [currentPages, setCurrentPages] = useState<number[] | null>(null);
  const handlePrevClick = (): void => {
    const prevPage = currentPageIdx - 1;
    setCurrentPageIdx(prevPage);
  };
  const handleNextClick = (): void => {
    const nextPage = currentPageIdx + 1;
    setCurrentPageIdx(nextPage);
  };
  useEffect(() => {
    if (!currentPages) {
      const list = getPages(currentPage, pages, pageSize);
      setCurrentPages(list);
    }
  }, [currentPages, pages, setCurrentPages]);
  useEffect(() => {
    if (currentPage !== currentPageIdx) {
      console.log('page change');
    }
    onClick(currentPageIdx);
  }, [currentPages, currentPageIdx, setCurrentPages]);
  return (
    <>
      {currentPages && (
        <PaginationContainer>
          {currentPageIdx > 1 && (
            <PaginationButton onClick={handlePrevClick}>Prev</PaginationButton>
          )}
          {currentPages.map(page => {
            return (
              <PaginationButton
                key={page}
                isCurrentPage={currentPageIdx === page}
                onClick={(): void => {
                  setCurrentPageIdx(page);
                }}
              >
                {page}
              </PaginationButton>
            );
          })}
          {currentPageIdx !== pages && (
            <PaginationButton onClick={handleNextClick}>Next</PaginationButton>
          )}
        </PaginationContainer>
      )}
    </>
  );
};

export default Pagination;