function solution(time) {
    time = time.split(':');
    if (Number(time[0]) > 23) {
        return false;
    } else if (Number(time[1] > 59)) {
        return false;
    }
    return true;
}
