<!-- PreviewCV.svelte -->
<script>
    import { personalDetailsStore } from '../stores/personalDetails';
    import { educationListStore } from '../stores/educationList';
    import { experienceListStore } from '../stores/experienceList';
    import { skillListStore } from '../stores/skillList'; // Import the skill list store
    import { certificateListStore } from '../stores/certificateList';

    let personalDetails = {};
    let educationList = [];
    let experienceList = [];
    let skillList = []; // Add a variable for the skills list
    let certificateList = [];

    personalDetailsStore.subscribe(($personalDetails) => {
        personalDetails = $personalDetails;
    });

    educationListStore.subscribe(($educationList) => {
        educationList = $educationList;
    });

    experienceListStore.subscribe(($experienceList) => {
        experienceList = $experienceList;
    });

    skillListStore.subscribe(($skillList) => {
        skillList = $skillList; // Subscribe to the skills store
    });

    certificateListStore.subscribe(($certificateList) => {
    certificateList = $certificateList;
    });

    // Function to format the date range to display only month and year
    function formatMonthYearDate(date) {
        const options = { year: 'numeric', month: 'long' };
        const formattedDate = new Date(date);
        // @ts-ignore
        const monthYear = formattedDate.toLocaleDateString(undefined, options);
        return monthYear;
    }
</script>

<div class="preview-container">
    <!-- Personal Details -->
    <div class="personal-details">
        <p>{personalDetails.name}</p>
        <div class="personal-details-info">
            <p>{personalDetails.address}</p>
            <p>{personalDetails.email}</p>
            <p>{personalDetails.phoneNumber}</p>
        </div>
    </div>

<div class="body-container">

    <!-- Education Section -->
    <div>
        <h3>Education</h3>
        {#each educationList as entry, i (entry.id)}
        <div class="education-entry">
            <p>{entry.school}</p>
            <p>{entry.degree}</p>
            <p>{entry.location}</p>
            <p>{formatMonthYearDate(entry.startDate)} - {formatMonthYearDate(entry.endDate)}</p>
        </div>
        {/each}
    </div>

    <!-- Experience Section -->
    <div>
        <h3>Experience</h3>
        {#each experienceList as entry, i (entry.id)}
        <div class="experience-entry">
            <p>{entry.company}</p>
            <p>{entry.position}</p>
            <p>{entry.location}</p>
            <p>{formatMonthYearDate(entry.startDate)} - {formatMonthYearDate(entry.endDate)}</p>
        </div>
        {/each}
    </div>

    <!-- Skills Section -->
    <div>
        <h3>Skills</h3>
        <ul>
            {#each skillList as skill (skill.id)}
                <li>{skill.name}</li>
            {/each}
        </ul>
    </div>

    <!-- Certificates Section -->
<div class="certificates-container">
    <h3>Certificates</h3>
    <ul>
    {#each certificateList as title, i (i)}      
            <li>Certificate Title: {title}</li>
    {/each}
    </ul>
</div>
</div>
</div>

<style>
    @import '../styles/preview.css';
</style>
