import type { InferGetStaticPropsType } from 'next';
import { gql } from 'graphql-request';
import { cmsConnect } from '../src/utils/cmsConnect';
import Homepage from '../src/components/templates/Homepage/Homepage';
import Banner from '../src/components/Banner/Banner';
import Categories from '../src/components/Categories/Categories';
import SearchPanel from '../src/components/SearchPanel/SearchPanel';

export const getStaticProps = async () => {
  const query = gql`
    query AllCategories {
      categories {
        categoryDesc
        categoryLongDesc
        categoryName
        courses {
          id
        }
        createdAt
        id
        publishedAt
        updatedAt
        slug
        boxColor {
          hex
        }
      }
    }
  `;

  const { categories } = await cmsConnect(query);

  return {
    props: {
      categories,
    },
  };
};

const Home = ({ categories }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(categories);
  return (
    <div className='app'>
      <Homepage>
        <Banner />
        <Categories categories={categories} />
        <SearchPanel />
      </Homepage>
    </div>
  );
};

export default Home;
