// https://school.programmers.co.kr/learn/courses/30/lessons/92334?language=javascript
// 내 풀이
function solution(id_list, report, k) {
    const answer = Array.from({length: id_list.length}, () => 0);
    
    if ((id_list.length - 1) < k) {
        return answer;
    }
    
    const new_report = [...new Set(report)];
    const report_list = {};
    const reported_count = Array.from({length: id_list.length}, () => 0);
    
    id_list.map(user => report_list[user] = []);
    
    new_report.map(user => {
        const [reporter, reported] = user.split(' ');
        report_list[reporter].push(reported);
        reported_count[id_list.indexOf(reported)]++;
    })
    
    reported_count.map((count, index) => {
        if (count >= k) {
            for (const [key, value] of Object.entries(report_list)) {
                if (value.includes(id_list[index])) {
                    answer[id_list.indexOf(key)]++;
                }
            }
        }
    });
    
    return answer;
}

// 다른 사람 풀이
function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(a=>{return a.split(' ')});
    let counts = new Map();
    for (const bad of reports){
        counts.set(bad[1],counts.get(bad[1])+1||1)
    }
    let good = new Map();
    for(const report of reports){
        if(counts.get(report[1])>=k){
            good.set(report[0],good.get(report[0])+1||1)
        }
    }
    let answer = id_list.map(a=>good.get(a)||0)
    return answer;
}