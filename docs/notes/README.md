---
title: Notes 首页
---

::: warning
This is a warning
:::

<template>
  <div class="test-demo">
    <el-button>button</el-button>
    <br>
    <br>
    <el-alert
        title="自定义 close-text"
        type="info"
        close-text="知道了">
    </el-alert>
  </div>
</template>

```js
class InnerAudioContext {
    constructor(id, opts) {
        this.audioEl = this.init(id, opts);
        this._isPaused = false;
    }

    set src(value) {
        this.audioEl.src = value;
    }

    /**
     * 监听音频暂停事件
     * @param {function} callback 回调函数
     */
    onPause(callback) {
        this.audioEl.addEventListener('pause', callback);
    }

    /**
     * 取消监听音频暂停事件
     * @param {function} callback 回调函数
     */
    offPause(callback) {
        this.audioEl.removeEventListener('pause', callback);
    }
}

export default {
    createInnerAudioContext(id, opts = {}) {
        return new InnerAudioContext(id, opts);
    }
};
```
