/**
 * Returns true if the given user agent is from chrome. 
 * @param {string} user_agent 
 * @returns {boolean}
 */
export function isChrome(user_agent) {
    return user_agent.indexOf("Chrome") > -1;
}

export function isFirefox(user_agent) {
    return user_agent.indexOf("Firefox") > -1;
}

export function isSafari(user_agent) {
    return user_agent.indexOf("Safari") > -1 && !isChrome(user_agent);
}

export function isEdge(user_agent) {
    return user_agent.indexOf("Edg") > -1;
}

