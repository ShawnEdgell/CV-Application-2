<!-- Education.svelte -->
<script>
    import { v4 as uuidv4 } from 'uuid';

    let school = '';
    let degree = '';
    let startDate = '';
    let endDate = '';
    let location = '';
    let educationList = []; // Store multiple education entries

    function handleSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Validate the form data
        if (!school || !degree || !startDate || !endDate || !location) {
            alert('Please fill in all fields.');
            return;
        }

        // Create a new education entry with a UUID
        const entry = {
            id: uuidv4(), // Generate a UUID
            school,
            degree,
            startDate,
            endDate,
            location,
        };

        // Add the entry to the list and clear the form
        educationList = [...educationList, entry];
        clearForm();
    }

    function clearForm() {
        school = '';
        degree = '';
        startDate = '';
        endDate = '';
        location = '';
    }

    function removeEntry(id) {
        educationList = educationList.filter((entry) => entry.id !== id);
    }
</script>

<!-- Education Form -->
<form on:submit={handleSubmit}>
    <input placeholder="School" type="text" id="school" bind:value={school} required autocomplete="off" />

    <input placeholder="Degree" type="text" id="degree" bind:value={degree} required autocomplete="off" />

    <input placeholder="Location" type="text" id="location" bind:value={location} required autocomplete="off" />

    <label for="startDate">Start Date:</label>
    <input type="date" id="startDate" bind:value={startDate} required autocomplete="off" />

    <label for="endDate">End Date:</label>
    <input type="date" id="endDate" bind:value={endDate} required autocomplete="off" />

    <button type="submit">Add Education</button>
</form>

<!-- Display saved education entries -->
{#if educationList.length > 0}
    <div class="education-entries">
        {#each educationList as entry, i (entry.id)}
            <div class="education-entry">
                <h3>Entry {i + 1}</h3>
                <p>School: {entry.school}</p>
                <p>Degree: {entry.degree}</p>
                <p>Location: {entry.location}</p>
                <p>Start Date: {entry.startDate}</p>
                <p>End Date: {entry.endDate}</p>
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
