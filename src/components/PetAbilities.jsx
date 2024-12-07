import React, { useState, useEffect } from 'react'
import '../assets/styles/Index.css'

export const PetAbilities = () => {
    const [names, setNames] = useState([]); //Holder information
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const itemsPerPage = 12;

    //Calculate the indices for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    //Filter name of Ability
    const filteredAbility = names.filter((ability) => 
        ability.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    //Current items
    const currentItems = filteredAbility.slice(startIndex, endIndex);

    //Calculate number of pages
    const totalPages = Math.ceil(filteredAbility.length / itemsPerPage);

    //Move pages Next/Prev
    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };
    const goToPreviousPage = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    //Hook to fetch pet data and images
    useEffect(() => {
        const fetchAbilities = async () => {
            const URL = `https://us.api.blizzard.com/data/wow/pet-ability/index?namespace=static-us&locale=en_US&page=${currentPage}&per_page=${itemsPerPage}`;
            const headers = { Authorization: 'Bearer US0AJcOn3q0m99pD4HueL8sWeO4Xoe9ZwT'};

            try{
                const response = await fetch(URL, { headers });
                if (!response.ok) throw new Error("Network response not ok");
                const data = await response.json();
                if (data.abilities){
                    //Fetch images for each ability
                    const abilitiesWithImages = await Promise.all(
                        data.abilities.map(async (ability) => {
                            const imageUrl = await fetchAbilityImage(ability.id);
                            return { ...ability, image: imageUrl };
                        })
                    );
                    setNames(abilitiesWithImages);
                } else console.error ('Check the API', data)
            } catch (error){
                console.error('Fetch error', error)
            }
        };
        fetchAbilities();
    }, [currentPage]);

    //Fetch images for specific ability
    const fetchAbilityImage =async (abilityId) => {
        const URL = `https://us.api.blizzard.com/data/wow/media/pet-ability/${abilityId}?namespace=static-us&locale=en_US`;
        const headers = {Authorization: 'Bearer US0AJcOn3q0m99pD4HueL8sWeO4Xoe9ZwT'};

        try{
            const response = await fetch(URL, { headers });
            if (response.ok){
                const data = await response.json();
                return data.assets[0]?.value || '';
            } else {
                console.error('Erorr fetching image for Ability', abilityId);
                return '';
            }
        } catch (error) {
            console.error('Error fetching image for Ability', abilityId, error);
            return '';
        }
    };

    //Search query handler
    const handleSearchChange = (e) =>{
        setSearchQuery(e.target.value);
        setCurrentPage(1); //Back page 1 when is blank
    };

  return (
    <>
    <section>
        <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder='Search for Ability...'
        className='search-box'
        />
        <ul className='pet-list'>
            {currentItems.length > 0 ? (
                currentItems.map((ability) => (
                <li key={ability.id} className='pet-item'>
                    <img 
                    src={ability.image || '/default-ability-image.jpg'}
                    alt={ability.name}
                    className='pet-image'
                    />
                <pre>
                  {ability.name + '\nId: ' + ability.id}
                </pre>
                </li>    
                ))
            ) : (
                <div className='loading-container'>
                <div className='loading-spinner'>
                </div>
                    <p>Loading Abilities...</p>
                </div>
            )
        }
        </ul>
    </section>
    <div className='pagination'>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous 
        </button>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
    </div>
    </>
  )
}
