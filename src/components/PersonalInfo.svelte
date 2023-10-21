<!-- PersonalInfo.svelte -->
<script>
  import { personalDetailsStore } from '../stores/personalDetails'; // Adjust the import path as needed

  let personalDetails = {};

  // Subscribe to changes in the store
  personalDetailsStore.subscribe(($personalDetails) => {
    personalDetails = $personalDetails;
  });

  // Function to update the store when the user inputs data
  function handleInput(event, field) {
    personalDetailsStore.update((currentDetails) => ({
      ...currentDetails,
      [field]: event.target.value,
    }));
  }
</script>

<!-- Personal Info Form -->
<form>
  <input
    placeholder="Name"
    type="text"
    id="name"
    bind:value={personalDetails.name}
    on:input={(e) => handleInput(e, 'name')}
    autocomplete="off"
  />

  <input
    placeholder="Address"
    type="text"
    id="address"
    bind:value={personalDetails.address}
    on:input={(e) => handleInput(e, 'address')}
    autocomplete="off"
  />

  <input
    placeholder="Email"
    type="email"
    id="email"
    bind:value={personalDetails.email}
    on:input={(e) => handleInput(e, 'email')}
    autocomplete="off"
  />

  <input
    placeholder="Phone Number"
    type="tel"
    id="phoneNumber"
    bind:value={personalDetails.phoneNumber}
    on:input={(e) => handleInput(e, 'phoneNumber')}
    autocomplete="off"
  />
</form>

<style>
  @import '../styles/common.css';
</style>
