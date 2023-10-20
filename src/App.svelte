<!-- App.svelte -->
<script>
  import PersonalInfo from './components/PersonalInfo.svelte';
  import Education from './components/Education.svelte';
  import Experience from './components/Experience.svelte';
  import Skills from './components/Skills.svelte';
  import Certificates from './components/Certificates.svelte';

  // Create a variable to keep track of the open section
  let openSection = '';

  // Function to toggle the open section
  function toggleSection(section) {
    if (openSection === section) {
      // If the clicked section is already open, close it
      openSection = '';
    } else {
      // Otherwise, open the clicked section
      openSection = section;
    }
  }
</script>

<main>
  <h1>CV Creator</h1>

  <div class="left-container">

    <!-- Personal Info Section -->
    <button class="main-buttons" on:click={() => toggleSection('personalInfo')}>Personal Info</button>
    <div class="section {openSection === 'personalInfo' && 'open'}">
      <PersonalInfo />
    </div>
  
    <!-- Education Section -->
    <button class="main-buttons" on:click={() => toggleSection('education')}>Education</button>
    <div class="section {openSection === 'education' && 'open'}">
      <Education />
    </div>
  
    <!-- Experience Section -->
    <button class="main-buttons" on:click={() => toggleSection('experience')}>Experience</button>
    <div class="section {openSection === 'experience' && 'open'}">
      <Experience />
    </div>
  
    <!-- Skills Section -->
    <button class="main-buttons" on:click={() => toggleSection('skills')}>Skills</button>
    <div class="section {openSection === 'skills' && 'open'}">
      <Skills />
    </div>
  
    <!-- Certificates Section -->
    <button class="main-buttons" on:click={() => toggleSection('certificates')}>Certificates</button>
    <div class="section {openSection === 'certificates' && 'open'}">
      <Certificates />
    </div>
  
  <!-- Add more sections/components as needed -->
</main>
