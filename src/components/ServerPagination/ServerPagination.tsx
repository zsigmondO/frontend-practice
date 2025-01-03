import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Layout } from '../Layout/Layout';
import MediaCard from './MediaCard';
import useCharactersFilter from '../../hooks/charactersQuery';
import SearchNotFound from '../NotFound/SearchNotFound';

function ServerPagination() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { characters, totalPages, isLoading, statusCode } =
    useCharactersFilter();

  const [sortOrder, setSortOrder] = useState<string>('');
  const [name, setName] = useState(searchParams.get('name') ?? '');
  const [status, setStatus] = useState(searchParams.get('status') ?? '');
  const [species, setSpecies] = useState(searchParams.get('species') ?? '');
  const [type, setType] = useState(searchParams.get('type') ?? '');
  const [gender, setGender] = useState(searchParams.get('gender') ?? '');
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get('page')) ?? 1,
  );
  const [hideNextButton, setHideNextButton] = useState(currentPage === 1);
  const [hidePrevButton, setHidePrevButton] = useState(
    currentPage === totalPages,
  );

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set('page', currentPage.toString());

    if (name) params.set('name', name.toLowerCase());
    if (species) params.set('species', species.toLowerCase());
    if (type) params.set('type', type.toLowerCase());
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
            <div className="flex gap-5 mx-1 items-center justify-center">
              <TextField
                id="outlined-basic"
                label="Search by Name"
                variant="outlined"
                value={name}
                onChange={handleNameChange}
              />
              <TextField
                id="outlined-basic"
                label="Search by Species"
                variant="outlined"
                value={species}
                onChange={handleSpeciesChange}
              />
              <TextField
                id="outlined-basic"
                label="Search by Type"
                variant="outlined"
                value={type}
                onChange={handleTypeChange}
              />
              <Box>
                <FormControl sx={{ minWidth: 170 }}>
                  <InputLabel id="demo-simple-select-label">
                    Filter by Status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Filter by Status"
                    onChange={handleStatusChange}
                    value={status ?? ''}
                  >
                    <MenuItem value={'alive'}>alive</MenuItem>
                    <MenuItem value={'dead'}>dead</MenuItem>
                    <MenuItem value={'unknown'}>unknown</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <FormControl sx={{ minWidth: 170 }}>
                  <InputLabel id="demo-simple-select-label">
                    Filter by Gender
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Sort by name"
                    onChange={handleGenderChange}
                    value={gender ?? ''}
                  >
                    <MenuItem value={'Female'}>Female</MenuItem>
                    <MenuItem value={'Male'}>Male</MenuItem>
                    <MenuItem value={'Genderless'}>Genderless</MenuItem>
                    <MenuItem value={'Unknown'}>Unknown</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <FormControl sx={{ minWidth: 170 }}>
                  <InputLabel id="demo-simple-select-label">
                    Sort by name
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Sort by name"
                    onChange={(e) => setSortOrder(e.target.value)}
                    value={sortOrder}
                  >
                    <MenuItem value={'Ascending'}>Ascending</MenuItem>
                    <MenuItem value={'Descending'}>Descending</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
        </div>
        <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-3">
              <div className="grid grid-cols-4 gap-4">
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
            <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
