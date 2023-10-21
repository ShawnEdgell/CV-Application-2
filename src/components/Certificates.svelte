<!-- Certificates.svelte -->
<script>
    import { certificateListStore } from '../stores/certificateList'; // Adjust the import path as needed
    
    let certificateTitle = '';
    let certificateList = [];

    certificateListStore.subscribe(($certificateList) => {
        certificateList = $certificateList;
    });

    function handleSubmit(event) {
        event.preventDefault();

        if (!certificateTitle) {
            alert('Please enter a certificate title.');
            return;
        }

        certificateListStore.update((currentList) => [...currentList, certificateTitle]);
        clearForm();
    }

    function clearForm() {
        certificateTitle = '';
    }

    function removeCertificate(index) {
        certificateListStore.update((currentList) => currentList.filter((_, i) => i !== index));
    }

</script>

<!-- Certificate Form -->
<form on:submit={handleSubmit}>
    <input autocomplete="off" placeholder="Certificate" type="text" id="certificateTitle" bind:value={certificateTitle} required />
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
    @import '../styles/common.css';
</style>
