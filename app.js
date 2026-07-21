(() => {
  const scenarios = {
    process: {
      title: 'Employee process assistant', posture: 'Controlled pilot',
      subtitle: 'Illustrative baseline — internal workforce workflow',
      clauses: {
        intent: ['Outcome', 'Help an employee complete a documented internal process with less search and rework.'],
        context: ['Approved context', 'Curated policy, procedure, and form sources with document ownership and freshness.'],
        authority: ['Authority', 'Retrieve, summarize, and prepare; no final policy decision or consequential system action.'],
        proof: ['Evaluation', 'Groundedness, citation coverage, completion quality, edge cases, and refusal behavior.'],
        human: ['Human decision', 'Employee or process owner confirms the answer and owns exceptions.'],
        operate: ['Operating record', 'Usage, unresolved questions, overrides, source gaps, and recurring process friction.']
      },
      decision: 'Pilot with bounded sources and named process ownership.',
      rationale: 'The work can scale after answer quality, exception handling, source freshness, and user adoption are visible.',
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
      title: 'Document preparation', posture: 'Controlled pilot',
      subtitle: 'Illustrative scenario — draft acceleration with accountable review',
      clauses: {
        intent: ['Outcome', 'Prepare a structured first draft from approved templates and source facts.'],
        context: ['Approved context', 'Current templates, controlled source records, approved terminology, and document class.'],
        authority: ['Authority', 'Draft and flag gaps; no autonomous submission, approval, or customer commitment.'],
        proof: ['Evaluation', 'Fact consistency, required-field coverage, template compliance, sensitive-data handling, and red-team cases.'],
        human: ['Human decision', 'Named reviewer verifies facts, judgment, commitments, and final release.'],
        operate: ['Operating record', 'Edit distance, recurring omissions, reviewer corrections, cycle time, and exceptions.']
      },
      decision: 'Pilot with template controls and mandatory final review.',
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
