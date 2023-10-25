/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

// 输入：
// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// 输出：
// [null, null, null, 2, 2, false]

// 解释：
// MyStack myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// myStack.top(); // 返回 2
// myStack.pop(); // 返回 2
// myStack.empty(); // 返回 False

class MyQueue {
    constructor() {
        this.queue = [];
    }

    push(x) {
        this.queue.push(x)
    }

    peek() {
        return this.isEmpty ? null : this.queue.shift()
    }

    get isEmpty() {
        return this.size === 0;
    }

    get size() {
        return this.queue.length;
    }
}

class MyStack {
    constructor() {
        this.queue = new MyQueue();
    }

    push(x) {
        this.queue.push(x);
    }

    pop() {
        let len = this.queue.size

        while (len > 0) {
            const item = this.queue.peek()

            if (len === 1) {
                return item
            } else {
                this.queue.push(item)
            }

            len--
        }
    }

    top() {
        let len = this.queue.size

        let res = null

        while (len > 0) {
            const item = this.queue.peek()

            if (len === 1) {
                res = item
            }

            this.queue.push(item)

            len--
        }

        return res
    }

    empty() {
        return this.queue.isEmpty
    }
}
/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

