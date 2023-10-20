<!-- PersonalInfo.svelte -->
<script>
    let personalDetails = {
      name: '',
      address: '',
      email: '',
      phoneNumber: '',
    };
  </script>
  
  <h2>Personal Info</h2>
  <!-- Personal Info Form -->
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" bind:value={personalDetails.name} autocomplete="off" />
  
    <label for="address">Address:</label>
    <input type="text" id="address" bind:value={personalDetails.address} autocomplete="off" />
  
    <label for="email">Email:</label>
    <input type="email" id="email" bind:value={personalDetails.email} autocomplete="off" />
  
    <label for="phoneNumber">Phone Number:</label>
    <input type="tel" id="phoneNumber" bind:value={personalDetails.phoneNumber} autocomplete="off" />
  </form>

  <style>
    /* Link to the common.css stylesheet using a relative path */
    @import '../styles/common.css';

    /* Additional component-specific styles if needed */
</style>
