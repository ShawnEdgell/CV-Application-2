<!-- Skills.svelte -->
<script>
    let skill = '';
    let skillList = [];

    function handleSubmit(event) {
        event.preventDefault();

        if (!skill) {
            alert('Please enter a skill.');
            return;
        }

        skillList = [...skillList, skill];
        clearForm();
    }

    function clearForm() {
        skill = '';
    }

    function removeSkill(index) {
        skillList.splice(index, 1);
        // Update the skillList to trigger reactivity
        skillList = [...skillList];
    }
</script>

<h2>Skills</h2>
<!-- Skills Form -->
<form on:submit={handleSubmit}>
    <label for="skill">Skill:</label>
    <input type="text" id="skill" bind:value={skill} required />

    <button type="submit">Add Skill</button>
</form>

<!-- Display saved skills -->
{#if skillList.length > 0}
    <div class="skills-list">
        {#each skillList as s, i}
            <div class="skill-entry">
                <p>{s}</p>
                <button on:click={() => removeSkill(i)}>Remove</button>
            </div>
        {/each}
    </div>
{/if}

<style>
    /* Link to the common.css stylesheet using a relative path */
    @import '../styles/common.css';

    /* Additional component-specific styles if needed */
</style>
