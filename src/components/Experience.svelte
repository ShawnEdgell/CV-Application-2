<script>
    let experience = {
      companyName: '',
      positionTitle: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
    };
</script>

<h2>Experience</h2>
<!-- Experience Form -->
<form>
    <label for="companyName">Company Name:</label>
    <input type="text" id="companyName" bind:value={experience.companyName} />

    <label for="positionTitle">Position Title:</label>
    <input type="text" id="positionTitle" bind:value={experience.positionTitle} />

    <label for="startDate">Start Date:</label>
    <input type="text" id="startDate" bind:value={experience.startDate} />

    <label for="endDate">End Date:</label>
    <input type="text" id="endDate" bind:value={experience.endDate} />

    <label for="location">Location:</label>
    <input type="text" id="location" bind:value={experience.location} />

    <label for="description">Description:</label>
    <textarea id="description" bind:value={experience.description}></textarea>
</form>

<style>
    /* Link to the common.css stylesheet using a relative path */
    @import '../styles/common.css';

    /* Additional component-specific styles if needed */
</style>