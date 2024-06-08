import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from '../common/Button/Button';
import * as Styled from './styles';
import Select from 'react-select';

const initialFilters = {
  category: 'all',
  isRefunded: 'all',
  voivodeship: 'All',
  isRemote: 'all',
  level: 'all',
  employment: 'all',
};

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    borderColor: '#fafafa',
    minHeight: '35px',
    padding: '0 !important',
    fontWeight: '700',
    height: '35px',
    fontSize: '16px',
    boxShadow: 'none',
    '&:hover': {
      borderColor: 'none',
      backgroundColor: '#fafafa',
      cursor:'pointer'
    },
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isSelected ? 'white' : 'black',
    backgroundColor: state.isSelected ? '#8f7bf0' : 'white',
    fontSize: 16,
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: '#8f7bf0',
  }),
  clearIndicator: (provided: any) => ({
    ...provided,
    color: 'red',
  }),
  menu: (provided: any) => ({
    ...provided,
    // you can add additional styling here
    '&:hover': {
      borderColor: 'none',
      backgroundCOlor: '#fafafa',
    },
  }),
};

const SearchPanel = ({ section, categories }: any) => {
  const [filters, setFilters] = useState(initialFilters);

  const handleChange = (name: any) => (value: any) => {
    console.log(name, value);
    setFilters({
      ...filters,
      [name]: value.value,
    });
  };

  // Tworzenie opcji dla selectów
  const voivodeships = [
    'Śląskie',
    'Małopolskie',
    'Podkarpackie',
    'Opolskie',
    'Dolnośląskie',
    'Świętokrzyskie',
    'Łódzkie',
    'Lubuskie',
    'Lubelskie',
    'Wielkopolskie',
    'Mazowieckie',
    'Kujawsko-Pomorskie',
    'Warmińsko-Mazurskie',
    'Pomorskie',
    'Podlaskie',
    'Zachodniopomorskie',
  ].map((voivodeship) => ({ value: voivodeship, label: voivodeship }));

  return (
    <Styled.Wrapper>
      <Styled.Content id='Search'>
        <span>{section?.badge}</span>
        <h2>{section?.title}</h2>
        <p>{section?.desc}</p>

        <Styled.SearchForm>
          <Styled.SelectField>
            <label>Kategoria</label>
            <Select
              styles={customStyles}
              options={categories.map((cat: any) => ({
                value: cat.categoryName,
                label: cat.categoryName,
              }))}
              onChange={handleChange('category')}
              placeholder='Wszystkie'
              isClearable
            />
          </Styled.SelectField>

          <Styled.SelectField>
            <label>Dofinansowanie</label>
            <Select
              styles={customStyles}
              options={[
                { value: 'true', label: 'Tak' },
                { value: 'false', label: 'Nie' },
                { value: 'all', label: 'wszystkie' },
              ]}
              onChange={handleChange('isRefunded')}
              placeholder='Wszystkie'
              isClearable
            />
          </Styled.SelectField>

          <Styled.SelectField>
            <label>Województwo</label>
            <Select
              styles={customStyles}
              options={voivodeships}
              onChange={handleChange('voivodeship')}
              placeholder='Wszystkie'
              isClearable
            />
          </Styled.SelectField>

          <Styled.SelectField>
            <label>Tryb</label>
            <Select
              styles={customStyles}
              options={[
                { value: 'true', label: 'Zdalne' },
                { value: 'false', label: 'Stacjonarne' },
                { value: 'all', label: 'wszystkie' },
              ]}
              onChange={handleChange('isRemote')}
              placeholder='Wszystkie'
              isClearable
            />
          </Styled.SelectField>

          <Styled.SelectField>
            <label>Poziom</label>
            <Select
             styles={customStyles}
              options={[
                { value: 'Podstawowy', label: 'Podstawowy' },
                { value: 'Średniozaawansowany', label: 'Średniozaawansowany' },
                { value: 'Zaawansowany', label: 'Zaawansowany' },
                { value: 'all', label: 'wszystkie' },
              ]}
              onChange={handleChange('level')}
              placeholder='Wszystkie'
              isClearable
            />
          </Styled.SelectField>

          <Styled.SelectField>
            <label>Status na rynku pracy</label>
            <Select
             styles={customStyles}
              options={[
                { value: 'zatrudniona', label: 'osoba zatrudniona' },
                { value: 'bezrobotna', label: 'osoba bezrobotna' },
                { value: 'all', label: 'wszystkie' },
              ]}
              onChange={handleChange('employment')}
              placeholder='Wszystkie'
              isClearable
            />
          </Styled.SelectField>
        </Styled.SearchForm>

        <Link
          href={{
            pathname: '/wyniki',
            query: filters,
          }}
        >
          <Button>Wyszukaj</Button>
        </Link>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default SearchPanel;
