import { gql } from 'graphql-request';
import { useRouter } from 'next/router';
import React from 'react';
import { cmsConnect } from '../src/utils/cmsConnect';

export const getServerSideProps = async (context: any) => {
  const { query: queries } = context;

  const remoteOrNot = queries.isRemote == 'all' ? null : Boolean(Number(queries.isRemote));
  const refundedOrNot = queries.isRefunded == 'all' ? null : Boolean(Number(queries.isRefunded));
  const categoryName = queries.category || null;
  const voivodeshipName = queries.voivodeship || null;

  console.log(queries, remoteOrNot, refundedOrNot);

  const query = gql`
    query Courses (
      $refunded: Boolean = ${refundedOrNot}, 
      $remote: Boolean = ${remoteOrNot}, 
      $category: String = "${categoryName}",
      $voivodeship: Voivodeship = ${voivodeshipName}
      ) {
      courses(
        where: {
          AND: [
            { OR: [ {isRefunded: $refunded}, {isRefunded_not: $refunded}] }
            { OR: [ {isRemote: $remote},{isRemote_not: $remote}] }
            { voivodeship: $voivodeship }
            { categories_every: { categoryName: $category } }
          ]
        }
      ) {
        id
        title
        price
        duration
        isRemote
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
          categoryName
          categoryImage {
            id
          }
        }
      }
    }
  `;

  const { courses } = await cmsConnect(query);

  return {
    props: {
      courses: courses,
    },
  };
};

const ResultsPage = ({ courses }: any) => {
  console.log(courses);

  return <div>ResultsPage</div>;
};

export default ResultsPage;
