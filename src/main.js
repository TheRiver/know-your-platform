/**
 * Returns true if the given user agent is from chrome. 
 * @param {string} user_agent 
 * @returns {boolean}
 */
export function isChrome(user_agent) {
    return user_agent.indexOf("Chrome") > -1 && !isEdge(user_agent);
}

/**
 * Returns true if the given user agent is from Firefox. 
 * @param {string} user_agent 
 * @returns {boolean}
 */
export function isFirefox(user_agent) {
    return user_agent.indexOf("Firefox") > -1;
}

/**
 * Returns true if the given user agent is from Safari.
 * @param {string} user_agent 
 * @returns {boolean}
 */
export function isSafari(user_agent) {
    return user_agent.indexOf("Safari") > -1 && !isChrome(user_agent) && !isEdge(user_agent);
}

/**
 * Returns true if the given user agent is from Edge. 
 * @param {string} user_agent 
 * @returns {boolean}
 */
export function isEdge(user_agent) {
    return user_agent.indexOf("Edg") > -1;
}

/**
 * Given a useragent string, this specifies which 
 * browser the agent string identifies. 
 * @param {string} user_agent 
 * @returns {('CHROME'|'FIREFOX'|'SAFARI'|'EDGE'|'OTHER')}
 */
export function getBrowser(user_agent) {
    if (isChrome(user_agent)) return "CHROME";
    if (isFirefox(user_agent)) return "FIREFOX";
    if (isSafari(user_agent)) return "SAFARI";
    if (isEdge(user_agent)) return "EDGE";

    return "OTHER";
}
