
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Stage}","click",function(sym,e){sym.play("inizio");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Rectangle}","click",function(sym,e){sym.$("oprcamaasd").show();});
//Edge binding end
})("Symbol_1");
//Edge symbol end:'Symbol_1'

//=========================================================

//Edge symbol: 'Symbol_2'
(function(symbolName){})("Symbol_2");
//Edge symbol end:'Symbol_2'

//=========================================================

//Edge symbol: 'Symbol_3'
(function(symbolName){})("Symbol_3");
//Edge symbol end:'Symbol_3'
})(jQuery,AdobeEdge,"EDGE-466355665");