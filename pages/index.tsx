import type { InferGetStaticPropsType } from 'next';
import { gql } from 'graphql-request';
import { cmsConnect } from '../src/utils/cmsConnect';
import Homepage from '../src/components/templates/Homepage/Homepage';
import SearchPanel from '../src/components/SearchPanel/SearchPanel';
import CourseCard from '../src/components/common/CourseCard/CourseCard';
import Featured from '../src/components/Featured/Featured';
import Categories from '../src/components/Categories/Categories';
import About from '../src/components/About/About';

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
        badge
      }
    }
  `;

  const { courses, categories, sectionsDesc } = await cmsConnect(query);

  return {
    props: {
      courses: courses,
      categories: categories,
      sections: sectionsDesc
    },
  };
};

const Home = ({
  courses,
  categories,
  sections
}: InferGetStaticPropsType<typeof getServerSideProps> | any) => {
  console.log(courses);
  return (
    <div className='app'>
      <Homepage>
        <SearchPanel section={sections[3]} categories={categories}/>
        <Featured section={sections[0]} courses={courses} />
        <Categories section={sections[1]} categories={categories} />
        <About section={sections[2]} />
      </Homepage>
    </div>
  );
};

export default Home;
