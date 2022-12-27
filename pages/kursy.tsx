import { gql } from 'graphql-request';
import { useRouter } from 'next/router';
import React from 'react';
import BannerAllCourses from '../src/components/BannerAllCourses/BannerAllCourses';
import BannerCategory from '../src/components/BannerCategory/BannerCategory';
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
          categoryDesc
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

  const { courses,minorDatas } = await cmsConnect(query);

  return {
    props: {
      courses: courses,
      minor:minorDatas
    },
  };
};

const CoursesPage = ({ courses,minor }: any) => {

  return <Homepage contact={minor[0]}>
    <BannerAllCourses/>
    <Results isAllCourses itemsPerPage={8} courses={courses}/>
  </Homepage>;
};

export default CoursesPage;