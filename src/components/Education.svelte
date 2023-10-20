<script>
    let education = {
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: '',
    };
</script>

<h2>Education</h2>
<!-- Education Form -->
<form>
    <label for="school">School:</label>
    <input type="text" id="school" bind:value={education.school} />

    <label for="degree">Degree:</label>
    <input type="text" id="degree" bind:value={education.degree} />

    <label for="startDate">Start Date:</label>
    <input type="text" id="startDate" bind:value={education.startDate} />

    <label for="endDate">End Date:</label>
    <input type="text" id="endDate" bind:value={education.endDate} />

    <label for="location">Location:</label>
    <input type="text" id="location" bind:value={education.location} />
</form>

<style>
    /* Link to the common.css stylesheet using a relative path */
    @import '../styles/common.css';

    /* Additional component-specific styles if needed */
</style>