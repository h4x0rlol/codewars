import kotlin.math.sqrt


fun buddy(start: Long, limit: Long): String {
    val ms = mutableListOf<Long>()
    val ns = mutableListOf<Long>()
    var NN: Long = 0
    var MM: Long = 0
    for (i in start..limit + 1) {
        val divisor = getDivisors(i)
        val m = divisor.sum()
        ms.add(m - 1)
    }
    for (m in ms) {
        val divisor = getDivisors(m)
        val n = divisor.sum()
        ns.add(n - 1)
    }
    var i = 0
    var j = 0
    first@ while (i <= ns.size-1) {
        second@ while (j<=ms.size-1) {
            if(ns[i] in start..limit) {
                if(getDivisors(ns[i]).sum()-1==ms[j] && ns[i]<ms[j]){
                    NN =ns[i]
                    MM = ms[j]
                    break@first
                }
                else {
                    i++
                }
            }
            else {
                i++
            }
            j += 1
        }
    }
    if(NN == 0.toLong() || MM == 0.toLong()) {
        return "Nothing"
    }
    return "($NN $MM)"
}


fun getDivisors(n: Long): MutableList<Long> {
    val r = sqrt(n.toDouble()).toInt() + 1
    val divisors = mutableListOf<Long>()
    val largeDivisors = mutableListOf<Long>()
    for (i in 1..r.toLong()) {
        if (n % i == 0.toLong()) {
            divisors.add(i)
            if (i * i != n && i != 1.toLong()) {
                largeDivisors.add(n / i)
            }
        }
    }
    for (divisor in largeDivisors.reversed()) {
        divisors.add(divisor)
    }
    return divisors
}


fun main() {
//    print(getDivisors(483213213213))
    println(buddy(1071625, 1103735))
}