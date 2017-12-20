
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_uno}","click",function(sym,e){sym.play("01");sym.stop("02");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_due}","click",function(sym,e){sym.play("02");sym.stop("03");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_tre}","click",function(sym,e){sym.play("03");sym.stop("04");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_quattro}","click",function(sym,e){sym.play("04");sym.stop("05");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7000,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-16595501");