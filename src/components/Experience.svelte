<!-- Experience.svelte -->
<script>
    let experience = {
        companyName: '',
        positionTitle: '',
        startDate: '',
        endDate: '',
        location: '',
        description: '',
    };

    let experienceList = [];

    function handleSubmit(event) {
        event.preventDefault();

        if (
            !experience.companyName ||
            !experience.positionTitle ||
            !experience.startDate ||
            !experience.endDate ||
            !experience.location ||
            !experience.description
        ) {
            alert('Please fill in all fields.');
            return;
        }

        const entry = {
            companyName: experience.companyName,
            positionTitle: experience.positionTitle,
            startDate: experience.startDate,
            endDate: experience.endDate,
            location: experience.location,
            description: experience.description,
        };

        experienceList = [...experienceList, entry];
        clearForm();
    }

    function clearForm() {
        experience = {
            companyName: '',
            positionTitle: '',
            startDate: '',
            endDate: '',
            location: '',
            description: '',
        };
    }

    function removeExperience(index) {
        experienceList.splice(index, 1);
        // Update the experienceList to trigger reactivity
        experienceList = [...experienceList];
    }
</script>

<h2>Experience</h2>
<!-- Experience Form -->
<form on:submit={handleSubmit}>
    <label for="companyName">Company Name:</label>
    <input type="text" id="companyName" bind:value={experience.companyName} required />

    <label for="positionTitle">Position Title:</label>
    <input type="text" id="positionTitle" bind:value={experience.positionTitle} required />

    <label for="startDate">Start Date:</label>
    <input type="date" id="startDate" bind:value={experience.startDate} required />

    <label for="endDate">End Date:</label>
    <input type="date" id="endDate" bind:value={experience.endDate} required />

    <label for="location">Location:</label>
    <input type="text" id="location" bind:value={experience.location} required />

    <label for="description">Description:</label>
    <textarea id="description" bind:value={experience.description} required></textarea>

    <button type="submit">Add Experience</button>
</form>

<!-- Display saved experience entries -->
{#if experienceList.length > 0}
    <div class="experience-entries">
        {#each experienceList as entry, i}
            <div class="experience-entry">
                <h3>Entry {i + 1}</h3>
                <p>Company Name: {entry.companyName}</p>
                <p>Position Title: {entry.positionTitle}</p>
                <p>Start Date: {entry.startDate}</p>
                <p>End Date: {entry.endDate}</p>
                <p>Location: {entry.location}</p>
                <p>Description: {entry.description}</p>
                <button on:click={() => removeExperience(i)}>Remove</button>
            </div>
        {/each}
    </div>
{/if}

<style>
    /* Link to the common.css stylesheet using a relative path */
    @import '../styles/common.css';

    /* Additional component-specific styles if needed */
</style>
