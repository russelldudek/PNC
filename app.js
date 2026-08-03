(() => {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const linearUrl = 'https://linear.app/dudexos/project/pnc-enterprise-ai-engineer-first-90-days-b0377c935a3d/overview';
  const style = document.createElement('style');
  style.textContent = `
    .revision-signal{background:#fff8f2;border-top:1px solid #f2c8a8;border-bottom:1px solid #f2c8a8}
    .revision-signal-inner{max-width:1180px;margin:0 auto;padding:24px 28px;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:28px;align-items:center}
    .revision-signal .revision-kicker{margin:0 0 5px;color:#a44b10;font-size:.75rem;font-weight:900;letter-spacing:.11em;text-transform:uppercase}
    .revision-signal h2{margin:0 0 7px;color:#10212b;font-family:Georgia,'Times New Roman',serif;font-size:1.55rem;font-weight:500}
    .revision-signal p{margin:0;max-width:790px;color:#3f515b;font-size:.94rem}
    .revision-signal-actions{display:flex;gap:9px;flex-wrap:wrap;justify-content:flex-end}
    .revision-signal-actions a{display:inline-flex;padding:10px 13px;border-radius:7px;text-decoration:none;font-size:.82rem;font-weight:850;background:#003b5c;color:#fff}
    .revision-signal-actions a:first-child{background:#f58025;color:#17242b}
    .doc-links{grid-template-columns:repeat(3,minmax(0,1fr))}
    .doc-link.external{border-color:#9fc4d4;background:#f2f8fa}
    @media(max-width:900px){.doc-links{grid-template-columns:repeat(2,minmax(0,1fr))}}
    @media(max-width:760px){.revision-signal-inner{grid-template-columns:1fr;padding:22px 20px}.revision-signal-actions{justify-content:flex-start}}
    @media(max-width:560px){.doc-links{grid-template-columns:1fr}}
  `;
  document.head.appendChild(style);

  const section = document.createElement('section');
  section.className = 'revision-signal';
  section.setAttribute('aria-labelledby', 'revision-signal-title');
  section.innerHTML = `
    <div class="revision-signal-inner">
      <div>
        <p class="revision-kicker">Stakeholder-informed revision · August 3, 2026</p>
        <h2 id="revision-signal-title">Discovery changed the plan.</h2>
        <p>The hiring conversation clarified a broader need: establish the corporate AI portfolio decision system first, then enter through the safest bounded workflow and earn the reusable pattern.</p>
      </div>
      <div class="revision-signal-actions">
        <a href="interview-learning-delta.html">See what changed →</a>
        <a href="90-day-plan.html">Revised 90-day plan</a>
        <a href="${linearUrl}" target="_blank" rel="noopener">Live Linear board ↗</a>
      </div>
    </div>`;
  hero.insertAdjacentElement('afterend', section);

  const heroDeck = hero.querySelector('.hero-deck');
  if (heroDeck) {
    heroDeck.textContent = 'PNC has expanded enterprise AI capability. The next operating challenge is deciding which work deserves it, choosing the simplest approved path, and making every AI-assisted workflow carry its context, authority, evidence, human decision rights, economics, and operating record.';
  }
  const heroMeta = hero.querySelectorAll('.hero-meta span');
  if (heroMeta.length) heroMeta[heroMeta.length - 1].textContent = 'Stakeholder-informed candidate vision';

  const darkSections = [...document.querySelectorAll('.section.dark')];
  const pressureSection = darkSections.find(item => item.querySelector('h2')?.textContent.includes('isolated AI moments'));
  if (pressureSection) {
    const lead = pressureSection.querySelector('.section-lead');
    if (lead) lead.textContent = 'It needs a repeatable way to triage demand across corporate functions, compare approved capabilities and conventional automation, translate selected work into engineering requirements, preserve risk and decision boundaries, and prove what should advance.';
  }

  const decisionItems = [...document.querySelectorAll('.decision-strip .decision-item')];
  const decisionCopy = [
    ['SELECT', 'Which capability fits?', 'Compare an approved Copilot capability, governed vendor AI, deterministic automation, bounded custom workflow, and no-AI disposition.'],
    ['RETAIN', 'What stays human?', 'Make consequential judgment, exception handling, approval, accountability, and stop authority explicit before automation expands.'],
    ['ADVANCE', 'What earns the next posture?', 'Move from evaluation toward broader operation only when value, controls, economics, adoption, ownership, and recovery evidence support it.']
  ];
  decisionItems.forEach((item, index) => {
    const copy = decisionCopy[index];
    if (!copy) return;
    item.querySelector('b').textContent = copy[0];
    item.querySelector('h3').textContent = copy[1];
    item.querySelector('p').textContent = copy[2];
  });

  const entryPlan = document.querySelector('#entry-plan');
  if (entryPlan) {
    entryPlan.querySelector('h2').textContent = 'Understand the portfolio. Prove one bounded workflow. Standardize the learning.';
    const lead = entryPlan.querySelector('.section-lead');
    if (lead) lead.textContent = 'The plan begins by making demand, ownership, systems of record, data lineage, approved capability fit, risk, economics, and decision rights visible before committing engineering capacity.';
    const phases = [...entryPlan.querySelectorAll('.phase')];
    const phaseCopy = [
      ['Days 1–30', 'Discover, Portfolio & Align', ['Map demand across Enterprise Change, shared-services finance, supply chain/procurement, and realty.', 'Clarify SWAT-team intake, allocation, decision rights, source authority, data lineage, approved tools, governance, and capacity.', 'Select one or two proof candidates only after capability fit, ownership, baseline, evidence mode, and reversibility are explicit.']],
      ['Days 31–60', 'Design, Evaluate & Prove', ['Compare Copilot, vendor AI, deterministic automation, bounded custom, and no-AI paths.', 'Apply the AI Work Control Envelope and build production-relevant evaluation evidence.', 'Operate in the safest approved mode: offline, sandbox, shadow, draft-only, assist, or production pilot.']],
      ['Days 61–90', 'Learn, Standardize & Recommend', ['Repair process, source, permission, interface, vendor, training, ownership, or model defects revealed by evidence.', 'Extract reusable intake, engineering, governance, evaluation, and operating patterns without forcing local workflows into one template.', 'Recommend advance, repair, hold, or stop and publish the next-quarter roadmap.']]
    ];
    phases.forEach((phase, index) => {
      const copy = phaseCopy[index];
      if (!copy) return;
      phase.querySelector('span').textContent = copy[0];
      phase.querySelector('h3').textContent = copy[1];
      phase.querySelector('ul').innerHTML = copy[2].map(item => `<li>${item}</li>`).join('');
    });
  }

  const questionsSection = darkSections.find(item => item.querySelector('.questions'));
  if (questionsSection) {
    questionsSection.querySelector('.section-kicker').textContent = 'Questions for continued discovery';
    questionsSection.querySelector('h2').textContent = 'Clarify how the portfolio becomes governed work.';
    const questions = questionsSection.querySelector('.questions');
    questions.innerHTML = `
      <div class="question"><span>Portfolio</span>Across the corporate-function backlog, where is the combination of business ownership, data readiness, and measurable friction strongest today?</div>
      <div class="question"><span>Team</span>How will peer directors and the new enterprise AI engineers divide prioritization, technical ownership, governance coordination, and reusable-pattern stewardship?</div>
      <div class="question"><span>Evidence</span>What evidence must a workflow produce before PNC is comfortable moving it from evaluation into production?</div>
      <div class="question"><span>Success</span>What would make the leadership team say after 90 days that this role materially improved how AI opportunities become governed work?</div>`;
  }

  const docLinks = document.querySelector('.doc-links');
  if (docLinks) {
    const thesisLink = [...docLinks.querySelectorAll('a')].find(link => link.getAttribute('href') === 'interview-brief.html');
    if (thesisLink) {
      thesisLink.querySelector('small').textContent = 'Candidate operating thesis';
      thesisLink.querySelector('strong').textContent = 'Enterprise AI thesis →';
    }
    const planLink = [...docLinks.querySelectorAll('a')].find(link => link.getAttribute('href') === '90-day-plan.html');
    if (planLink) planLink.querySelector('small').textContent = 'Stakeholder-informed entry plan';
    const linearLink = document.createElement('a');
    linearLink.className = 'doc-link external';
    linearLink.href = linearUrl;
    linearLink.target = '_blank';
    linearLink.rel = 'noopener';
    linearLink.innerHTML = '<small>Live execution system</small><strong>Linear 90-day board ↗</strong>';
    docLinks.appendChild(linearLink);
  }
})();

