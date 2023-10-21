<!-- Skills.svelte -->
<script>
    import { skillListStore } from '../stores/skillList'; // Import the skill list store
    import { v4 as uuidv4 } from 'uuid';

    let skill = '';

    // Subscribe to changes in the skill list store
    let skillList = [];

    skillListStore.subscribe(($skillList) => {
        skillList = $skillList;
    });

    function handleSubmit(event) {
        event.preventDefault();

        if (!skill) {
            alert('Please enter a skill.');
            return;
        }

        const newSkill = {
            id: uuidv4(),
            name: skill,
        };

        skillListStore.update((currentList) => [...currentList, newSkill]);
        clearForm();
    }

    function clearForm() {
        skill = '';
    }

    function removeSkill(id) {
        skillListStore.update((currentList) => currentList.filter((item) => item.id !== id));
    }
</script>

<!-- Skills Form -->
<form on:submit={handleSubmit}>
    <input autocomplete="off" placeholder="Skill" type="text" id="skill" bind:value={skill} required />

    <button type="submit">Add Skill</button>
</form>

<!-- Display saved skills as paragraphs -->
{#if skillList.length > 0}
    <div class="skills-list">
        {#each skillList as s (s.id)}
            <div class="skill-entry">
                <p>{s.name}</p>
                <button on:click={() => removeSkill(s.id)}>Remove</button>
            </div>
        {/each}
    </div>
{/if}
