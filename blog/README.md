# Hello VuePress

::: tip
This is a tip
:::

<template>
  <div class="test-demo">
    <el-button>button</el-button>
  </div>
</template>

``` js
class InnerAudioContext {
    constructor(id, opts) {
        this.audioEl = this.init(id, opts);
        this._isPaused = false;
    }

    set src(value) {
        this.audioEl.src = value;
    }
    set startTime(value) {
        this.audioEl.mozCurrentSampleOffset = value;
    }
    set autoplay(value) {
        this.audioEl.autoplay = value;
    }

    get duration() {
        let v = '';
        if (this.audioEl.src) {
            v = this.audioEl.duration;
        }
        return v;
    }
    get volume() {
        return this.audioEl.volume;
    }

    init(id) {
        let audioElement = document.createElement('AUDIO');
        if (id) {
            audioElement = document.getElementById(id);
        } else {
            audioElement.id = Date.now();
            audioElement.style.position = 'absolute';
            audioElement.style.top = '-200px';
            audioElement.preload = 'metadata';
            audioElement.controls = false;
            document.body.appendChild(audioElement);
        }
        return audioElement;
    }

    /**
     * 暂停
     */
    play() {
        this._isPaused = false;
        this.audioEl.play();
    }

    /**
     * 暂停
     */
    pause() {
        this._isPaused = true;
        this.audioEl.pause();
    }

    /**
     * 销毁当前实例
     */
    destroy() {
        this.audioEl.remove();
    }

    /**
     * 跳转到指定位置
     * @param {number} pos
     */
    seek(pos) {
        this.audioEl.currentTime = pos;
    }

    /**
     * 监听音频进入可以播放状态的事件。但不保证后面可以流畅播放
     * @param {function} callback 回调函数
     */
    onCanplay(callback) {
        this.audioEl.addEventListener('canplay', callback);
    }

    /**
     * 取消监听音频进入可以播放状态的事件
     * @param {function} callback 回调函数
     */
    offCanplay(callback) {
        this.audioEl.removeEventListener('canplay', callback);
    }

    /**
     * 监听音频播放事件
     * @param {function} callback 回调函数
     */
    onPlay(callback) {
        this.audioEl.addEventListener('play', callback);
    }

    /**
     * 取消监听音频播放事件
     * @param {function} callback 回调函数
     */
    offPlay(callback) {
        this.audioEl.removeEventListener('play', callback);
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