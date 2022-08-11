function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    let myStrongest = 0;
    let myWeakest = 0;
    let friendsStrongest = 0;
    let friendsWeakest = 0;
    if (yourLeft === yourRight) {
        myStrongest = yourLeft;
        myWeakest = yourLeft;
    } else if (yourLeft > yourRight) {
        myStrongest = yourLeft;
        myWeakest = yourRight;
    } else {
        myStrongest = yourRight;
        myWeakest = yourLeft;
    }
    if (friendsLeft === friendsRight) {
        friendsStrongest = friendsLeft;
        friendsWeakest = friendsLeft;
    } else if (friendsLeft > friendsRight) {
        friendsStrongest = friendsLeft;
        friendsWeakest = friendsRight;
    } else {
        friendsStrongest = friendsRight;
        friendsWeakest = friendsLeft;
    }
    return myStrongest === friendsStrongest && myWeakest === friendsWeakest;
}
