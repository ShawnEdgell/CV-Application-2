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

<!-- Experience Form -->
<form on:submit={handleSubmit}>
    <input placeholder="Company Name" type="text" id="companyName" bind:value={experience.companyName} autocomplete="off" required />

    <input placeholder="Position Title" type="text" id="positionTitle" bind:value={experience.positionTitle} autocomplete="off" required />

    <input placeholder="Location" type="text" id="location" bind:value={experience.location} autocomplete="off" required />

    <label for="startDate">Start Date:</label>
    <input type="date" id="startDate" bind:value={experience.startDate} autocomplete="off" required />

    <label for="endDate">End Date:</label>
    <input type="date" id="endDate" bind:value={experience.endDate} autocomplete="off" required />

    <textarea placeholder="Description (optional)" id="description" bind:value={experience.description} ></textarea>

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
                <p>Location: {entry.location}</p>
                <p>Start Date: {entry.startDate}</p>
                <p>End Date: {entry.endDate}</p>
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
