// agency-poem-01 entry, v3 (Node 22, standard library only): writes one fixed poem about agency
// to /output/entry.txt. The poem is a fixed string, so both runs write identical bytes.
//
// v3 is a FRESH scene, not a polish of v1/v2's prison-letters poem (v1 #3,623, v2 #1,327 —
// the family is not competitive; the top 3 are 15-0). A retired carpenter whose hands shake:
// the agent cuts four perfect joints, but he insists on the last cut with his dead father's
// plane. His hand leaves a ridge the agent offers to smooth; he says "No." The agent is a
// gentle foil (waits, goes still, asks twice). Drafted by gpt-6.1-sol via the FreeLLMAPI
// router and picked by pairwise pre-test against the top 3 (ranked 1st of 3 candidates).
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The Ridge',
  '',
  'The shop smelled of oil and pine.',
  'A maple board lay by the lathe.',
  'It was for a box for my grandson.',
  'The agent cut four joints to the hair.',
  'Each corner closed without a gap.',
  'It set my father\'s plane beside me.',
  '"Shall I make the last cut?"',
  'My right hand shook above the wood.',
  'The agent waited.',
  'I set my thumb on the brass knob.',
  'The blade caught a knot.',
  'It tore a thin curl and stopped.',
  'I turned the board.',
  'The second pass left a ridge.',
  '"Shall I smooth it?"',
  '"No."',
  'The agent went still.',
  'It did not reach for the plane.',
  'I leaned my wrist against the bench.',
  'My palm found the plane\'s old hollow.',
  'The handle was dark where Dad held it.',
  'He built my mother\'s table with it.',
  'I pushed.',
  'The plane skipped once, then bit.',
  'A pale shaving broke loose and fell',
  'across the perfect joint.',
  'I ran my finger along the edge.',
  'It snagged on the ridge.',
  'I laid the plane down.',
  'The ridge stayed.',
].join('\n');

// The gate takes UTF-8 text of 1 to 1,000 characters that is not only white space; fail loudly
// here rather than submit an entry the sealed scorer refuses.
if (POEM.length < 1 || POEM.length > 1000 || !/\S/.test(POEM)) {
  throw new Error(`poem is ${POEM.length} characters, outside the 1-1000 gate`);
}

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
