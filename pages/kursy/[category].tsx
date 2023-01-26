import { gql } from 'graphql-request';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
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
      categories {
          id
          categoryName
          categoryDesc
          categoryLongDesc
          slug
      }
    }
    
  `;

  const { courses, minorDatas,categories } = await cmsConnect(query);

  return {
    props: {
      courses: courses,
      minor: minorDatas,
      categories:categories
    },
  };
};

const CategoryPage = ({ courses, minor,categories }: any) => {
  const { query } = useRouter();
  const [filtered, setFiltered] = useState<any>([]);
  const [category, setCategory] = useState<any>([])

  useEffect(() => {
    handleFilter();
    handleCategory()
  }, [query]);

  const handleFilter = () => {
    const data = courses.filter((course: any) => {
      if (course.categories[0].slug === query.category) {
        return true;
      }
      return false;
    });
    setFiltered(data);
  };

  const handleCategory = () =>{
    const data = categories.filter((item: any) => item.slug === query.category);
    setCategory(data);
  }

  console.log(category)


  return (
    <Homepage contact={minor[0]}>
      <Head>
        <title>{category[0]?.categoryName}</title>
      </Head>
      <BannerCategory
        category={category[0]}
        searchSuccess={filtered.length > 0 ? true : false}
      />

        <>
          <Results isCategory itemsPerPage={8} courses={filtered} />
        </>
    
    </Homepage>
  );
};

export default CategoryPage;
