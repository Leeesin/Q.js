// 数组每一项的排列组合
const arr1 = ['大', '中', '小']
const arr2 = ['微辣', '中辣', '变态辣']
const arr3 = ['微甜', '中甜', '变态甜']

/**
 *
 *
 * @param {array} arr1
 * @param {array} arr2
 * @returns
 */
const group2Array = (arr1, arr2) => {
    return arr1.reduce((pre, cur) => {
        arr2.forEach(item => {
            Array.isArray(cur)
                ? pre.push([...cur, item])
                : pre.push([cur, item])
        });
        return pre
    }, [])
}
/**
 *
 *
 * @param {array} args
 * @returns
 */
const getGroup = (...args) => {
    return args.reduce((pre, cur) => {
        return group2Array(pre, cur)
    })
}

const xxx = getGroup(arr1, arr2, arr3)
console.log(xxx, 'xxx');
