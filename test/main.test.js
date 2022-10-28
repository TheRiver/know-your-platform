import { expect } from "chai"
import { getBrowser, isChrome, isEdge, isFirefox, isSafari } from "../src/main.js";

describe("Can check various browser types", () => {
    const FIREFOX   = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0";
    const SAFARI    = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15";
    const CHROME    = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36";
    const EDGE      = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.24";

    const AGENTS = [FIREFOX, SAFARI, CHROME, EDGE];
    const ANSWERS = [
        "FIREFOX",
        "SAFARI",
        "CHROME",
        "EDGE"
    ];

    it("Handles Firefox", () => {
        expect(isFirefox(FIREFOX)).to.be.true;
        expect(isSafari(FIREFOX)).to.be.false;
        expect(isChrome(FIREFOX)).to.be.false;
        expect(isEdge(FIREFOX)).to.be.false;
    });

    it("Handles Safari", () => {
        expect(isFirefox(SAFARI)).to.be.false;
        expect(isSafari(SAFARI)).to.be.true;
        expect(isChrome(SAFARI)).to.be.false;
        expect(isEdge(SAFARI)).to.be.false;
    });

    it("Handles Chrome", () => {
        expect(isFirefox(CHROME)).to.be.false;
        expect(isSafari(CHROME)).to.be.false;
        expect(isChrome(CHROME)).to.be.true;
        expect(isEdge(CHROME)).to.be.false;
    });

    it("Handles Edge", () => {
        expect(isFirefox(EDGE)).to.be.false;
        expect(isSafari(EDGE)).to.be.false;
        expect(isChrome(EDGE)).to.be.false;
        expect(isEdge(EDGE)).to.be.true;
    });


    it("Recognises all agents", () => {
        expect(AGENTS.length).equals(ANSWERS.length);               // We have enough answers
        expect(new Set(AGENTS).size).equals(AGENTS.length);         // Everything is unique

        for (let i = 0; i < AGENTS.length; i++) {
            expect(getBrowser(AGENTS[i])).equals(ANSWERS[i]);
        }
    })
})