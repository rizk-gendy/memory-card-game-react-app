
export default function AssistiveTechInfo({ emojiData, matchingCards }) {
    return (
        <section className="sr-only" aria-live="polite" aria-atomic={true}>
            <h1>Game Status</h1>
            <p>{`Number of matched pairs: ${(matchingCards.length) / 2}.`}</p>
            <p>{`Number of cards left to match: ${emojiData.length - matchingCards.length}.`}</p>
            <p></p>
        </section>
    )
}