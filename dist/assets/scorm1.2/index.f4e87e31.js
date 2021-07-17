!function(){var t,e;(e=t||(t={})).DateTime="datetime",e.List="list",e.Number="number",e.PluralRules="pluralrules",e.RelativeTime="relativetime",customElements.define("lia-format",class extends HTMLElement{constructor(){super(),this.span=document.createElement("span"),this.option={},this.value_="",this.format,this.locale}connectedCallback(){switch(this.attachShadow({mode:"open"}).appendChild(this.span),this.locale=this.get("locale")||void 0,this.format=this.get("format")||void 0,this.format){case"number":this.option={compactDisplay:this.get("compactDisplay"),currency:this.get("currency"),currencyDisplay:this.get("currencyDisplay"),currencySign:this.get("currencySign"),localeMatcher:this.get("localeMatcher"),maximumFractionDigits:this.get("maximumFractionDigits"),maximumSignificantDigits:this.get("maximumSignificantDigits"),minimumFractionDigits:this.get("minimumFractionDigits"),minimumIntegerDigits:this.get("minimumIntegerDigits"),minimumSignificantDigits:this.get("minimumSignificantDigits"),notation:this.get("notation"),numberingSystem:this.get("numberingSystem"),signDisplay:this.get("signDisplay"),style:this.get("localeStyle"),unit:this.get("unit"),unitDisplay:this.get("unitDisplay"),useGrouping:this.get("useGrouping")};break;case"datetime":this.option={calendar:this.get("calendar"),dateStyle:this.get("dateStyle"),day:this.get("day"),dayPeriod:this.get("dayPeriod"),era:this.get("era"),formatMatcher:this.get("formatMatcher"),fractionalSecondDigits:this.get("fractionalSecondDigits"),hour:this.get("hour"),hour12:this.get("hour12"),hourCycle:this.get("hourCycle"),localeMatcher:this.get("localeMatcher"),minute:this.get("minute"),month:this.get("month"),numberingSystem:this.get("numberingSystem"),second:this.get("second"),timeStyle:this.get("timeStyle"),timeZone:this.get("timeZone"),timeZoneName:this.get("timeZoneName"),weekday:this.get("weekday"),year:this.get("year")};break;case"relativetime":this.unit=this.get("unit")||void 0,this.option={localeMatcher:this.get("localeMatcher"),numeric:this.get("numeric"),style:this.get("localeStyle")};break;case"list":this.option={localeMatcher:this.get("localeMatcher"),style:this.get("localeStyle"),type:this.get("type")};break;case"pluralrules":this.option={localeMatcher:this.get("localeMatcher"),maximumFractionDigits:this.get("maximumFractionDigits"),maximumSignificantDigits:this.get("maximumSignificantDigits"),minimumFractionDigits:this.get("minimumFractionDigits"),minimumIntegerDigits:this.get("minimumIntegerDigits"),minimumSignificantDigits:this.get("minimumSignificantDigits"),type:this.get("type")};break;default:this.option={}}this.value_=this.textContent||"",this.view()}view(){let e="";try{switch(this.format){case t.Number:e=new Intl.NumberFormat(this.locale,this.option).format(parseFloat(this.value_));break;case t.DateTime:e=new Intl.DateTimeFormat(this.locale,this.option).format(Date.parse(this.value_));break;case t.RelativeTime:e=new Intl.RelativeTimeFormat(this.locale,this.option).format(this.value_,this.unit);break;case t.List:e=new Intl.ListFormat(this.locale,this.option).format(JSON.parse(this.value_));break;case t.PluralRules:e=new Intl.PluralRules(this.locale,this.option).select(parseFloat(this.value_))}}catch(t){console.warn("intl-format: ",t.message)}this.span.innerText=e||this.value_}get(t){const e=this.getAttribute(t);return null===e?void 0:e}get value(){return this.value_}getFormat(){switch(this.get("format")){case t.DateTime:return t.DateTime;case t.List:return t.List;case t.Number:return t.Number;case t.PluralRules:return t.PluralRules;case t.RelativeTime:return t.RelativeTime}return null}set value(t){this.value_!==t&&(this.value_=t,this.view())}disconnectedCallback(){}})}();