/**
 * Pronunciation normalisation for narration.
 *
 * Technical tokens are written for code but spoken aloud differently, so the
 * spoken text is rewritten before TTS while the on-screen cues keep the exact
 * source spelling. This runs on narration only — code cues are never modified.
 */

/**
 * Ordered replacements applied to narration text (longest patterns first).
 *
 * `\b` cannot be used after tokens ending in punctuation (`#`, `+`), because the
 * following character is not a word character — those patterns use explicit
 * lookaheads instead.
 */
const PRONUNCIATION_RULES: Array<[RegExp, string]> = [
  [/\bASP\.NET\s+Core\b/gi, 'A S P dot net core'],
  [/\bASP\.NET\b/gi, 'A S P dot net'],
  [/\b\.NET\b/g, 'dot net'],
  [/\bC#(?![#\w])/g, 'C sharp'],
  [/\bF#(?![#\w])/g, 'F sharp'],
  [/\bC\+\+(?![\w+])/g, 'C plus plus'],
  [/\bSQL\b/g, 'sequel'],
  [/\bLINQ\b/g, 'link'],
  [/\bEF Core\b/gi, 'E F core'],
  [/\bHTTP\b/g, 'H T T P'],
  [/\bHTTPS\b/g, 'H T T P S'],
  [/\bURLs\b/g, 'U R Ls'],
  [/\bURL\b/g, 'U R L'],
  [/\bURI\b/g, 'U R I'],
  [/\bAPIs\b/g, 'A P Is'],
  [/\bAPI\b/g, 'A P I'],
  [/\bJSON\b/g, 'J S O N'],
  [/\bXML\b/g, 'X M L'],
  [/\bHTML\b/g, 'H T M L'],
  [/\bCSS\b/g, 'C S S'],
  [/\bCLI\b/g, 'C L I'],
  [/\bIDE\b/g, 'I D E'],
  [/\bSDK\b/g, 'S D K'],
  [/\bJWT\b/g, 'J W T'],
  [/\bOAuth\b/gi, 'O auth'],
  [/\bOIDC\b/g, 'O I D C'],
  [/\bIIS\b/g, 'I I S'],
  [/\bKestrel\b/gi, 'Kestrel'],
  [/\bNuGet\b/gi, 'new get'],
  [/\bNRT\b/g, 'N R T'],
  [/\bVS Code\b/gi, 'V S code'],
  [/\bTypeScript\b/gi, 'Type script'],
  [/\bJavaScript\b/gi, 'Java script'],
  [/\bPostgreSQL\b/gi, 'postgres'],
  [/\bKubernetes\b/gi, 'koo ber net eez'],
  [/\bDocker\b/gi, 'docker'],
  [/\bCI\/CD\b/g, 'C I C D'],
  [/\bSSO\b/g, 'S S O'],
  [/\bSAML\b/g, 'S A M L'],
  [/\bMFA\b/g, 'M F A'],
  [/\bCORS\b/g, 'C O R S'],
  [/\bXSS\b/g, 'X S S'],
  [/\bCSRF\b/g, 'C S R F'],
  [/\bDTOs\b/g, 'D T Os'],
  [/\bDTO\b/g, 'D T O'],
  [/\bORM\b/g, 'O R M'],
  [/\bGC\b/g, 'G C'],
  [/\bTLS\b/g, 'T L S'],
  [/\bSSL\b/g, 'S S L'],
  [/\bTCP\b/g, 'T C P'],
  [/\bUDP\b/g, 'U D P'],
  [/\bIP\b/g, 'I P'],
  [/\bDNS\b/g, 'D N S'],
  [/\bCDN\b/g, 'C D N'],
  [/\bS3\b/g, 'S three'],
  [/\bEC2\b/g, 'E C two'],
  [/\bRDS\b/g, 'R D S'],
  [/\bVPC\b/g, 'V P C'],
  [/\bIAM\b/g, 'I A M'],
  [/\bARN\b/g, 'A R N'],
  [/\bSQS\b/g, 'S Q S'],
  [/\bSNS\b/g, 'S N S'],
  [/\bLambda\b/gi, 'lambda'],
  [/\bgRPC\b/g, 'g R P C'],
  [/\bGraphQL\b/gi, 'graph Q L'],
  [/\bRedis\b/gi, 'red iss'],
  [/\bNginx\b/gi, 'engine X'],
  [/\bXUnit\b/gi, 'X unit'],
  [/\bMoq\b/gi, 'mock'],
];

export function normalizeForSpeech(text: string): string {
  let result = text;
  for (const [pattern, replacement] of PRONUNCIATION_RULES) {
    result = result.replace(pattern, replacement);
  }
  return cleanSpokenText(result);
}

/** Removes markdown/code artefacts that read badly aloud. */
export function cleanSpokenText(text: string): string {
  return text
    .replace(/`([^`]+)`/g, '$1') // inline code → plain words
    .replace(/\*\*([^*]+)\*\*/g, '$1') // bold
    .replace(/\*([^*]+)\*/g, '$1') // italic
    .replace(/_([^_]+)_/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1') // links → label
    .replace(/^\s*[-*+]\s+/gm, '') // list markers
    .replace(/\s+/g, ' ')
    .trim();
}
