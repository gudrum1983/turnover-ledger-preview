function a(t,f={}){if(!t)return"";const[r,n,o]=t.split("-");if(!r||!n||!o)return t;const i=`${o}.${n}.${r}`;return f.withTrailingDot?`${i}.`:i}export{a as f};
