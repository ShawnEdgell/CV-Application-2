<!-- PersonalInfo.svelte -->
<script>
    let personalDetails = {
      name: '',
      address: '',
      email: '',
      phoneNumber: '',
    };
  </script>
  
  <!-- Personal Info Form -->
  <form>
    <input placeholder="Name" type="text" id="name" bind:value={personalDetails.name} autocomplete="off" />

    <input placeholder="Address" type="text" id="address" bind:value={personalDetails.address} autocomplete="off" />
  
    <input placeholder="Email" type="email" id="email" bind:value={personalDetails.email} autocomplete="off" />
  
    <input placeholder="Phone Number" type="tel" id="phoneNumber" bind:value={personalDetails.phoneNumber} autocomplete="off" />
  </form>

  <style>
    /* Link to the common.css stylesheet using a relative path */
    @import '../styles/common.css';

    /* Additional component-specific styles if needed */
</style>
