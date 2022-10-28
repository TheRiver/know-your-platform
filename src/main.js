/**
 * Returns true if the given user agent is from chrome. 
 * @param {string} user_agent 
 * @returns {boolean}
 */
export function isChrome(user_agent) {
    return user_agent.indexOf("Chrome") > -1 && !isEdge(user_agent);
}

export function isFirefox(user_agent) {
    return user_agent.indexOf("Firefox") > -1;
}

export function isSafari(user_agent) {
    return user_agent.indexOf("Safari") > -1 && !isChrome(user_agent) && !isEdge(user_agent);
}

export function isEdge(user_agent) {
    return user_agent.indexOf("Edg") > -1;
}

export function getBrowser(user_agent) {
    if (isChrome(user_agent)) return "CHROME";
    if (isFirefox(user_agent)) return "FIREFOX";
    if (isSafari(user_agent)) return "SAFARI";
    if (isEdge(user_agent)) return "EDGE";

    return "OTHER";
}