import { gql } from 'graphql-request';
import { useRouter } from 'next/router';
import React,{useState, useEffect} from 'react';
import BannerCategory from '../../src/components/BannerCategory/BannerCategory';
import Results from '../../src/components/Results/Results';
import Homepage from '../../src/components/templates/Homepage/Homepage';
import { cmsConnect } from '../../src/utils/cmsConnect';

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

const CategoryPage = ({ courses,minor }: any) => {
  const {query} = useRouter();
  const [filtered, setFiltered] = useState<any>([]);

  console.log(query)

  useEffect(()=>{
    handleFilter();
  },[query])

  const handleFilter = () => {
     const data = courses.filter((course:any) => {

        if((course.categories[0].slug === query.category) 
        ) {
          return true
        }
        return false
     })
     setFiltered(data)
    
  }

  return <Homepage contact={minor[0]}>
    <BannerCategory category={courses.filter((item:any) => item.categories[0].slug === query.category)} searchSuccess={filtered.length > 0 ? true : false}/>
    <Results isCategory itemsPerPage={8} courses={filtered}/>
  </Homepage>;
};

export default CategoryPage;