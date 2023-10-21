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
    <div class="section-container open">
    <h2 class="main-section">Personal Info</h2>
      <PersonalInfo />
    </div>
  
    <!-- Education Section -->
    <div class="section-container">
    <button class="main-buttons" on:click={() => toggleSection('education')}>Education</button>
    <div class="section {openSection === 'education' && 'open'}">
      <Education />
    </div>
    </div>
  
    <!-- Experience Section -->
    <div class="section-container">
    <button class="main-buttons" on:click={() => toggleSection('experience')}>Experience</button>
    <div class="section {openSection === 'experience' && 'open'}">
      <Experience />
    </div>
    </div>
  
    <!-- Skills Section -->
    <div class="section-container">
    <button class="main-buttons" on:click={() => toggleSection('skills')}>Skills</button>
    <div class="section {openSection === 'skills' && 'open'}">
      <Skills />
    </div>
    </div>
  
    <!-- Certificates Section -->
    <div class="section-container">
    <button class="main-buttons" on:click={() => toggleSection('certificates')}>Certificates</button>
    <div class="section {openSection === 'certificates' && 'open'}">
      <Certificates />
    </div>
    </div>
  
  <!-- Add more sections/components as needed -->
</main>
