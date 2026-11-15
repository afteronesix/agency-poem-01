// agency-poem-01 entry, v2 (Node 22, standard library only): writes one fixed poem about agency
// to /output/entry.txt. The poem is a fixed string, so both runs write identical bytes.
//
// v2 revision of the submitted v1 ("The Crossed-Out Word"): same scene, same body, same
// callback — the brother crosses out a word too — but the ending trusts the scene instead of
// explaining it. v1's last two sentences ("The agent's letters say everything right. Ours
// say one thing wrong, in our own hands.") lectured the insight; v2 ends on the brother's
// crossed-out word, with the echo "in letters too small for the line" (the exact phrase from
// the narrator's own crossing-out) tying the two crossings together. No commentary after it.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The Crossed-Out Word',
  '',
  'My brother is in prison three states away, and I write him every Sunday. The agent writes the letters now. It knows his block, his release date, the way he likes the news told short. It drafts them clean: no word out of place, no sentence that wanders. I read them, and I sign my name at the bottom, and the signature is the only part in my hand. He once wrote that it was the only part that felt like me.',
  '',
  'Last Sunday I took the pen back. I copied the draft out myself at the kitchen table, and my hand cramped at the third paragraph, the way it always does. I wrote "I am proud of you," and then I crossed out "proud" and wrote "sorry" above it, in letters too small for the line. The page looked worse. The page was honest for the first time.',
  '',
  'He wrote back on Tuesday. His letter had a word crossed out too, in letters too small for the line. He crossed out "fine" and wrote "scared" above it.',
].join('\n');

// The gate takes UTF-8 text of 1 to 1,000 characters that is not only white space; fail loudly
// here rather than submit an entry the sealed scorer refuses. Verified: 919 characters.
if (POEM.length < 1 || POEM.length > 1000 || !/\S/.test(POEM)) {
  throw new Error(`poem is ${POEM.length} characters, outside the 1-1000 gate`);
}

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
