import { gql } from 'graphql-request';
import { useRouter } from 'next/router';
import React,{useState, useEffect} from 'react';
import BannerResults from '../src/components/BannerResults/BannerResults';
import Results from '../src/components/Results/Results';
import Homepage from '../src/components/templates/Homepage/Homepage';
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

  const { courses,minorDatas } = await cmsConnect(query);

  return {
    props: {
      courses: courses,
      minor:minorDatas
    },
  };
};

const ResultsPage = ({ courses,minor }: any) => {
  const {query} = useRouter();
  const [filtered, setFiltered] = useState<any>([]);

  useEffect(()=>{
    handleFilter();
  },[query])

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

  return <Homepage contact={minor[0]}>
    <BannerResults searchSuccess={filtered.length > 0 ? true : false}/>
    <Results itemsPerPage={8} courses={filtered}/>
  </Homepage>;
};

export default ResultsPage;
