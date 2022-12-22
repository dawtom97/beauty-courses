import type { InferGetStaticPropsType } from 'next';
import { gql } from 'graphql-request';
import { cmsConnect } from '../src/utils/cmsConnect';
import Homepage from '../src/components/templates/Homepage/Homepage';
import SearchPanel from '../src/components/SearchPanel/SearchPanel';
import Featured from '../src/components/Featured/Featured';
import Categories from '../src/components/Categories/Categories';
import About from '../src/components/About/About';
import Banner from '../src/components/Banner/Banner';

// export const getStaticProps = async () => {
//   const query = gql`
//     query AllCategories {
//       categories {
//         categoryDesc
//         categoryLongDesc
//         categoryName
//         courses {
//           id
//         }
//         createdAt
//         id
//         publishedAt
//         updatedAt
//         slug
//         boxColor {
//           hex
//         }
//       }
//     }
//   `;

//   const { categories } = await cmsConnect(query);

//   return {
//     props: {
//       categories,
//     },
//   };
// };

export const getServerSideProps = async (context: any) => {
  const query = gql`
    query Course {
      courses(orderBy: createdAt_DESC, first: 4) {
        title
        id
        price
        duration
        isRemote
        level
        vacancies
        employment
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
      categories {
        categoryName
        boxColor {
          hex
        }
        courses {
          id
          title
        }
      }
      sectionsDesc {
        id
        title
        desc
        desc2
        badge
      }
      minorDatas {
        id
        email
        phone
        address
        trainers
        students
        rating
        ratingAmount
        expYears
        coursesAmount
      }
    }
  `;

  const { courses, categories, sectionsDesc,minorDatas } = await cmsConnect(query);

  return {
    props: {
      courses: courses,
      categories: categories,
      sections: sectionsDesc,
      minor: minorDatas
    },
  };
};

const Home = ({
  courses,
  categories,
  sections,
  minor
}: InferGetStaticPropsType<typeof getServerSideProps> | any) => {
  return (
    <div className='app'>
      <Homepage contact={minor[0]}>
        <Banner section={sections[4]} info={minor[0]} />
        <SearchPanel section={sections[3]} categories={categories} />
        <Featured section={sections[0]} courses={courses} />
        <Categories section={sections[1]} categories={categories} />
        <About section={sections[2]} />
      </Homepage>
    </div>
  );
};

export default Home;
