function luko (a,b) {
    if (a<b) [a,b]=[b,a]
    return a>b ? luko (a-b,b): a
    n=n*(n-1)(n-2)
}