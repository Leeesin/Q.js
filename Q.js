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
            return str.split('').reduce((pre, cur) => {
                pre[cur] ? pre[cur]++ : pre[cur] = 1
                return pre
            }, {})
        },
        /**
        * @description 清除左右空格
        */
        trim: (str) => {
            return str.replace(/(^\s*)|(\s*$)/g, "");
        },
        /**
         * @description 清除所有空格
         */
        trimAll: (str) => {
            return str.replace(/\s+/g, "");
        },
        /**
         * @description 清除左空格
         */
        trimLeft: (str) => {
            return str.replace(/(^\s*)/g, "");
        },
        /**
         * @description 清除右空格
         */
        trimRight: (str) => {
            return str.replace(/(\s*$)/g, "");
        },
    },
    // 数字相关方法
    number: {

    },
    // 验证
    // 1.数据类型验证
    // 2.表单验证
    validate: {
        /**
         * o:传入需要验证的数据
         * type:判断的类型
         */
        isType: (o, type) => {
            if (!type) {
                return Object.prototype.toString.call(o)
            }
            switch (type.toLowerCase()) {
                case 'string':
                    return Object.prototype.toString.call(o) === '[object String]';
                case 'number':
                    return Object.prototype.toString.call(o) === '[object Number]';
                case 'boolean':
                    return Object.prototype.toString.call(o) === '[object Boolean]';
                case 'undefined':
                    return Object.prototype.toString.call(o) === '[object Undefined]';
                case 'null':
                    return Object.prototype.toString.call(o) === '[object Null]';
                case 'function':
                    return Object.prototype.toString.call(o) === '[object Function]';
                case 'array':
                    return Object.prototype.toString.call(o) === '[object Array]';
                case 'object':
                    return Object.prototype.toString.call(o) === '[object Object]';
                case 'nan':
                    return isNaN(o);
                case 'elements':
                    return Object.prototype.toString.call(o).indexOf('HTML') !== -1;
            }
        },
    }
}

let b = Q.string.getFrequencyNumber('abcss')
console.log(b);
