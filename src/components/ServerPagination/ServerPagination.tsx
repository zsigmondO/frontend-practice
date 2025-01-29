import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  TextField,
  Tooltip,
} from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { grey } from '@mui/material/colors';

import { Layout } from '../Layout/Layout';
import MediaCard from './MediaCard';
import useCharactersFilter from '../../hooks/charactersQuery';
import SearchNotFound from '../NotFound/SearchNotFound';

const ColorButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: '#F54866',
  '&:hover': {
    backgroundColor: grey[900],
  },
}));

function ServerPagination() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { characters, totalPages, isLoading, statusCode } =
    useCharactersFilter();

  const [sortOrder, setSortOrder] = useState<string>('');
  const [name, setName] = useState(searchParams.get('name') || '');
  const [status, setStatus] = useState(searchParams.get('status') || '');
  const [species, setSpecies] = useState(searchParams.get('species') || '');
  const [type, setType] = useState(searchParams.get('type') || '');
  const [gender, setGender] = useState(searchParams.get('gender') || '');
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get('page')) || 1,
  );
  const [hideNextButton, setHideNextButton] = useState(currentPage === 1);
  const [hidePrevButton, setHidePrevButton] = useState(
    currentPage === totalPages,
  );

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set('page', currentPage.toString());

    if (name && name.length >= 3) params.set('name', name.toLowerCase());
    if (species && species.length >= 3)
      params.set('species', species.toLowerCase());
    if (type && type.length >= 3) params.set('type', type.toLowerCase());
    if (status) params.set('status', status.toLowerCase());
    if (gender) params.set('gender', gender.toLowerCase());

    setTimeout(() => {
      navigate(`/pagination/rick-and-morty?${params.toString()}`);
    }, 500);
  }, [
    name,
    status,
    species,
    type,
    gender,
    currentPage,
    navigate,
    searchParams,
  ]);

  useEffect(() => {
    handleNameSort(sortOrder);
  }, [sortOrder]);

  const handleNameSort = (order: string) => {
    if (order === 'Ascending') {
      characters.sort((a, b) => a.name.localeCompare(b.name));
    } else if (order === 'Descending') {
      characters.sort((a, b) => b.name.localeCompare(a.name));
    }
  };

  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    if (page === 1) {
      setHidePrevButton(true);
      setHideNextButton(false);
    } else if (page === totalPages) {
      setHidePrevButton(false);
      setHideNextButton(true);
    } else {
      setHidePrevButton(false);
      setHideNextButton(false);
    }
  };

  const onClearFilters = () => {
    [...searchParams.keys()].forEach((key) => {
      searchParams.delete(key);
    });
    setName('');
    setSpecies('');
    setType('');
    setStatus('');
    setGender('');
    setCurrentPage(1);
  };

  const handleNameChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    searchParams.delete('name');
    setCurrentPage(1);
    setName(event.target.value);
  };

  const handleSpeciesChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    searchParams.delete('species');
    setCurrentPage(1);
    setSpecies(event.target.value);
  };

  const handleTypeChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    searchParams.delete('type');
    setCurrentPage(1);
    setType(event.target.value);
  };

  const handleStatusChange = (event: SelectChangeEvent) => {
    searchParams.delete('status');
    setCurrentPage(1);
    setStatus(event.target.value);
  };
  const handleGenderChange = (event: SelectChangeEvent) => {
    searchParams.delete('gender');
    setCurrentPage(1);
    setGender(event.target.value);
  };

  return (
    <>
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex flex-col space-y-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-center sm:space-y-0 sm:space-x-4">
              <div className="flex items-center justify-center space-x-4 py-4">
                <Tooltip
                  title="To search type at least 3 characters!"
                  arrow
                  placement="top"
                >
                  <span>
                    <HelpIcon className="text-app-primary-color-tailwind hover:text-gray-900" />
                  </span>
                </Tooltip>
                <ColorButton
                  variant="contained"
                  className="text-gray-500 hover:bg-gray-900"
                  size={'small'}
                  onClick={onClearFilters}
                >
                  Clear Filters
                </ColorButton>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:pr-4 md:pr-4">
                <TextField
                  error={name.length < 3 && name.length !== 0}
                  id="outlined-basic"
                  label="Search by Name"
                  variant="outlined"
                  value={name}
                  onChange={handleNameChange}
                  className="w-full"
                />
                <TextField
                  error={species.length < 3 && species.length !== 0}
                  id="outlined-basic"
                  label="Search by Species"
                  variant="outlined"
                  value={species}
                  onChange={handleSpeciesChange}
                  className="w-full"
                />
                <TextField
                  error={type.length < 3 && type.length !== 0}
                  id="outlined-basic"
                  label="Search by Type"
                  variant="outlined"
                  value={type}
                  onChange={handleTypeChange}
                  className="w-full"
                />
                <FormControl
                  className="w-full"
                  sx={{
                    minWidth: 'full',
                  }}
                >
                  <InputLabel id="status-select-label">
                    Filter by Status
                  </InputLabel>
                  <Select
                    labelId="status-select-label"
                    id="status-select"
                    label="Filter by Status"
                    onChange={handleStatusChange}
                    value={status || ''}
                    className="w-full"
                  >
                    <MenuItem value={'alive'}>alive</MenuItem>
                    <MenuItem value={'dead'}>dead</MenuItem>
                    <MenuItem value={'unknown'}>unknown</MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  className="w-full"
                  sx={{
                    minWidth: 'full',
                  }}
                >
                  <InputLabel id="demo-simple-select-label">
                    Filter by Gender
                  </InputLabel>
                  <Select
                    labelId="gender-select-label"
                    id="gender-select"
                    label="Filter by Gender"
                    onChange={handleGenderChange}
                    value={gender || ''}
                    className="w-full"
                  >
                    <MenuItem value={'Female'}>Female</MenuItem>
                    <MenuItem value={'Male'}>Male</MenuItem>
                    <MenuItem value={'Genderless'}>Genderless</MenuItem>
                    <MenuItem value={'Unknown'}>Unknown</MenuItem>
                  </Select>
                </FormControl>
                <Tooltip
                  title="The API doesn't support server side sorting. You can only sort the results you get, so don't be confused!"
                  arrow
                  placement="top"
                >
                  <FormControl
                    className="w-full"
                    sx={{
                      minWidth: 'full',
                    }}
                    error
                  >
                    <InputLabel id="demo-simple-select-label">
                      Sort by name
                    </InputLabel>
                    <Select
                      labelId="sort-select-label"
                      id="sort-select"
                      label="Sort by name"
                      onChange={(e) => setSortOrder(e.target.value)}
                      value={sortOrder}
                      className="w-full"
                    >
                      <MenuItem value={'Ascending'}>Ascending</MenuItem>
                      <MenuItem value={'Descending'}>Descending</MenuItem>
                    </Select>
                  </FormControl>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center max-w-7xl pb-2 mx-auto sm:px-6 lg:px-8 my-4">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            hideNextButton={hideNextButton}
            hidePrevButton={hidePrevButton}
            showFirstButton={true}
            showLastButton={true}
          />
        </div>
        {statusCode === 404 ? (
          <SearchNotFound />
        ) : isLoading ? (
          <div className="min-h-screen flex flex-col justify-center items-center px-6 py-12">
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-3min-h-screen">
              <div className="grid grow grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {characters.map((character, index) => (
                  <MediaCard
                    key={index}
                    id={character.id}
                    image={character.image}
                    name={character.name}
                    status={character.status}
                    gender={character.gender}
                    species={character.species}
                    origin={{
                      name: character.origin.name,
                      url: character.origin.url,
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-center max-w-7xl mx-auto pt-4 sm:px-6 lg:px-8 my-4">
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                hideNextButton={hideNextButton}
                hidePrevButton={hidePrevButton}
                showFirstButton={true}
                showLastButton={true}
              />
            </div>
          </>
        )}
      </Layout>
    </>
  );
}

export default ServerPagination;
