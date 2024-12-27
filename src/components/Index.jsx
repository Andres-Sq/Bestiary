import React, { useState, useEffect } from 'react';
import '../assets/styles/Index.css';

export const Index = () => {
  const [names, setNames] = useState([]); // State to hold pet data (name, id, image)
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const itemsPerPage = 12;

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filter names based on search query
  const filteredNames = names.filter((pet) =>
    pet.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Get the current items based on the filtered names and pagination
  const currentItems = filteredNames.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredNames.length / itemsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  // Hook to fetch pet data and images
  useEffect(() => {
    const fetchPets = async () => {
      const URL = `https://us.api.blizzard.com/data/wow/pet/index?namespace=static-us&locale=en_US&page=${currentPage}&per_page=${itemsPerPage}`;
      const headers = { Authorization: 'Bearer USdiAkzj14zILW6Bryi0NLofWm3iGeIw5O' };

      try {
        const response = await fetch(URL, { headers });
        if (!response.ok) throw new Error('Network response not ok');
        const data = await response.json();
        if (data.pets) {
          // Fetch images for each pet
          const petsWithImages = await Promise.all(
            data.pets.map(async (pet) => {
              const imageUrl = await fetchPetImage(pet.id);
              return { ...pet, image: imageUrl };
            })
          );
          setNames(petsWithImages);
        } else console.error('Check the API', data);
      } catch (error) {
        console.error('Fetch error', error);
      }
    };

    fetchPets();
  }, [currentPage]);

  // Fetch image for a specific pet
  const fetchPetImage = async (petId) => {
    const URL = `https://us.api.blizzard.com/data/wow/media/pet/${petId}?namespace=static-us&locale=en_US`;
    const headers = {
      Authorization: 'Bearer USdiAkzj14zILW6Bryi0NLofWm3iGeIw5O',
    };

    try {
      const response = await fetch(URL, { headers });
      if (response.ok) {
        const data = await response.json();
        return data.assets[0]?.value || '';
      } else {
        console.error('Error fetching image for pet', petId);
        return '';
      }
    } catch (error) {
      console.error('Error fetching image for pet', petId, error);
      return '';
    }
  };

  // Handle input change for search query
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when search changes
  };

  return (
    <>
      <section>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for a pet..."
          className="search-box"
        />
        <div>
          
        </div>
        <ul className="pet-list">
          {currentItems.length > 0 ? (
            currentItems.map((pet) => (
              <li key={pet.id} className="pet-item">
                <img
                  src={pet.image || '/default-pet-image.jpg'}
                  alt={pet.name}
                  className="pet-image"
                />
                <pre>
                  {pet.name + '\nId: ' + pet.id}
                </pre>
              </li>
            ))
          ) : (
            <div className="loading-container">
            <div className="loading-spinner">
            </div>
              <p>Loading pets...</p>
            </div>
          )}
        </ul>
      </section>
      <div className="pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </>
  );
};