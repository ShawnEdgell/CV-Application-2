<!-- Experience.svelte -->
<script>
    import { experienceListStore } from '../stores/experienceList'; // Adjust the import path as needed
    import { v4 as uuidv4 } from 'uuid';
  
    let company = '';
    let position = '';
    let startDate = '';
    let endDate = '';
    let location = '';
  
    // Subscribe to changes in the experience list store
    let experienceList = [];
  
    experienceListStore.subscribe(($experienceList) => {
      experienceList = $experienceList;
    });
  
    // Function to handle form submission
    function handleSubmit(event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Validate the form data
      if (!company || !position || !startDate || !endDate || !location) {
        alert('Please fill in all fields.');
        return;
      }
  
      // Create a new experience entry with a UUID
      const entry = {
        id: uuidv4(), // Generate a UUID
        company,
        position,
        startDate,
        endDate,
        location,
      };
  
      // Add the entry to the list and clear the form
      experienceListStore.update((currentList) => [...currentList, entry]);
      clearForm();
    }
  
    // Function to clear the form fields
    function clearForm() {
      company = '';
      position = '';
      startDate = '';
      endDate = '';
      location = '';
    }
  
    // Function to remove an entry
    function removeEntry(id) {
      experienceListStore.update((currentList) => currentList.filter((entry) => entry.id !== id));
    }
  </script>
  
  <!-- Experience Form -->
  <form on:submit={handleSubmit}>
    <input
      placeholder="Company"
      type="text"
      id="company"
      bind:value={company}
      required
      autocomplete="off"
    />
  
    <input
      placeholder="Position"
      type="text"
      id="position"
      bind:value={position}
      required
      autocomplete="off"
    />
  
    <input
      placeholder="Location"
      type="text"
      id="location"
      bind:value={location}
      required
      autocomplete="off"
    />
  
    <label for="startDate">Start Date:</label>
    <input type="date" id="startDate" bind:value={startDate} required autocomplete="off" />
  
    <label for="endDate">End Date:</label>
    <input type="date" id="endDate" bind:value={endDate} required autocomplete="off" />
  
    <button type="submit">Add Experience</button>
  </form>
  
  <!-- Display saved experience entries -->
  {#if experienceList.length > 0}
    <div class="experience-entries">
      {#each experienceList as entry, i (entry.id)}
        <div class="experience-entry">
          <h4>Entry {i + 1}</h4>
          <p>Company: {entry.company}</p>
          <p>Position: {entry.position}</p>
          <p>Location: {entry.location}</p>
          <p>{entry.startDate} - {entry.endDate}</p>
          <button on:click={() => removeEntry(entry.id)}>Remove</button>
        </div>
      {/each}
    </div>
  {/if}
  
  <style>
    /* Link to the common.css stylesheet using a relative path */
    @import '../styles/common.css';
  
    /* Additional component-specific styles if needed */
  </style>
  