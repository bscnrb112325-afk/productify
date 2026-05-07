# Create-Skill — SKILL.md Template

Purpose
-------
Provide a reusable, workspace-scoped skill for extracting a step-by-step workflow from a conversation and turning it into a `SKILL.md` that other agents can use.

Scope
-----
- Intended for the `frontend/` workspace folder.
- Workspace-scoped: saves the resulting `SKILL.md` under `frontend/`.

When to run
-----------
Run this skill when you want to convert a multi-step developer conversation or agreed process into a reusable skill file that other agents can invoke.

High-level process
------------------
1. Review the conversation and repository context to find any existing workflow or patterns.
2. Extract the workflow as: ordered steps, decision points, and quality/completion checks.
3. If there is insufficient information, ask concise clarifying questions (outcome, scope, examples).
4. Draft the `SKILL.md` using the template fields below.
5. Save the draft to `frontend/SKILL.md` and iterate with the user until finalized.

Checklist / Completion criteria
------------------------------
- The `SKILL.md` contains: name, description, invocation examples, step-by-step instructions, expected outputs, and example prompts.
- Ambiguous steps include a short clarifying question in the file or were asked to the user.
- The user confirms the draft or provides concise edits.

Template (fill & adapt)
-----------------------
- Name: create-skill
- Description: Short one-line description of what the skill produces.
- Scope: `frontend/` (workspace-scoped)
- Trigger / Invocation examples:
  - "Create a SKILL.md for the current conversation"
  - "Generate a skill from the last PR review thread"
- Inputs required:
  - Conversation history (or link to the PR/issue)
  - Target folder (defaults to `frontend/`)
- Outputs:
  - A saved `SKILL.md` file in the target folder
  - A short summary and example prompts
- Step-by-step instructions:
  1. Read the conversation and repository context.
  2. Identify the main goal and final deliverable.
  3. Extract discrete workflow steps and decision branches.
  4. Identify quality gates / completion checks.
  5. Draft the `SKILL.md` using this template.
  6. Ask up to 3 clarifying questions if needed.
  7. Save the file to the target folder and present examples.
- Ambiguities & clarifying questions (examples):
  - "Should the skill be workspace-scoped or user-scoped?"
  - "What is the minimal acceptable output for a successful run?"
- Example prompts to run this skill:
  - "Draft a SKILL.md that turns our deployment checklist into a reusable skill"
  - "Extract the testing workflow from the conversation and create a SKILL.md"

Best practices & notes
---------------------
- Keep steps actionable and testable.
- Prefer small, orthogonal skills over one large, general skill.
- Add `applyTo` patterns and example invocations when the workflow depends on file structure.

Iteration plan
--------------
1. Draft saved at `frontend/SKILL.md`.
2. Request clarifications for any ambiguous steps (up to 3 questions).
3. Incorporate answers and finalize the file.

Example — simple generated skill summary
---------------------------------------
This skill reads a conversation that outlines a 4-step release process, extracts each step plus rollback criteria, and writes a `SKILL.md` that other agents can run to reproduce the release workflow.

Related customizations to consider next
-------------------------------------
- Add an `examples/` subfolder with concrete sample conversations and expected outputs.
- Create a companion `agent.md` describing how to invoke the skill programmatically.

-----
If anything in this draft should be narrower, more opinionated, or workspace-specific, reply with the single-line change you want and I will update the file.
