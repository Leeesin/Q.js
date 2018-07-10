let Q = {
    //数组相关方法
    array: {
        // 1.数组去重
        removeRepeatItem: (arr) => {
            //1.1 
            return arr.filter((item, index, self) => {
                return self.indexOf(item) === index
            })
            // 1.2
            // return [...new Set(arr)]
        },
        // 数组打乱顺序
        upsetArr: (arr) => {
            return arr.sort(_ => {
                return Math.random() - 0.5
            })
        },
        // 数组最大最小值
        getMaxItem: (arr) => {
            return Math.max.apply(null, arr)
        },
        getMinArr: (arr) => {
            return Math.min.apply(null, arr)
        },
        // 求和
        getSum: (arr) => {
            return arr.reduce((pre, cur) => {
                return pre + cur
            })
        },
        // 求平均值
        getAverage: (arr) => {
            return this.getSum(arr) / arr.length
        }

    },
    // 字符串相关方法
    string: {
        // 1.统计一串字符中每个字母出现的次数
        getFrequencyNumber: (str) => {
            str.split('').reduce((pre, cur) => {
                pre[cur] ? pre[cur]++ : pre[cur] = 1
                return pre
            }, {})
        }
    },
    // 数字相关方法
    number: {

    }
}
