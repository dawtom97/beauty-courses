import React, { useEffect, useState } from 'react';
import CourseCard from '../common/CourseCard/CourseCard';
import * as Styled from './styles';
import arrow from '../../assets/course-bg.png';
import notFound from '../../assets/not_found.png';
import Image from 'next/image';
import { Button } from '../common/Button/Button';
import Link from 'next/link';
import Breadcrumbs from '../common/Breadcrumbs/Breadcrumbs';
import ReactPaginate from 'react-paginate';

const Results = ({ itemsPerPage, courses }: any) => {
  const [currentItems, setCurrentItems] = useState<any>(courses);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(courses.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(courses.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, courses]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % courses.length;
    setItemOffset(newOffset);
  };

  const handleCoursesAmount = () => {
    if (courses.length < 1 || courses.length > 12) {
      return 'kursów';
    } else if (courses.length == 1) {
      return 'kurs';
    } else {
      return 'kursy';
    }
  };

  return (
    <Styled.Wrapper id='Featured' arrow={arrow.src}>
      <Styled.Content>
        <Breadcrumbs />
        {currentItems.length ? (
          <>
            <span>Całkiem nieźle</span>

            <h2>
              Znaleziono {courses.length} {handleCoursesAmount()} o wskazanych parametrach
            </h2>
            <Styled.Cards>
              {currentItems.map((course: any) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </Styled.Cards>
          </>
        ) : (
          <>
            <Styled.NotFound>
              <span>Bez paniki</span>
              <h2>Wkrótce na pewno pojawi się kurs, którego szukasz</h2>
              <Image src={notFound.src} width={400} height={200} objectFit={'contain'} />
              <Link href='/#Search'>
                <Button>Szukaj dalej</Button>
              </Link>
            </Styled.NotFound>
          </>
        )}

        <ReactPaginate
          breakLabel='...'
          nextLabel='Następna'
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel='Wróć'
          renderOnZeroPageCount={null as any}
        />
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default Results;