(() => {
  const scenarios = {
    process: {
      title: 'Employee process assistant', posture: 'Human-reviewed assist',
      subtitle: 'Illustrative baseline — internal workforce workflow',
      clauses: {
        intent: ['Outcome', 'Help an employee complete a documented internal process with less search and rework.'],
        context: ['Approved context', 'Curated policy, procedure, and form sources with document ownership and freshness.'],
        authority: ['Authority', 'Retrieve, summarize, and prepare; no final policy decision or consequential system action.'],
        proof: ['Evaluation', 'Groundedness, citation coverage, completion quality, edge cases, and refusal behavior.'],
        human: ['Human decision', 'Employee or process owner confirms the answer and owns exceptions.'],
        operate: ['Operating record', 'Usage, unresolved questions, overrides, source gaps, and recurring process friction.']
      },
      decision: 'Advance only after bounded-source and ownership evidence is credible.',
      rationale: 'The workflow can move toward broader use after answer quality, exception handling, source freshness, review burden, economics, and adoption are visible.',
      measures: ['Search and intake time', 'Completion and rework', 'Unresolved-question rate', 'Override and escalation patterns']
    },
    knowledge: {
      title: 'Internal knowledge retrieval', posture: 'Assist',
      subtitle: 'Illustrative scenario — answer support, not decision substitution',
      clauses: {
        intent: ['Outcome', 'Return a traceable answer from authorized enterprise knowledge.'],
        context: ['Approved context', 'Access-filtered retrieval with source lineage, retention rules, and document freshness.'],
        authority: ['Authority', 'Search and synthesize only; no write access or external disclosure.'],
        proof: ['Evaluation', 'Retrieval precision, answer support, permission boundary, adversarial prompts, and no-answer behavior.'],
        human: ['Human decision', 'User evaluates applicability; policy and risk owners retain authoritative interpretation.'],
        operate: ['Operating record', 'Queries, source use, no-answer causes, corrections, and access-control events.']
      },
      decision: 'Assist with strict access inheritance and answer traceability.',
      rationale: 'The value comes from faster answerability without weakening information boundaries.',
      measures: ['Answer support', 'No-answer quality', 'Source freshness', 'Access-boundary events']
    },
    document: {
      title: 'Document preparation', posture: 'Draft-only assist',
      subtitle: 'Illustrative scenario — draft acceleration with accountable review',
      clauses: {
        intent: ['Outcome', 'Prepare a structured first draft from approved templates and source facts.'],
        context: ['Approved context', 'Current templates, controlled source records, approved terminology, and document class.'],
        authority: ['Authority', 'Draft and flag gaps; no autonomous submission, approval, or customer commitment.'],
        proof: ['Evaluation', 'Fact consistency, required-field coverage, template compliance, sensitive-data handling, and red-team cases.'],
        human: ['Human decision', 'Named reviewer verifies facts, judgment, commitments, and final release.'],
        operate: ['Operating record', 'Edit distance, recurring omissions, reviewer corrections, cycle time, and exceptions.']
      },
      decision: 'Use draft-only assistance with template controls and mandatory review.',
      rationale: 'Draft speed is useful only when factual integrity and review authority remain explicit.',
      measures: ['Draft cycle time', 'Required-field completeness', 'Reviewer edits', 'Exception frequency']
    },
    agent: {
      title: 'Agentic task execution', posture: 'Hold for bounded design',
      subtitle: 'Illustrative scenario — higher consequence and tool authority',
      clauses: {
        intent: ['Outcome', 'Complete a narrow, reversible task across approved systems.'],
        context: ['Approved context', 'Task-specific state, identity, data classification, and explicit system boundaries.'],
        authority: ['Authority', 'Least-privilege tools, allowlisted actions, limits, idempotency, and reversible steps.'],
        proof: ['Evaluation', 'Tool-call correctness, injection resistance, state recovery, fallback, auditability, and failure containment.'],
        human: ['Human decision', 'Approval before consequential or irreversible action; clear stop and escalation authority.'],
        operate: ['Operating record', 'Every action, permission, input, output, intervention, recovery, and completed outcome.']
      },
      decision: 'Hold until permissions, recovery, and human approval are engineered.',
      rationale: 'Autonomy should increase only when consequence, reversibility, evidence, and recovery capacity support it.',
      measures: ['Successful completed outcomes', 'Intervention rate', 'Recovery and rollback', 'Permission or policy exceptions']
    }
  };
  const buttons = [...document.querySelectorAll('[data-scenario]')];
  if (!buttons.length) return;
  const title = document.querySelector('#scenario-title');
  const subtitle = document.querySelector('#scenario-subtitle');
  const posture = document.querySelector('#scenario-posture');
  const decision = document.querySelector('#decision-title');
  const rationale = document.querySelector('#decision-rationale');
  const measureList = document.querySelector('#measure-list');
  const announcer = document.querySelector('#studio-announcer');
  let token = 0;

  function setScenario(key, announce = true) {
    const request = ++token;
    const state = scenarios[key];
    if (!state) return;
    buttons.forEach(btn => btn.setAttribute('aria-pressed', btn.dataset.scenario === key ? 'true' : 'false'));
    title.textContent = state.title;
    subtitle.textContent = state.subtitle;
    posture.textContent = state.posture;
    decision.textContent = state.decision;
    rationale.textContent = state.rationale;
    measureList.innerHTML = '';
    state.measures.forEach(item => { const li = document.createElement('li'); li.textContent = item; measureList.appendChild(li); });
    Object.entries(state.clauses).forEach(([id, [heading, body]], index) => {
      const el = document.querySelector(`[data-clause="${id}"]`);
      el.classList.remove('active');
      el.querySelector('h4').textContent = heading;
      el.querySelector('p').textContent = body;
      requestAnimationFrame(() => setTimeout(() => { if (request === token) el.classList.add('active'); }, index * 55));
    });
    document.querySelector('.envelope-board').dataset.state = key;
    if (announce) announcer.textContent = `${state.title}. ${state.posture}. ${state.decision}`;
  }
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => setScenario(button.dataset.scenario));
    button.addEventListener('keydown', event => {
      if (!['ArrowDown','ArrowRight','ArrowUp','ArrowLeft','Home','End'].includes(event.key)) return;
      event.preventDefault();
      let next = index;
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % buttons.length;
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + buttons.length) % buttons.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = buttons.length - 1;
      buttons[next].focus();
      setScenario(buttons[next].dataset.scenario);
    });
  });
  document.querySelector('#reset-studio').addEventListener('click', () => { setScenario('process'); buttons[0].focus(); });
  setScenario('process', false);
})();
