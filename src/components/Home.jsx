import React from 'react'
import petHome from '../assets/images/petHome.gif';
import '../assets/styles/Home.css';

export const Home = () => {
  return (
    <div class="scroll-container">
      <div class="scroll-content">
          <h2>Welcome to the World of Pets in Azeroth</h2>
            <p>In the vast and enchanting world of World of Warcraft, pets are more than just companions – they</p>
            <p>are your loyal friends, battle allies, and a key part of your adventures. From the majestic creatures</p>
            <p>found in the wilds of Azeroth to the exotic companions that accompany you in raids and dungeons,</p>
            <p>the world of pets in WoW is rich and diverse. Whether you're looking for a pet to join you in battle or</p>
            <p>simply to add some charm to your character’s journey, you'll find plenty to discover here. Explore the</p>
            <p>best ways to collect, train, and care for your pets, and learn about the different pet battle strategies</p>
            <p>that will help you dominate the pet battle world. Get ready to embark on a pet-filled adventure in</p>
            <p>Azeroth like no other!</p>
            <img src={petHome} className="img" alt="petHome"/>
      </div>
          
    </div>
  )
}