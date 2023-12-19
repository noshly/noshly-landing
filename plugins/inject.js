import Vue from 'vue'
import sanitizeHtml from 'sanitize-html';

Vue.prototype.$sanitizeText = (text, allowedTags = ['em','br']) => {
    return sanitizeHtml(text,{
      allowedTags
    })
}
