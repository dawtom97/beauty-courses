import type { InferGetStaticPropsType } from 'next';
import { gql } from 'graphql-request';
import { cmsConnect } from '../src/utils/cmsConnect';
import Homepage from '../src/components/templates/Homepage/Homepage';
import SearchPanel from '../src/components/SearchPanel/SearchPanel';
import CourseCard from '../src/components/common/CourseCard/CourseCard';
import Featured from '../src/components/Featured/Featured';

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
        level
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

  const { courses } = await cmsConnect(query);

  return {
    props: {
      courses: courses,
    },
  };
};

const Home = ({ courses }: InferGetStaticPropsType<typeof getServerSideProps> | any) => {
  console.log(courses);
  return (
    <div className='app'>
      <Homepage>
        <SearchPanel />
        <Featured courses={courses} />
      </Homepage>
    </div>
  );
};

export default Home;
