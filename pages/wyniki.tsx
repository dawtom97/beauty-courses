import { gql } from 'graphql-request';
import { useRouter } from 'next/router';
import React,{useState, useEffect} from 'react';
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
      # $refunded: Boolean = ${refundedOrNot}, 
      # $remote: Boolean = ${remoteOrNot}, 
      # $category: String = "${categoryName}",
      # $voivodeship: Voivodeship = ${voivodeshipName}
      ) {
       courses(
      #   where: {
      #     AND: [
      #       { OR: [ {isRefunded: $refunded}, {isRefunded_not: $refunded}] }
      #       { OR: [ {isRemote: $remote},{isRemote_not: $remote}] }
      #       { voivodeship: $voivodeship }
      #       { categories_every: { categoryName: $category } }
      #     ]
      #   }
       ) {
        id
        title
        price
        duration
        employment
        isRemote
        level
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
  const {query} = useRouter();
  const [filtered, setFiltered] = useState<any>([]);

  useEffect(()=>{
    handleFilter();
  },[query])

  console.log(query)

  const handleFilter = () => {
     const data = courses.filter((course:any) => {

       const isTrueRefunded = (query.isRefunded === 'true');
       const isTrueRemote = (query.isRemote === 'true');

        if((course.categories[0].categoryName === query.category || query.category === 'all') &&
           (course.voivodeship === query.voivodeship || query.voivodeship === 'All') &&
           (course.isRefunded === isTrueRefunded || query.isRefunded === 'all') &&
           (course.isRemote === isTrueRemote || query.isRemote === 'all') &&
           (course.level === query.level || query.level === 'all') &&
           (course.employment === query.employment || query.employment === 'all')
        ) {
          return true
        }
        return false
     })
     setFiltered(data)
    
  }
  console.log(filtered)

  return <div>{filtered?.map((item:any) => <p key={item.title}>{item.title}</p>)}</div>;
};

export default ResultsPage;
