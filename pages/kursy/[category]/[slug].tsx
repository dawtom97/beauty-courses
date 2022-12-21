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
    query Course($slug: ID!) {
      courses(where: { id: $slug }) {
        title
        price
        duration
        level
        isRemote
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
          categoryImage {
            id
            url
          }
        }
      }
    }
  `;
  const variables = {
    slug,
  };

  const { courses } = await cmsConnect(query, variables);

  return {
    props: {
      course: courses,
    },
  };
};

const CourseDetailsPage = ({ course }: any) => {

  return (
    <CourseDetailsTemplate>
      <CourseDetailsBanner {...course[0]}/>
      <CourseDetailsContent {...course[0]} />
    </CourseDetailsTemplate>
  );
};

export default CourseDetailsPage;
