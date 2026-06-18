---
name: create-skill
description: Guides the creation and bootstrapping of new workspace-specific or global agent skills. Use when the user requests to create, design, or define a new skill or capability.
---

# Create Skill

## Purpose

Standardize, structure, and automate the creation of high-quality agent skills in the workspace or global configuration directory, following Google Antigravity's official standards.

## Trigger

Use this skill when:
- The user requests to "create a new skill", "bootstrap a skill", or "add a capability".
- You identify a recurring task that would benefit from formalization as a workspace skill.

## Workflow

1. **Clarify the Scope & Requirements**
   - Identify the skill's name (should be lowercase, using hyphens for spaces, e.g., `git-helper`).
   - Identify the scope:
     - **Workspace-specific** (Default): `.agents/skills/<skill-name>/` (recommended for project-specific rules, deployment pipelines, testing suites).
     - **Global**: `~/.gemini/config/skills/<skill-name>/` (recommended for general-purpose developer scripts or global preferences).
   - Identify the core workflow, constraints, and triggers for the new skill.

2. **Establish Folder Structure**
   - Create the target folder based on the chosen scope.
   - Set up the standard directory hierarchy:
     ```text
     .agents/skills/<skill-name>/
     ├─── SKILL.md       # Main instructions (required)
     ├─── scripts/       # Optional helper scripts
     ├─── examples/      # Optional reference implementations
     └─── resources/     # Optional templates, config files, assets
     ```

3. **Compose SKILL.md**
   - **Frontmatter**: Every skill MUST start with a YAML frontmatter:
     ```yaml
     ---
     name: <skill-name>
     description: <description>
     ---
     ```
     *Constraint*: The description must be in the third person, concise, and include key terms/triggers that help the agent discover it (e.g. *"Generates unit tests using jest..."* or *"Automates deploy to AWS..."*).
   - **Body Structure**: Include the following standard sections:
     - `# <Title>`: Human-readable title.
     - `## Purpose`: Explanation of what the skill solves.
     - `## Trigger`: Specific scenarios/keywords when the agent should activate/read the skill.
     - `## Workflow`: Step-by-step guidance on how the agent should perform the work (including CLI commands, config paths, typical outputs).
     - `## Rules / Constraints`: Non-negotiable limits or guidelines.

4. **Add Accompanying Assets (Optional)**
   - If the skill requires custom scripting:
     - Write the scripts in JavaScript, Python, or Shell/PowerShell and place them in the `scripts/` folder.
     - Ensure scripts have clear command-line interface arguments, including `--help` output.
     - Document in `SKILL.md` that the agent should run scripts with `--help` to understand usage before executing.

5. **Verify and Finalize**
   - Confirm that the skill folder and `SKILL.md` exist.
   - Verify that the YAML frontmatter compiles and contains no syntax errors.
   - Present the new skill folder layout and a summary of the skill to the user.

## Rules & Conventions

- **Third-Person Descriptions**: Description frontmatter must start with action verbs in third person (e.g., "Designs...", "Audits...", "Configures...").
- **No Overcomplication**: Keep skills modular. If a skill is trying to solve multiple unrelated tasks, break it down into separate skills.
- **Path Compliance**: Use forward slashes in markdown paths for cross-platform compatibility.
