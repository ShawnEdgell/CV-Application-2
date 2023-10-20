<!-- Certificates.svelte -->
<script>
    let certificateTitle = '';
    let certificateList = [];

    function handleSubmit(event) {
        event.preventDefault();

        if (!certificateTitle) {
            alert('Please enter a certificate title.');
            return;
        }

        certificateList = [...certificateList, certificateTitle];
        certificateTitle = ''; // Clear the input field
    }

    function removeCertificate(index) {
        certificateList.splice(index, 1);
        // Update the certificateList to trigger reactivity
        certificateList = [...certificateList];
    }
</script>

<h2>Certificates</h2>
<!-- Certificate Form -->
<form on:submit={handleSubmit}>
    <label for="certificateTitle">Certificate Title:</label>
    <input type="text" id="certificateTitle" bind:value={certificateTitle} required />
    <button type="submit">Add Certificate</button>
</form>

<!-- Display saved certificate titles -->
{#if certificateList.length > 0}
    <div class="certificate-entries">
        {#each certificateList as title, i}
            <div class="certificate-entry">
                <p>Certificate Title: {title}</p>
                <button on:click={() => removeCertificate(i)}>Remove</button>
            </div>
        {/each}
    </div>
{/if}

<style>
    /* Link to the common.css stylesheet using a relative path */
    @import '../styles/common.css';

    /* Additional component-specific styles if needed */
</style>
