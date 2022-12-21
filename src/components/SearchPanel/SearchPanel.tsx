import Link from 'next/link';
import React,{useState} from 'react';
import { Button } from '../common/Button/Button';
import * as Styled from './styles';


const initialFilters = {
   category:'all',
   isRefunded:'all',
   voivodeship:'All',
   isRemote:'all'
}

const SearchPanel = ({ section, categories }: any) => {

  const [filters, setFilters] = useState<any>(initialFilters)

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleChange = (e:any) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Styled.Wrapper>
      <Styled.Content>
        <span>{section?.badge}</span>

        <h2>{section?.title}</h2>

        <p>{section?.desc}</p>

        <Styled.SearchForm onSubmit={handleSubmit}>
          <Styled.SelectField>
            <label htmlFor=''>Kategoria</label>
            <select onChange={handleChange} name='category'>
              <option value=''>wszystkie</option>
              {categories?.map((category: any) => (
                <option value={category.categoryName} key={category.categoryName}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          </Styled.SelectField>

          <Styled.SelectField>
            <label htmlFor=''>Dofinansowanie</label>
            <select onChange={handleChange} name='isRefunded'>
              <option selected value='all'>wszystkie</option>
              <option value={1}>Tak</option>
              <option value={0}>Nie</option>
            </select>
          </Styled.SelectField>
          <Styled.SelectField>
            <label htmlFor=''>Województwo</label>
            <select onChange={handleChange} name='voivodeship'>
              <option value='All'>wszystkie</option>
              <option value='Slaskie'>Śląskie</option>
              <option value='Malopolskie'>Małopolskie</option>
              <option value='Podkarpackie'>Podkarpackie</option>
              <option value='Opolskie'>Opolskie</option>
              <option value='Dolnoslaskie'>Dolnośląskie</option>
              <option value='Swietokrzyskie'>Świętokrzyskie</option>
              <option value='Lodzkie'>Łódzkie</option>
              <option value='Lubuskie'>Lubuskie</option>
              <option value='Lubelskie'>Lubelskie</option>
              <option value='Wielkopolskie'>Wielkopolskie</option>
              <option value='Mazowieckie'>Mazowieckie</option>
              <option value='KujawskoPomorskie'>Kujawsko-Pomorskie</option>
              <option value='WarminskoMazurskie'>Warmińsko-Mazurskie</option>
              <option value='Pomorskie'>Pomorskie</option>
              <option value='Podlaskie'>Podlaskie</option>
              <option value='Zachodniopomorskie'>Zachodniopomorskie</option>
            </select>
          </Styled.SelectField>
          <Styled.SelectField>
            <label htmlFor=''>Tryb</label>
            <select onChange={handleChange} name='isRemote'>
              <option selected value='all'>wszystkie</option>
              <option value={1}>Zdalne</option>
              <option value={0}>Stacjonarne</option>
            </select>
          </Styled.SelectField>

          
          <Link
          href={{
            pathname: '/wyniki',
            query: { 
              category: filters.category,
              voivodeship: filters.voivodeship,
              isRefunded:filters.isRefunded,
              isRemote: filters.isRemote 
            },
          }}
        >
          Wyszukaj
        </Link>

        </Styled.SearchForm>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default SearchPanel;
