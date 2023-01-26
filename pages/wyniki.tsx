import { gql } from 'graphql-request';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import BannerResults from '../src/components/BannerResults/BannerResults';
import Results from '../src/components/Results/Results';
import Homepage from '../src/components/templates/Homepage/Homepage';
import { cmsConnect } from '../src/utils/cmsConnect';

export const getServerSideProps = async () => {
  const query = gql`
    query Courses () {
       courses {
        id
        title
        price
        ageGroup
        duration
        employment
        isRemote
        city
        level
        slug
        vacancies
        voivodeship
        description {
          html
        }
        thumbnail {
          id
          url
        }
        shortDesc
        isRefunded
        categories {
          id
          slug
          categoryName
          categoryImage {
            id
          }
        }
      }
      minorDatas {
        id
        email
        phone
        address
      }
    }
    
  `;

  const { courses, minorDatas } = await cmsConnect(query);

  return {
    props: {
      courses: courses,
      minor: minorDatas,
    },
  };
};

const ResultsPage = ({ courses, minor }: any) => {
  const { query } = useRouter();
  const [filtered, setFiltered] = useState<any>([]);

  useEffect(() => {
    handleFilter();
  }, [query]);

  const handleFilter = () => {
    const data = courses.filter((course: any) => {
      const isTrueRefunded = query.isRefunded === 'true';
      const isTrueRemote = query.isRemote === 'true';

      if (
        (course.categories[0].categoryName === query.category || query.category === 'all') &&
        (course.voivodeship === query.voivodeship || query.voivodeship === 'All') &&
        (course.isRefunded === isTrueRefunded || query.isRefunded === 'all') &&
        (course.isRemote === isTrueRemote || query.isRemote === 'all') &&
        (course.level === query.level || query.level === 'all') &&
        (course.employment === query.employment || query.employment === 'all')
      ) {
        return true;
      }
      return false;
    });
    setFiltered(data);
  };

  return (
    <Homepage contact={minor[0]}>
      <Head>
        <title>Znalezione kursy</title>
      </Head>

      <BannerResults searchSuccess={filtered.length > 0 ? true : false} />
      <Results itemsPerPage={8} courses={filtered} />
    </Homepage>
  );
};

export default ResultsPage;
