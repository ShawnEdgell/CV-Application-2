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
    <h2 class="main-section"><img src="./src/images/user.svg" alt="Info Icon">Personal Info</h2>
      <PersonalInfo />
    </div>
  
<!-- Education Section -->
<div class="section-container">
  <button class="main-buttons" on:click={() => toggleSection('education')}>
      <img src="./src/images/education.svg" alt="Info Icon">Education
      <span class="icon">
          {#if openSection === 'education'}
              <img src="./src/images/minus.svg" alt="-">
          {:else}
              <img src="./src/images/plus.svg" alt="+">
          {/if}
      </span>
  </button>
  <div class="section {openSection === 'education' && 'open'}">
      <Education />
  </div>
</div>


<!-- Experience Section -->
<div class="section-container">
  <button class="main-buttons" on:click={() => toggleSection('experience')}>
      <img src="./src/images/experience.svg" alt="Info Icon">Experience
      <span class="icon">
          {#if openSection === 'experience'}
              <img src="./src/images/minus.svg" alt="-">
          {:else}
              <img src="./src/images/plus.svg" alt="+">
          {/if}
      </span>
  </button>
  <div class="section {openSection === 'experience' && 'open'}">
      <Experience />
  </div>
</div>

<!-- Skills Section -->
<div class="section-container">
  <button class="main-buttons" on:click={() => toggleSection('skills')}>
      <img src="./src/images/skills.svg" alt="Info Icon">Skills
      <span class="icon">
          {#if openSection === 'skills'}
              <img src="./src/images/minus.svg" alt="-">
          {:else}
              <img src="./src/images/plus.svg" alt="+">
          {/if}
      </span>
  </button>
  <div class="section {openSection === 'skills' && 'open'}">
      <Skills />
  </div>
</div>

<!-- Certificates Section -->
<div class="section-container">
  <button class="main-buttons" on:click={() => toggleSection('certificates')}>
      <img src="./src/images/certificates.svg" alt="Info Icon">Certificates
      <span class="icon">
          {#if openSection === 'certificates'}
              <img src="./src/images/minus.svg" alt="-">
          {:else}
              <img src="./src/images/plus.svg" alt="+">
          {/if}
      </span>
  </button>
  <div class="section {openSection === 'certificates' && 'open'}">
      <Certificates />
  </div>
</div>
  
  <!-- Add more sections/components as needed -->
</main>
