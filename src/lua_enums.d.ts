declare const BeliefTypes: {
    [K in keyof typeof BeliefType]: int;
} & {
    NO_BELIEF: int
}