import { gql, GraphQLClient } from 'graphql-request';
import React from 'react';
import CourseDetailsBanner from '../../../src/components/CourseDetails/CourseDetailsBanner/CourseDetailsBanner';
import CourseDetailsContent from '../../../src/components/CourseDetails/CourseDetailsContent/CourseDetailsContent';
import CourseDetailsTemplate from '../../../src/components/templates/CourseDetailsTemplate/CourseDetailsTemplate';
import { cmsConnect } from '../../../src/utils/cmsConnect';

export const getServerSideProps = async (context: any) => {
  const { params } = context;
  const { slug } = params;

  const query = gql`
    query Course($slug: String!) {
      courses(where: { slug: $slug }) {
        title
        price
        duration
        ageGroup
        level
        isRemote
        employment
        slug
        vacancies
        dropdowns {
          html
        }
        voivodeship
        city
        thumbnail {
          url
        }
        description {
          html
        }
        shortDesc
        isRefunded
        categories {
          id
          categoryName
          slug
          categoryImage {
            id
            url
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
  const variables = {
    slug,
  };

  const { courses, minorDatas } = await cmsConnect(query, variables);

  return {
    props: {
      course: courses,
      minor:minorDatas
    },
  };
};

const CourseDetailsPage = ({ course,minor }: any) => {

  return (
    <CourseDetailsTemplate contact={minor[0]}>
      <CourseDetailsBanner {...course[0]}/>
      <CourseDetailsContent {...course[0]} />
    </CourseDetailsTemplate>
  );
};

export default CourseDetailsPage;
